import { getSupabaseServerClient } from "@/lib/supabase/server";
import { trackServerEvent } from "@/lib/analytics.server";

export async function earnPoints({ accountId, amount }: { accountId: string; amount: number }) {
  const supabase = getSupabaseServerClient();
  const result = await supabase.rpc("earn_points", { account_id: accountId, amount_delta: amount });
  if (!result.error) {
    await trackServerEvent("loyalty_points_earned", { account_id: accountId, amount });
  }
  return result;
}

export async function redeemPoints({ accountId, amount }: { accountId: string; amount: number }) {
  const supabase = getSupabaseServerClient();
  const result = await supabase.rpc("redeem_points", { account_id: accountId, amount_delta: amount });
  if (!result.error) {
    await trackServerEvent("loyalty_points_redeemed", { account_id: accountId, amount });
  }
  return result;
}
