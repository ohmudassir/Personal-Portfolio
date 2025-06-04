import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Work from './sections/Work';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
