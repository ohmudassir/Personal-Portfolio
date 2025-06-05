import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  const handleClick = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <nav className="sticky top-4 z-50 max-w-4xl mx-auto px-4">
      <div className="relative px-4 py-5 bg-white/80 backdrop-blur rounded-[40px] shadow-material">
        {/* Top bar for mobile */}
        <div className="flex justify-between items-center md:hidden">
          <h1 className="text-xl font-semibold text-primary">Menu</h1>
          <button onClick={() => setOpen(!open)} className="text-primary">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu - stays inside the card, overlays content, no push down */}
        <div
          className={`${
            open ? "absolute top-full left-0 w-full mt-2 z-40" : "hidden"
          } md:hidden`}
        >
          <ul className="px-4 py-3 bg-white/90 backdrop-blur rounded-[30px] shadow-md mx-2">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => handleClick(item.href)}
                    className={`block w-full px-4 py-3 rounded-full font-medium text-primary transition ${
                      isActive
                        ? "bg-primary/10"
                        : "bg-transparent hover:bg-primary/10"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:grid grid-cols-5 gap-2 text-center mt-4 md:mt-0">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className={`block w-full px-4 py-3 rounded-full font-medium text-primary transition ${
                    isActive
                      ? "bg-primary/10"
                      : "bg-transparent hover:bg-primary/10"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
