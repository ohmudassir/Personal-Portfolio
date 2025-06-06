import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Work from './sections/Work';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import BackToTop from './components/BackToTop';
import FadeInSection from './components/FadeInSection';

export default function App() {
  return (
      <div className="bg-surface min-h-screen px-4 md:px-8 py-6">
      <Navbar />
      <FadeInSection><Home /></FadeInSection>
      <FadeInSection><About /></FadeInSection>
      <FadeInSection><Work /></FadeInSection>
      <FadeInSection><Testimonials /></FadeInSection>
      <FadeInSection><Contact /></FadeInSection>
      <Footer /> {/* 👈 Add Footer at the end */}
      <BackToTop /> {/* 👈 Add BackToTop button */}
     </div>
  );
}
