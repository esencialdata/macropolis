-- Storage bucket for pet photos
insert into storage.buckets (id, name, public)
values ('pet-photos', 'pet-photos', true)
on conflict (id) do nothing;

create policy "Allow public read on pet photos" on storage.objects
  for select
  using (bucket_id = 'pet-photos');

create policy "Owners upload pet photos" on storage.objects
  for insert
  with check (
    bucket_id = 'pet-photos' and auth.role() = 'authenticated'
  );
