import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import StudentJourney from './components/StudentJourney';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <StudentJourney />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
