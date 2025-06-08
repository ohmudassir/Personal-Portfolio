import React, { useState } from "react";
import aboutImage from "../assets/about.svg";
import solarvideo from "../assets/solar.mp4";
import videoThumbnail from "../assets/solarThumbnail.svg"; // fallback thumbnail

const projects = [
  {
    name: "Project One",
    shortDescription: "A React-based web app with Tailwind CSS",
    description: [
      {
        type: "paragraph",
        content:
          "Project One is a modern web app built using React and styled with Tailwind CSS. It emphasizes responsive design, component-based architecture, and performance optimization.",
      },
      {
        type: "section",
        title: "Features",
        items: [
          "Fast and responsive UI",
          "Component-driven architecture",
          "Reusable styling with Tailwind CSS",
        ],
      },
      {
        type: "section",
        title: "Tech Stack",
        content: "React, Tailwind CSS, Node.js",
      },
    ],
    tech: "React, Tailwind CSS, Node.js",
    link: "",
    image: aboutImage,
    video: "",
    category: "Web Project",
  },
  {
    name: "Solar Cleaner via Bluetooth",
    shortDescription: "IoT device monitoring system",
    description: [
      {
        type: "paragraph",
        content:
          "Solar Cleaner via Bluetooth is an IoT-based Solar Panel Cleaning System designed to reduce manual effort in maintaining solar panels, particularly in remote or harsh environments.",
      },
      {
        type: "section",
        title: "Key Features",
        items: [
          "Remote cleaning via mobile app using Bluetooth (HC-05)",
          "Monitors dust level, humidity, and other environmental conditions",
          "Motor control for brush and water spray",
          "Real-time feedback on system status",
          "Logs cleaning sessions, performance metrics, and system health",
        ],
      },
      {
        type: "section",
        title: "Methodology",
        items: [
          "Secure Bluetooth interface for mobile control",
          "Arduino-based control unit with integrated sensors",
          "MQTT protocol for lightweight messaging",
          "Field-tested under multiple conditions (15m Bluetooth range)",
        ],
      },
      {
        type: "section",
        title: "Technologies Used",
        content:
          "Python, Arduino, MQTT, Bluetooth (HC-05), Humidity Sensor, Dust Sensor",
      },
      {
        type: "paragraph",
        content:
          "Developed over a 3-month period with collaborative hardware and software effort. Deployed in a university lab for live demo. Future improvements include Wi-Fi support and automatic triggering based on sensor thresholds.",
      },
    ],
    tech: "Python, Arduino, MQTT, Bluetooth (HC-05), Humidity Sensor, Dust Sensor",
    link: "",
    image: "",
    video: solarvideo,
    category: "IoT Project",
  },
  {
    name: "Project Three",
    shortDescription: "Desktop app built with Tkinter",
    description: [
      {
        type: "paragraph",
        content:
          "Project Three is a desktop application built using Python's Tkinter. It features a local SQLite database, clean UI, and simple workflows for daily use.",
      },
      {
        type: "section",
        title: "Core Capabilities",
        items: [
          "User-friendly graphical interface",
          "Persistent data storage using SQLite",
          "Built-in validation and input management",
        ],
      },
      {
        type: "section",
        title: "Technology Stack",
        content: "Tkinter, SQLite",
      },
    ],
    tech: "Tkinter, SQLite",
    link: "",
    image: "/images/project-three.jpg",
    video: "",
    category: "Desktop App",
  },
];

const renderDescription = (project) => {
  if (!Array.isArray(project.description)) {
    return <p className="text-onSurface mb-4">{project.description}</p>;
  }

  return (
    <div className="text-onSurface text-sm space-y-4">
      {project.description.map((block, idx) => {
        if (block.type === "paragraph") {
          return <p key={idx}>{block.content}</p>;
        }

        if (block.type === "section") {
          return (
            <div key={idx}>
              <h4 className="font-semibold text-primary mb-1">{block.title}</h4>
              {block.items ? (
                <ul className="list-disc list-inside space-y-1">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="font-medium">{block.content}</p>
              )}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

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
            className="relative cursor-pointer rounded-material overflow-hidden shadow-material hover:shadow-lg transition-shadow duration-300 bg-surface group"
            onClick={() => setSelectedProject(project)}
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={getThumbnail(project)}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center rounded-material">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
                className="px-6 py-3 bg-primary text-white font-medium rounded-full shadow-material hover:opacity-90 transition"
              >
                View Project
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-1">
                {project.name}
              </h3>
              <p className="text-onSurface text-sm">{project.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-surface rounded-material shadow-material max-w-lg w-full p-6 relative overflow-hidden max-h-[90vh]"
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
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-64 object-cover rounded-material mb-4"
              />
            )}

            <div className="overflow-y-auto max-h-52 pr-2 scrollbar-hide">
              <h3 className="text-2xl font-bold text-primary mb-2">
                {selectedProject.name}
              </h3>
              {renderDescription(selectedProject)}
              <p className="italic text-sm text-onSurface mt-4">
                Category: {selectedProject.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}