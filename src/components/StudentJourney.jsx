import React, { useEffect, useRef, useState } from 'react';

// This component animates a student walking from left to right as you scroll.
// When the student reaches the center, the book flips into a laptop.
export default function StudentJourney() {
  const containerRef = useRef(null);
  const studentRef = useRef(null);
  const [showLaptop, setShowLaptop] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      const total = rect.height + viewportH; // scrollable distance while section is in view
      // progress from 0 at section top entering viewport to 1 when leaving
      const progress = Math.min(1, Math.max(0, 1 - (rect.bottom - viewportH) / total));

      const studentEl = studentRef.current;
      if (studentEl) {
        // Move horizontally across the container
        const translateX = progress * 100; // 0% -> 100%
        studentEl.style.transform = `translateX(${translateX}%)`;

        // Toggle book -> laptop when near center (around 50%)
        const flipPoint = 0.48;
        setShowLaptop(progress >= flipPoint);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="journey" ref={containerRef} className="relative min-h-[70vh] bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A student's day on Smart Campus</h2>
          <p className="mt-3 text-gray-600">Scroll to follow along as our student moves across the campus.</p>
        </div>
      </div>

      {/* ground line */}
      <div className="absolute left-0 right-0 bottom-24 h-1 bg-emerald-200" />

      {/* student */}
      <div
        ref={studentRef}
        className="absolute bottom-20 left-0 w-[220px] transition-transform duration-75 will-change-transform"
        aria-hidden
      >
        <StudentIllustration showLaptop={showLaptop} />
      </div>
    </section>
  );
}

function StudentIllustration({ showLaptop }) {
  return (
    <div className="relative h-48 w-full">
      {/* Simple walking character using SVG shapes with a backpack */}
      <svg viewBox="0 0 220 180" className="h-full w-full">
        {/* shadow */}
        <ellipse cx="100" cy="165" rx="40" ry="6" fill="#bcd7c2" opacity="0.6" />

        {/* legs */}
        <path d="M95 120 L85 160" stroke="#2e2e2e" strokeWidth="6" strokeLinecap="round" />
        <path d="M110 120 L115 160" stroke="#2e2e2e" strokeWidth="6" strokeLinecap="round" />

        {/* body */}
        <circle cx="102" cy="90" r="22" fill="#fde68a" />
        <rect x="88" y="100" width="28" height="28" rx="6" fill="#10b981" />

        {/* backpack */}
        <rect x="70" y="92" width="20" height="28" rx="6" fill="#0ea5e9" />
        <rect x="84" y="96" width="6" height="18" rx="3" fill="#0284c7" />

        {/* head */}
        <circle cx="102" cy="70" r="14" fill="#f59e0b" />
        <circle cx="98" cy="68" r="2" fill="#1f2937" />
        <circle cx="106" cy="68" r="2" fill="#1f2937" />

        {/* arm holding book/laptop */}
        <path d="M116 108 C130 108, 140 110, 150 116" stroke="#2e2e2e" strokeWidth="6" strokeLinecap="round" fill="none" />

        {/* book -> laptop */}
        {showLaptop ? (
          // laptop
          <g>
            <rect x="150" y="112" width="36" height="22" rx="3" fill="#111827" />
            <rect x="154" y="116" width="28" height="10" rx="2" fill="#374151" />
            <rect x="156" y="128" width="24" height="3" rx="1.5" fill="#6b7280" />
          </g>
        ) : (
          // book with flipping effect
          <g>
            <rect x="150" y="110" width="30" height="22" rx="2" fill="#f43f5e" />
            <rect x="152" y="112" width="26" height="18" rx="1" fill="#fee2e2" />
            <rect x="165" y="112" width="2" height="18" fill="#fca5a5" />
          </g>
        )}
      </svg>
    </div>
  );
}
