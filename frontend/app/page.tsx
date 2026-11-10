
const stats = [
  { label: "Total Applications", value: 0 },
  { label: "Interviews", value: 0 },
  { label: "Offers", value: 0 },
  { label: "Rejections", value: 0 },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">
          InternTrack
        </h1>

        <p className="mt-4 text-slate-400">
          Your personal internship application tracker.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <p className="text-sm text-slate-400">
                {stat.label}
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                {stat.value}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
