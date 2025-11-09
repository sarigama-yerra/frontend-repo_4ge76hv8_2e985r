import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-emerald-600" />
          <span className="text-xl font-extrabold tracking-tight text-gray-900">Smart Campus</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#journey" className="hover:text-gray-900">Student Journey</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <a href="#" className="rounded-lg bg-emerald-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-emerald-700">Get Started</a>
      </div>
    </header>
  );
}
