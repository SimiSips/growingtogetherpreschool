import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Teachers from './components/Teachers';
import Activities from './components/Activities';
import Registration from './components/Registration';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Teachers />
        <Activities />
        <Registration />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;