import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-emerald-600" />
          <span className="text-lg font-bold text-gray-900">Smart Campus</span>
        </div>
        <p className="text-sm text-gray-600">Empowering schools with technology for better learning experiences.</p>
        <div className="text-sm text-gray-500">© {new Date().getFullYear()} Smart Campus. All rights reserved.</div>
      </div>
    </footer>
  );
}
