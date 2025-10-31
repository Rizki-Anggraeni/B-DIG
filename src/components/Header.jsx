import React, { useState } from "react";
import Button from "./Button";
import { Link as ScrollLink } from "react-scroll";

export default function Header({ company = "lopartech" }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6C7CFF] to-[#00E5FF] flex items-center justify-center text-black font-bold">
            L
          </div>
          <div>
            <div className="text-lg font-bold">{company}</div>
            <div className="text-sm text-neutral-400">
              Digital & Cloud Solutions
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-white transition cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            className="hover:text-white transition cursor-pointer"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-white transition cursor-pointer"
          >
            Contact
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <Button variant="ghost">Get in touch</Button>
          </ScrollLink>
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md bg-white/5 border border-neutral-800"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-neutral-200"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-neutral-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden max-w-6xl mx-auto px-6 mt-3 transition-all ${
          open ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col gap-3 bg-white/2 border border-neutral-800 rounded-lg p-4">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setOpen(false)}
            className="text-neutral-200 cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            onClick={() => setOpen(false)}
            className="text-neutral-200 cursor-pointer"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setOpen(false)}
            className="text-neutral-200 cursor-pointer"
          >
            Contact
          </ScrollLink>
          <div className="pt-2">
            <Button className="w-full">Get in touch</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
