"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/types/database";

export function getSupabaseClient() {
  return createClientComponentClient<Database>();
}
