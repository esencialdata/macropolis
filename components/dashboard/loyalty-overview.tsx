import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function LoyaltyOverview() {
  const supabase = getSupabaseServerClient();
  const [{ data: accounts }, { data: transactions }] = await Promise.all([
    supabase.from("loyalty_accounts").select("balance").limit(10),
    supabase
      .from("loyalty_transactions")
      .select("amount, type, created_at")
      .order("created_at", { ascending: false })
      .limit(5)
  ]);

  const totalBalance = (accounts ?? []).reduce((acc, item) => acc + item.balance, 0);

  return (
    <article className="rounded-xl bg-white p-6 shadow-soft">
      <h2 className="text-xl font-semibold text-brand-teal">Programa de lealtad</h2>
      <p className="mt-2 text-brand-dark/80">Saldo total de puntos: {totalBalance}</p>
      <div className="mt-4 space-y-3">
        <p className="text-sm font-medium text-brand-dark">Últimas transacciones</p>
        <ul className="space-y-2 text-sm">
          {(transactions ?? []).map((tx) => (
            <li key={tx.created_at} className="flex items-center justify-between rounded-lg bg-brand-light/60 px-3 py-2">
              <span className="capitalize">{tx.type}</span>
              <span>{tx.amount} pts</span>
            </li>
          ))}
          {transactions?.length === 0 && <li className="text-brand-dark/70">Sin movimientos recientes.</li>}
        </ul>
      </div>
    </article>
  );
}
