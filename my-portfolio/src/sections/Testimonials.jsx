import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Frontend Developer",
    rating: 5,
    comment:
      "This is an excellent service! The UI is clean, modern, and intuitive. I highly recommend it.",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Project Manager",
    rating: 4,
    comment:
      "Very reliable and user-friendly. The smooth scrolling testimonials are a nice touch.",
  },
  {
    id: 3,
    name: "Cynthia Lee",
    role: "UX Designer",
    rating: 5,
    comment:
      "I love the attention to detail and the Material You inspired design. It feels premium and consistent.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Full Stack Developer",
    rating: 4,
    comment:
      "Great work! The automatic horizontal scroll helps catch attention without being distracting.",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex space-x-1 text-yellow-400" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "fill-current" : "stroke-current"}`}
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const containerRef = useRef(null);
  const autoScrollSpeed = 0.5; // Adjust speed here
  const isUserScrolling = useRef(false);
  const scrollTimeout = useRef(null);
  const animationFrameId = useRef(null);

  // Auto-scroll function with smoothness
  const autoScrollStep = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!isUserScrolling.current) {
      container.scrollLeft += autoScrollSpeed;

      // Loop scroll
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }
    }

    animationFrameId.current = requestAnimationFrame(autoScrollStep);
  };

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(autoScrollStep);

    return () => cancelAnimationFrame(animationFrameId.current);
  }, []);

  // Handle user manual scroll to pause auto-scroll and resume after timeout
  const onUserScroll = () => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    isUserScrolling.current = true;

    // Resume auto scroll after 2 seconds of inactivity
    scrollTimeout.current = setTimeout(() => {
      isUserScrolling.current = false;
    }, 2000);
  };

  return (
    <section
      id="testimonials"
      className="max-w-5xl mx-auto py-12 px-6"
      aria-label="Testimonials Section"
    >
      <h2 className="text-4xl font-bold text-primary mb-10 text-center">Testimonials</h2>

      <div
        ref={containerRef}
        onScroll={onUserScroll}
        className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
        tabIndex={0}
        role="list"
        aria-live="polite"
        aria-label="Testimonials carousel"
        style={{ scrollBehavior: "smooth" }} // ensure smooth manual scrolling
      >
        {testimonials.map(({ id, name, role, rating, comment }) => (
          <article
            key={id}
            className="flex-shrink-0 snap-center w-80 bg-primary rounded-material p-6 shadow-material hover:shadow-lg transition-shadow duration-300 cursor-default"
            role="listitem"
            aria-labelledby={`testimonial-${id}-name`}
            aria-describedby={`testimonial-${id}-comment`}
          >
            <StarRating rating={rating} />
            <p
              id={`testimonial-${id}-comment`}
              className="mt-4 text-onPrimary text-base font-medium leading-relaxed"
            >
              “{comment}”
            </p>
            <p
              id={`testimonial-${id}-name`}
              className="mt-6 font-semibold text-onPrimary text-lg"
            >
              {name}
            </p>
            <p className="text-sm italic text-onPrimary">{role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
