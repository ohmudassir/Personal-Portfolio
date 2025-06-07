import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto py-16 px-6 scroll-mt-20 animate-appear"
      aria-label="Contact Section"
    >
      <h2 className="text-4xl font-bold text-primary mb-10 text-center">Contact</h2>

      <form
        className="space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent (fake submission for now).");
        }}
      >
        {/* Name Field */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium text-onSurface">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="bg-surface text-onSurface placeholder-onSurface/50 px-5 py-3 rounded-2xl shadow-md border border-onSurface/10 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-onSurface">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className="bg-surface text-onSurface placeholder-onSurface/50 px-5 py-3 rounded-2xl shadow-md border border-onSurface/10 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm font-medium text-onSurface">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Write your message here..."
            className="bg-surface text-onSurface placeholder-onSurface/50 px-5 py-3 rounded-2xl shadow-md border border-onSurface/10 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-primary text-onPrimary px-6 py-3 rounded-material hover:bg-primary/90 transition-colors font-semibold shadow-md"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
