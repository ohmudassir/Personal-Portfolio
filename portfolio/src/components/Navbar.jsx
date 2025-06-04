import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/work', label: 'Work' },
    { to: '/testimonial', label: 'Testimonial' },
    { to: '/contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Mudassir</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`text-gray-700 hover:text-blue-600 transition ${
                  location.pathname === to ? 'font-semibold text-blue-600' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          id="mobile-menu"
          role="menu"
          className="md:hidden bg-white shadow-md space-y-4 py-4 px-6"
        >
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                role="menuitem"
                className={`block text-gray-700 hover:text-blue-600 ${
                  location.pathname === to ? 'font-semibold text-blue-600' : ''
                }`}
                onClick={handleLinkClick}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
