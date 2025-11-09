import React from 'react';

const features = [
  {
    title: 'Digital Classrooms',
    desc: 'Timetables, assignments, and learning resources in one place.',
  },
  {
    title: 'Parent Portal',
    desc: 'Track progress, attendance, and communicate with teachers.',
  },
  {
    title: 'Smart ID & Access',
    desc: 'Secure campus entry and cashless canteen with a single card.',
  },
  {
    title: 'Clubs & Events',
    desc: 'Discover activities and register for upcoming events.'
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything a school needs</h2>
          <p className="mt-3 text-gray-600">Built to make campus life simpler for students, teachers, and parents.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white">
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
