-- PetConnect schema bootstrap
create extension if not exists "uuid-ossp";

create type public.tag_status as enum ('pending', 'active', 'lost', 'replaced');

create table public.profiles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users on delete cascade,
  full_name text,
  phone text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table public.pets (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users on delete cascade,
  name text not null,
  species text not null,
  breed text,
  birthdate date,
  weight_kg numeric,
  temperament text,
  allergies text[],
  medical_notes text,
  tag_status public.tag_status default 'pending'::public.tag_status,
  public_slug text unique not null,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table public.emergency_contacts (
  id uuid primary key default uuid_generate_v4(),
  pet_id uuid not null references public.pets on delete cascade,
  label text not null,
  phone text not null,
  email text,
  created_at timestamp with time zone default now()
);

create table public.businesses (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid not null references auth.users on delete cascade,
  name text not null,
  slug text unique not null,
  city text,
  contact_email text,
  contact_phone text,
  status text default 'pending',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table public.loyalty_accounts (
  id uuid primary key default uuid_generate_v4(),
  business_id uuid not null references public.businesses on delete cascade,
  pet_id uuid not null references public.pets on delete cascade,
  balance integer default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  unique (business_id, pet_id)
);

create table public.loyalty_transactions (
  id uuid primary key default uuid_generate_v4(),
  account_id uuid not null references public.loyalty_accounts on delete cascade,
  type text not null check (type in ('earn', 'redeem')),
  amount integer not null,
  metadata jsonb,
  created_at timestamp with time zone default now()
);

create table public.public_views (
  id uuid primary key default uuid_generate_v4(),
  pet_id uuid not null references public.pets on delete cascade,
  rescuer_contact text,
  rescuer_message text,
  location_lat numeric,
  location_lng numeric,
  created_at timestamp with time zone default now()
);

-- RLS policies (owners only)
alter table public.pets enable row level security;
create policy "Owners manage their pets" on public.pets
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

alter table public.emergency_contacts enable row level security;
create policy "Owners manage contacts" on public.emergency_contacts
  for all using (exists (
    select 1 from public.pets p where p.id = emergency_contacts.pet_id and p.owner_id = auth.uid()
  ));

alter table public.loyalty_accounts enable row level security;
create policy "Owners and businesses view loyalty" on public.loyalty_accounts
  for select using (true);
create policy "Businesses manage loyalty" on public.loyalty_accounts
  for all using (
    exists (
      select 1 from public.businesses b
      where b.id = loyalty_accounts.business_id and b.owner_id = auth.uid()
    )
  );

alter table public.loyalty_transactions enable row level security;
create policy "Accounts access" on public.loyalty_transactions
  for select using (
    exists (
      select 1 from public.loyalty_accounts la
      where la.id = loyalty_transactions.account_id and la.business_id in (
        select id from public.businesses where owner_id = auth.uid()
      )
    )
  );

alter table public.public_views enable row level security;
create policy "Public submissions" on public.public_views
  for insert with check (true);
create policy "Owner view" on public.public_views
  for select using (
    exists (
      select 1 from public.pets p where p.id = public_views.pet_id and p.owner_id = auth.uid()
    )
  );

-- Stored procedures for loyalty
create or replace function public.earn_points(account_id uuid, amount_delta integer)
returns void as $$
begin
  update public.loyalty_accounts
  set balance = balance + amount_delta, updated_at = now()
  where id = account_id;

  insert into public.loyalty_transactions (account_id, type, amount)
  values (account_id, 'earn', amount_delta);
end;
$$ language plpgsql security definer;

create or replace function public.redeem_points(account_id uuid, amount_delta integer)
returns void as $$
begin
  update public.loyalty_accounts
  set balance = balance - amount_delta, updated_at = now()
  where id = account_id and balance >= amount_delta;

  insert into public.loyalty_transactions (account_id, type, amount)
  values (account_id, 'redeem', amount_delta);
end;
$$ language plpgsql security definer;
