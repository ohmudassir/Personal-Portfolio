import React, { useState, useEffect } from "react";
import avatar from "../assets/avatar.png";
import clsx from "clsx";

const skills = ["React", "IoT", "Tkinter"];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let fadeTimeout;
    let cycleTimeout;

    const cycle = () => {
      setFade(true);
      fadeTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % skills.length);
        setFade(false);
        cycleTimeout = setTimeout(cycle, 1800); // Continuous loop without pause
      }, 500); // match with CSS animation duration
    };

    cycle();

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(cycleTimeout);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4"
    >
      <img
        src={avatar}
        alt="Avatar"
        className="w-32 h-32 rounded-full object-cover shadow-material mb-4"
      />
      <p className="text-lg md:text-xl font-medium text-onSurface mb-1">
        Hi, I&apos;m <span className="text-primary font-semibold">Mudassir</span> 🤟
      </p>

      <p className="text-2xl md:text-3xl font-bold text-onSurface mb-1">
        Building modern solutions with
      </p>

      <p className="text-2xl md:text-3xl font-bold text-primary h-[42px]">
        <span
          className={clsx(
            "inline-block transition-opacity duration-500",
            fade ? "opacity-0" : "opacity-100"
          )}
        >
          {skills[index]}
        </span>
      </p>

      <a
        href="#contact"
        className="mt-6 px-6 py-3 bg-primary text-white font-medium rounded-full shadow-material hover:opacity-90 transition"
      >
        Contact Me
      </a>
    </section>
  );
}
