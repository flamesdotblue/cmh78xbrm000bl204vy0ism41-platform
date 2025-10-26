import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionGrid from './components/CollectionGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/60 via-white to-white" />
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute top-96 -right-32 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <CollectionGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
