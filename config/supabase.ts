export const supabaseConfig = {
  schema: "public",
  storageBuckets: {
    petPhotos: "pet-photos"
  },
  policies: {
    pets: {
      read: "auth.uid() = owner_id OR tag_status = 'active'",
      insert: "auth.uid() = owner_id",
      update: "auth.uid() = owner_id"
    }
  }
} as const;
