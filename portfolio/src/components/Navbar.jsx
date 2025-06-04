import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'work', label: 'Work' },
    { to: 'testimonial', label: 'Testimonial' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-md rounded-full px-6 py-3 z-50 max-w-fit">
      <ul className="hidden md:flex gap-6">
        {links.map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              smooth
              duration={500}
              offset={-64} // adjust based on your navbar height
              className="cursor-pointer text-gray-700 hover:text-blue-600 transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
