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
      <main>
        <Home />
        <About />
        <Work />
        <Testimonial />
        <Contact />
      </main>
    </>
  );
}

export default App;
