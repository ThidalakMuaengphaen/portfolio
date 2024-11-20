import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-primaryBlue py-20 text-center">
      <h1 className="text-4xl font-bold mb-12">Contact me</h1>
      <div className="flex flex-col items-center gap-6">
        {/* Social Links */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-16">
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center text-accen text-2xl hover:bg-pink-200 p-3 rounded-lg"
            aria-label="GitHub"
          >
            <FaGithub />
            <span className="ml-2 text-lg">Thidalak Mueangphaen</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center text-accent text-2xl hover:bg-pink-200 p-3 rounded-lg"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
            <span className="ml-2 text-lg">Thidalak Mueangphaen</span>
          </a>

          {/* Email */}
          <a
            href="mailto:youremail@example.com"
            className="flex flex-row items-center text-accent text-2xl hover:bg-pink-200 p-3 rounded-lg"
            aria-label="Email"
          >
            <FaEnvelope />
            <span className="ml-2 text-lg">thidalak.m@kkumail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
