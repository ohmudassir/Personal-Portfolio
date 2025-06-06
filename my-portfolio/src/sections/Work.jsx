import React, { useState } from "react";
import aboutImage from "../assets/about.svg";
import solarvideo from "../assets/solar.mp4";
import videoThumbnail from "../assets/solarThumbnail.svg";

// Project Data
const projects = [
  {
    name: "Project One",
    shortDescription: "A React-based web app with Tailwind CSS",
    description: "Detailed description of Project One with more info...",
    tech: "React, Tailwind CSS, Node.js",
    link: "https://github.com/your/project-one",
    image: aboutImage,
    video: "",
    category: "Web Project",
  },
  {
    name: "Solar Cleaner via Bluetooth",
    shortDescription: "IoT device monitoring system",
    description: "Detailed description of Project Two with more info...",
    tech: "Python, IoT, MQTT",
    link: "https://github.com/your/project-two",
    image: "", // No image, video exists
    video: solarvideo,
    category: "IoT Project",
  },
  {
    name: "Project Three",
    shortDescription: "Desktop app built with Tkinter",
    description: "Detailed description of Project Three with more info...",
    tech: "Tkinter, SQLite",
    link: "https://github.com/your/project-three",
    image: "/images/project-three.jpg",
    video: "",
    category: "Desktop App",
  },
];

// Main Component
export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getThumbnail = (project) => {
    if (project.image) return project.image;
    if (project.video) return videoThumbnail;
    return "/images/placeholder.png";
  };

  return (
    <section id="work" className="min-h-[80vh] px-6 py-12 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-primary mb-10 text-center">Work</h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={i}
            onClick={() => setSelectedProject(project)}
            className="group relative cursor-pointer rounded-material overflow-hidden shadow-material hover:shadow-xl transition-shadow duration-300 bg-surface"
          >
            {/* Image or Thumbnail */}
            <img
              src={getThumbnail(project)}
              alt={project.name}
              className="w-full h-48 object-cover rounded-t-material transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
                className="px-6 py-3 bg-primary text-white font-medium rounded-full shadow hover:opacity-90 transition"
              >
                View Project
              </button>
            </div>

            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-1">{project.name}</h3>
              <p className="text-onSurface text-sm">{project.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-surface rounded-material shadow-material max-w-lg w-full p-6 relative overflow-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-onSurface text-xl font-bold hover:text-primary"
              aria-label="Close"
            >
              &times;
            </button>

            {selectedProject.video ? (
              <video
                src={selectedProject.video}
                controls
                className="w-full rounded-material mb-4"
              />
            ) : (
              <img
                src={getThumbnail(selectedProject)}
                alt={selectedProject.name}
                className="w-full h-64 object-cover rounded-material mb-4"
              />
            )}

            <h3 className="text-2xl font-bold text-primary mb-2">
              {selectedProject.name}
            </h3>
            <p className="text-onSurface mb-4">{selectedProject.description}</p>
            <p className="text-primary font-medium mb-4">{selectedProject.tech}</p>
            <p className="italic text-sm text-onSurface mb-6">
              Category: {selectedProject.category}
            </p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-full shadow hover:opacity-90 transition"
            >
              View Project Repository
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
