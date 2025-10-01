export default function DashboardLoading() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-6 py-12">
      <div className="h-10 w-64 animate-pulse rounded bg-brand-light/60" />
      <div className="grid gap-6 lg:grid-cols-3">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="h-48 animate-pulse rounded-xl bg-brand-light/60" />
        ))}
      </div>
    </div>
  );
}
