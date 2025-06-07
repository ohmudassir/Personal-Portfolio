import React, { useState, useEffect } from "react";
import avatar from "../assets/avatar.png";
import clsx from "clsx";
import FadeInSection from "../components/FadeInSection";

const skills = ["React", "IoT", "Tkinter"];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % skills.length);
        setFade(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <FadeInSection>
      <section
        id="home"
        className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4"
      >
        <img
          src={avatar}
          alt="Avatar"
          className="w-32 h-32 rounded-full object-cover shadow-material mb-4"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          Mudassir 👋
        </h1>

        <p className="text-2xl md:text-3xl font-bold text-onSurface mb-1">
          Building modern solutions with
        </p>

        <p className="text-2xl md:text-3xl font-bold text-primary h-[42px]">
          <span
            className={clsx(
              "inline-block",
              fade ? "animate-dust" : "animate-appear"
            )}
          >
            {skills[index]}
          </span>
        </p>

        <a
          href="#contact"
          onClick={() => {
            window.dispatchEvent(
              new CustomEvent("navigate", {
                detail: { href: "#contact" },
              })
            );
          }}
          className="mt-6 px-6 py-3 bg-primary text-white font-medium rounded-full shadow-material hover:opacity-90 transition"
        >
          Contact Me
        </a>
      </section>
    </FadeInSection>
  );
}
