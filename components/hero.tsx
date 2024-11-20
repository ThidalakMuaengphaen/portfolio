import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="bg-primaryBlue py-20 px-6">
      <div className="container mx-auto max-w-screen-lg flex flex-col md:flex-row items-center md:justify-between">
        {/* Image Section */}
        <Image
          className="w-full md:w-1/4 rounded-lg"
          src="/image/profile.png"
          alt="Profile"
          width={300}
          height={300}
        />

        {/* Text Section */}
        <div className="mt-6 ml-6 md:mt-0 md:w-3/4 md:pl-10 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Thidalak Mueangphaen</h1>
          <p className="text-lg mb-4">
            “ I am a computer engineering student, with a strong interest in software development.
            <br className="hidden sm:inline" />
            I am dedicated to continuously improving my skills in programming languages, striving to enhance myself every day ”
          </p>

          {/* Flex container for button and icons */}
          <div className="flex items-center gap-6 mb-6 justify-center md:justify-start">
            {/* View My Work Button */}
            <a
              href="#experience"
              className="bg-blue-200 py-3 px-4 rounded-full hover:bg-pink-200 transition duration-300"
            >
              View My Work
            </a>

            {/* Social Media Links */}
            <div className="flex gap-4" aria-label="Social Media Links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primaryBlue text-2xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primaryBlue text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:youremail@example.com"
                className="text-accent hover:text-primaryBlue text-2xl"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
