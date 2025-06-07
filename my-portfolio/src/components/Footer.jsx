import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-surface text-onSurface border-t border-white/10 py-10 mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <p className="text-sm text-onSurface/60 text-center md:text-left">
          © 2025 Mudassir. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/ohmudassir"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-full hover:bg-primary/10 transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://linkedin.com/in/ohmudassir"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-full hover:bg-primary/10 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="mailto:ohmudassir@gmail.com"
            className="group p-2 rounded-full hover:bg-primary/10 transition"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
