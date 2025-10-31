import React from "react";

export default function Map({
  shortUrl = "https://maps.app.goo.gl/tVRL6kaq1WZ74RHKA",
  lat,
  lng,
  zoom = 16,
  className = "",
}) {
  // If lat & lng provided, prefer coordinates-based embed which reliably centers on the location
  // and avoids issues with short-link redirects or custom map layers that can't be embedded.
  let src;
  if (typeof lat === "number" && typeof lng === "number") {
    src = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
  } else {
    // Fallback: try embedding by passing the short URL as a query. May be less reliable.
    src = `https://www.google.com/maps?q=${encodeURIComponent(
      shortUrl
    )}&output=embed`;
  }

  return (
    <div
      className={`relative w-full h-64 md:h-72 rounded-lg overflow-hidden border border-neutral-800 ${className}`}
    >
      <iframe
        title="lopartech location"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="absolute inset-0">
        <div className="absolute right-4 bottom-4">
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-black px-3 py-2 rounded-md text-sm font-medium"
          >
            Open full map
          </a>
        </div>

        <InteractionOverlay shortUrl={shortUrl} />
      </div>
    </div>
  );
}

function InteractionOverlay({ shortUrl }) {
  const ref = React.useRef(null);
  
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let startX = 0;
    let startY = 0;
    let dragging = false;

    const threshold = 6; // px

    const onPointerDown = (ev) => {
      startX = ev.clientX;
      startY = ev.clientY;
      dragging = false;

      window.addEventListener("pointermove", onPointerMove, true);
      window.addEventListener("pointerup", onPointerUp, true);
    };

    const onPointerMove = (e) => {
      const dx = Math.abs(e.clientX - startX);
      const dy = Math.abs(e.clientY - startY);
      if (!dragging && (dx > threshold || dy > threshold)) {
        dragging = true;
        // Let the iframe receive subsequent pointer events so the user can pan/zoom
        el.style.pointerEvents = "none";
      }
    };

    const onPointerUp = (e) => {
      window.removeEventListener("pointermove", onPointerMove, true);
      window.removeEventListener("pointerup", onPointerUp, true);

      if (dragging) {
        setTimeout(() => {
          if (el) el.style.pointerEvents = "auto";
        }, 250);
      } else {
        window.open(shortUrl, "_blank", "noopener");
        el.style.pointerEvents = "auto";
      }
    };

    el.addEventListener("pointerdown", onPointerDown);
    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove, true);
      window.removeEventListener("pointerup", onPointerUp, true);
    };
  }, [shortUrl]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute inset-0"
      style={{ pointerEvents: "auto" }}
    />
  );
}
