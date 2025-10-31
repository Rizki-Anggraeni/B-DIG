import React from "react";

export default function About({ children }) {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold">About lopartech</h2>
          <p className="mt-4 text-neutral-300">
            Lopartech membantu perusahaan membangun produk teknologi yang
            scalable dan aman. Kami menggabungkan desain, engineering, dan data
            untuk menghasilkan nilai bisnis nyata.
          </p>
          <ul className="mt-4 space-y-2 text-neutral-300">
            <li>• Cloud-native architecture</li>
            <li>• Product engineering & UX</li>
            <li>• AI & automation</li>
          </ul>
        </div>
        <div>
          <div className="bg-gradient-to-br from-[#071226] via-[#081934] to-[#00121a] border border-neutral-800 rounded-2xl p-6 shadow-lg">
            <p className="text-neutral-300">
              A brief case study or image can go here. Use this card component
              across the site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
