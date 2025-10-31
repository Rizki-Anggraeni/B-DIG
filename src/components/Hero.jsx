import React from "react";
import Button from "./Button";
import { Link as ScrollLink } from "react-scroll";

export default function Hero({
  title = "lopartech",
  subtitle = "We build modern digital experiences for ambitious companies.",
}) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-neutral-300 max-w-xl">
            {subtitle} Kami fokus pada cloud-native apps, product engineering,
            dan solusi AI untuk mempercepat transformasi digital.
          </p>
          <div className="mt-6 flex gap-3">
            <ScrollLink to="contact" smooth={true} duration={500}>
              <Button>Get started</Button>
            </ScrollLink>
            <Button variant="ghost">Learn more</Button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-[#071226] via-[#081934] to-[#00121a] border border-neutral-800 rounded-2xl p-6 shadow-lg">
            <div className="h-48 md:h-56 rounded-lg border border-neutral-800 p-4 flex items-center justify-center text-neutral-300">
              {/* Simple inline SVG illustration to keep assets minimal and fully portable */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 200"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-90"
              >
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#6C7CFF" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <rect
                  x="8"
                  y="8"
                  width="384"
                  height="184"
                  rx="12"
                  fill="url(#g1)"
                  opacity="0.06"
                />
                <g transform="translate(24,24)">
                  <rect
                    x="0"
                    y="0"
                    width="180"
                    height="28"
                    rx="6"
                    fill="#0b1220"
                  />
                  <rect
                    x="0"
                    y="44"
                    width="340"
                    height="20"
                    rx="6"
                    fill="#071226"
                  />
                  <rect
                    x="0"
                    y="76"
                    width="320"
                    height="90"
                    rx="8"
                    fill="#071226"
                  />
                  <circle cx="260" cy="30" r="18" fill="#0b1220" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 opacity-30">
            <svg
              width="140"
              height="140"
              viewBox="0 0 140 140"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="g2" x1="0" x2="1">
                  <stop offset="0%" stopColor="#6C7CFF" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <circle cx="70" cy="70" r="70" fill="url(#g2)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
