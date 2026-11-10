"use client";

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
         
<section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
  <div className="mb-6 flex items-center justify-between">
    <h2 className="text-xl font-semibold">
      Recent Applications
    </h2>

    
<button
  onClick={() => alert("Add Application clicked!")}
  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
>
  + Add Application
</button>

  </div>

  <div className="rounded-lg border border-dashed border-slate-700 py-12 text-center">
    <p className="text-slate-400">
      No applications yet.
    </p>
    <p className="mt-2 text-sm text-slate-500">
      Your internship applications will appear here.
    </p>
  </div>
</section>
      </div>
    </main>
  );
}
