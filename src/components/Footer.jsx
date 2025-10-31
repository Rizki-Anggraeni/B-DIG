import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-12 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-neutral-400">
          © {new Date().getFullYear()} lopartech. All rights reserved.
        </div>
        <div className="text-sm text-neutral-400">
          Built with ❤️ · Technology-driven
        </div>
      </div>
    </footer>
  );
}
