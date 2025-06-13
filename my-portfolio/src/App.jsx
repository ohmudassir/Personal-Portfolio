import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Loader from './components/Loader'; // Stylish spinner

// Lazy load sections
const Home = lazy(() => import('./sections/Home'));
const About = lazy(() => import('./sections/About'));
const Work = lazy(() => import('./sections/Work'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const Contact = lazy(() => import('./sections/Contact'));

export default function App() {
  return (
    <div className="bg-surface min-h-screen px-4 md:px-8 py-6">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Home />
        <About />
        <Work />
        <Testimonials />
        <Contact />
      </Suspense>
      <Footer />
      <BackToTop />
    </div>
  );
}
