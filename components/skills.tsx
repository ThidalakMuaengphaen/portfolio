import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-gray-700 text-3xl text-center font-extrabold mb-10">Skills</h2>
      <div className="container mx-auto grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-pink-100 ml-32 text-primaryBlue p-6 rounded-lg shadow-md flex flex-col h-full">
          <h3 className="text-blue-500 text-xl font-bold text-center mt-2 mb-5">HARD SKILLS</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Python, JAVA, HTML/CSS, JavaScript, Typescript, C++
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Figma
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Github
            </li>
          </ul>
        </div>

        <div className="bg-blue-100 ml-8 mr-8 text-primaryBlue p-6 rounded-lg shadow-md flex flex-col h-full">
          <h3 className="text-pink-400 text-xl font-bold text-center mt-2 mb-5">SOFT SKILLS</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Communication
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Positive Attitude
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Teamwork and Collaboration
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Curiosity and Lifelong Learning
            </li>
          </ul>
        </div>

        <div className="bg-pink-100 mr-28 text-primaryBlue p-6 rounded-lg shadow-md flex flex-col h-full">
          <h3 className="text-blue-500 text-xl font-bold text-center mt-2 mb-5">LANGUAGES</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Thai - Native
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              English - CEFR B2
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Chinese - HSK2
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
