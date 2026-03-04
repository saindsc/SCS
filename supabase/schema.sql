-- Saheeli Counselling initial schema
-- Run this in Supabase SQL Editor

create extension if not exists pgcrypto;

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  subject text not null,
  message text not null,
  status text not null default 'new' check (status in ('new', 'read', 'replied')),
  created_at timestamptz not null default now()
);

create index if not exists idx_contact_messages_created_at on public.contact_messages (created_at desc);
create index if not exists idx_contact_messages_status on public.contact_messages (status);

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  service_slug text not null,
  preferred_date date not null,
  preferred_time text not null,
  session_type text not null check (session_type in ('in-person', 'online')),
  message text,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz not null default now()
);

create index if not exists idx_appointments_created_at on public.appointments (created_at desc);
create index if not exists idx_appointments_status on public.appointments (status);
create index if not exists idx_appointments_preferred_date on public.appointments (preferred_date);

alter table public.contact_messages enable row level security;
alter table public.appointments enable row level security;

drop policy if exists "Allow anon insert contact_messages" on public.contact_messages;
create policy "Allow anon insert contact_messages"
on public.contact_messages
for insert
to anon
with check (true);

drop policy if exists "Allow anon insert appointments" on public.appointments;
create policy "Allow anon insert appointments"
on public.appointments
for insert
to anon
with check (true);
