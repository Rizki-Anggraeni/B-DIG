import React from "react";

function Feature({ title, desc }) {
  return (
    <div className="p-4 rounded-lg bg-white/3 border border-neutral-800">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300">{desc}</p>
    </div>
  );
}

export default function Features({ items = [] }) {
  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Our Services</h2>
      <p className="text-neutral-400 mt-2">
        Solusi end-to-end dari ide ke produksi.
      </p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it, idx) => (
          <Feature key={idx} title={it.title} desc={it.desc} />
        ))}
      </div>
    </section>
  );
}
