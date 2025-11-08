import React from "react";
import Map from "./Map";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Contact us</h2>
      <p className="text-neutral-400 mt-2">Let's discuss your next project.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-neutral-800 bg-gradient-to-br from-[#071226] via-[#081934] to-[#00121a]">
          <h3 className="font-semibold text-xl">Let's connect</h3>
          <p className="text-neutral-400 mt-2">
            Follow or message us on social media.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href="https://wa.me/6282135351941?text=Hello%20Lopartech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-md bg-white/3 hover:bg-white/5 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6" aria-hidden />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <a
              href="https://instagram.com/lopartech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-md bg-white/3 hover:bg-white/5 transition"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" aria-hidden />
              <span className="text-sm font-medium">Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/in/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-md bg-white/3 hover:bg-white/5 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" aria-hidden />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            <a
              href="https://x.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-md bg-white/3 hover:bg-white/5 transition"
              aria-label="X"
            >
              <SiX className="w-6 h-6" aria-hidden />
              <span className="text-sm font-medium">X</span>
            </a>

            <a
              href="https://github.com/rizki-anggraeni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-md bg-white/3 hover:bg-white/5 transition"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" aria-hidden />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#071226] via-[#081934] to-[#00121a] border border-neutral-800 rounded-2xl p-6 shadow-lg">
          <h3 className="font-semibold">Office</h3>
          <div className="mt-4">
            <p className="text-sm text-neutral-300">
              Tlogoadi, Kabupaten Sleman, Daerah Istimewa Yogyakarta
            </p>
            <p className="text-sm text-neutral-300 mt-1">
              Mon–Fri · 09:00–18:00
            </p>

            <div className="mt-4">
              <Map lat={-7.6983056} lng={110.3437778} zoom={17} />
              <a
                className="inline-block mt-3 text-sm text-primary font-medium"
                href={`https://www.google.com/maps?q=${-7.6983056},${110.3437778}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
