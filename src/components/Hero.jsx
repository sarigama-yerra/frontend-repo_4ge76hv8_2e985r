import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200">Welcome to</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Smart Campus
          </h1>
          <p className="mt-6 text-lg leading-7 text-gray-600">
            A modern digital hub for schools where learning, collaboration, and campus life connect seamlessly.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#journey"
              className="rounded-lg bg-emerald-600 px-6 py-3 text-white shadow-sm transition hover:bg-emerald-700"
            >
              Start the Journey
            </a>
            <a
              href="#features"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 shadow-sm transition hover:bg-gray-50"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-b from-emerald-50/70 via-transparent to-transparent"
      />
    </section>
  );
}
