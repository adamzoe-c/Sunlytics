-- ============================================================
-- SUNLYTICS — Supabase Database Setup
-- Paste this entire file into Supabase SQL Editor and run it
-- ============================================================

-- 1. PILOTS TABLE
create table if not exists pilots (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  email text unique not null,
  first_name text not null,
  last_name text not null,
  phone text not null,
  region text not null,
  drone_model text not null,
  license_number text not null,
  license_category text not null,
  status text default 'pending', -- pending | active | suspended
  missions_completed int default 0,
  rating numeric(3,2) default 5.00,
  notes text,
  avatar_url text
);

-- 2. MISSIONS TABLE
create table if not exists missions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  -- customer info
  customer_name text not null,
  customer_email text not null,
  customer_phone text,
  -- location
  address text not null,
  city text not null,
  latitude numeric(10,7),
  longitude numeric(10,7),
  -- mission details
  status text default 'open', -- open | assigned | flying | uploaded | completed | cancelled
  priority text default 'normal', -- normal | urgent
  package text default 'drone', -- drone | premium
  price numeric(10,2) default 149.00,
  notes text,
  -- assignment
  assigned_pilot_id uuid references pilots(id),
  assigned_at timestamptz,
  accepted_at timestamptz,
  -- timing
  scheduled_date date,
  deadline timestamptz,
  completed_at timestamptz
);

-- 3. MISSION IMAGES TABLE
create table if not exists mission_images (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  mission_id uuid references missions(id) on delete cascade,
  pilot_id uuid references pilots(id),
  file_url text not null,
  file_name text,
  file_size int,
  image_type text -- overview | north | south | east | west | detail | other
);

-- 4. NOTIFICATIONS TABLE
create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  pilot_id uuid references pilots(id) on delete cascade,
  mission_id uuid references missions(id) on delete cascade,
  type text not null, -- new_mission | mission_taken | mission_cancelled | reminder
  title text not null,
  title_lv text,
  message text not null,
  message_lv text,
  read boolean default false,
  read_at timestamptz
);

-- 5. PILOT AUTH TABLE (links Supabase auth to pilot profile)
create table if not exists pilot_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  pilot_id uuid references pilots(id),
  created_at timestamptz default now()
);

-- 6. ENABLE REALTIME on missions and notifications
alter publication supabase_realtime add table missions;
alter publication supabase_realtime add table notifications;

-- 7. ROW LEVEL SECURITY
alter table pilots enable row level security;
alter table missions enable row level security;
alter table mission_images enable row level security;
alter table notifications enable row level security;
alter table pilot_profiles enable row level security;

-- Allow authenticated pilots to read their own data
create policy "Pilots can read own profile"
  on pilots for select
  using (id = (select pilot_id from pilot_profiles where id = auth.uid()));

-- Allow pilots to read open missions and their assigned missions
create policy "Pilots can read open missions"
  on missions for select
  using (status = 'open' or assigned_pilot_id = (
    select pilot_id from pilot_profiles where id = auth.uid()
  ));

-- Allow pilots to update mission status (accept)
create policy "Pilots can accept open missions"
  on missions for update
  using (status = 'open' or assigned_pilot_id = (
    select pilot_id from pilot_profiles where id = auth.uid()
  ));

-- Allow pilots to read their notifications
create policy "Pilots read own notifications"
  on notifications for select
  using (pilot_id = (select pilot_id from pilot_profiles where id = auth.uid()));

-- Allow pilots to mark notifications as read
create policy "Pilots update own notifications"
  on notifications for update
  using (pilot_id = (select pilot_id from pilot_profiles where id = auth.uid()));

-- Allow pilots to insert images for their missions
create policy "Pilots insert mission images"
  on mission_images for insert
  with check (pilot_id = (select pilot_id from pilot_profiles where id = auth.uid()));

-- Admin: full access (service role bypasses RLS automatically)

-- 8. INDEXES for performance
create index if not exists idx_missions_status on missions(status);
create index if not exists idx_missions_city on missions(city);
create index if not exists idx_notifications_pilot on notifications(pilot_id, read);
create index if not exists idx_mission_images_mission on mission_images(mission_id);

-- Done!
select 'Sunlytics database setup complete ✅' as result;

-- ============================================================
-- UPDATE: Auto-link pilot_profiles when auth user is created
-- Run this after the initial setup
-- ============================================================

-- Function to auto-link auth user to pilot profile on signup
create or replace function public.handle_new_pilot_user()
returns trigger as $$
begin
  -- When a new auth user signs up with pilot role metadata, link them
  if new.raw_user_meta_data->>'pilot_id' is not null then
    insert into public.pilot_profiles (id, pilot_id)
    values (new.id, (new.raw_user_meta_data->>'pilot_id')::uuid)
    on conflict (id) do update set pilot_id = (new.raw_user_meta_data->>'pilot_id')::uuid;
  end if;
  return new;
end;
$$ language plpgsql security definer;

-- Trigger that fires when a new auth user is created
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_pilot_user();

select 'Pilot auto-link trigger created ✅' as result;
