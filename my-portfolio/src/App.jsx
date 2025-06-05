import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Work from './sections/Work';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="bg-surface min-h-screen px-4 md:px-8 py-6">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Testimonials />
      <Contact />
    </div>
  );
}
