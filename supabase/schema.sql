create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  locale text default 'en',
  role text default 'customer' check (role in ('customer', 'support', 'admin', 'super_admin', 'owner')),
  created_at timestamptz default now()
);

create table if not exists admin_audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references auth.users(id),
  action text not null,
  target_type text,
  target_id text,
  metadata jsonb,
  created_at timestamptz default now()
);

create table if not exists products (
  id text primary key,
  slug text unique not null,
  name text not null,
  description text,
  price numeric(10, 3) not null,
  currency text default 'KWD',
  collection text,
  image text,
  inventory integer default 0,
  source text default 'manual',
  source_payload jsonb,
  created_at timestamptz default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  status text default 'pending',
  total numeric(10, 3) not null,
  currency text default 'KWD',
  shipping_city text,
  tracking_code text,
  created_at timestamptz default now()
);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  product_id text references products(id),
  user_id uuid references auth.users(id),
  rating integer check (rating between 1 and 5),
  body text,
  created_at timestamptz default now()
);
