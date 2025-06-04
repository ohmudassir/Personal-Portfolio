import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Work from './sections/Work';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';

function App() {
  // Scroll to hash on load or hash change for SEO-friendly deep linking
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [window.location.hash]);

  return (
    <>
      <Navbar />
      <main className="pt-16 scroll-smooth">
        <section id="home" className="min-h-screen p-8 flex flex-col justify-center">
          <Home />
        </section>
        <section id="about" className="min-h-screen p-8 flex flex-col justify-center">
          <About />
        </section>
        <section id="work" className="min-h-screen p-8 flex flex-col justify-center">
          <Work />
        </section>
        <section id="testimonial" className="min-h-screen p-8 flex flex-col justify-center">
          <Testimonial />
        </section>
        <section id="contact" className="min-h-screen p-8 flex flex-col justify-center">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
