import React from "react";
import Image from "next/image";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-primaryBlue py-20">
      <h2 className="text-3xl font-bold ml-32 mb-4">Awards & work experience</h2>

      {/*project1*/}
      <div className="bg-blue-100 ml-32 mr-28 mb-8 text-primaryBlue p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="text-xl ml-6 mb-1 mt-4 font-bold">MENUmagic (Website)</h3>
          <h3 className="text-m mr-6 mt-4 font-bold">JUN 2024 - OCT 2024</h3>
        </div>

        <p className="text-blue-500 text-m font-semibold ml-6 mb-6">Full Stack Developer</p>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start ml-6">
            <span className="mr-2">•</span>
            A food randomizer website where users can add their own menus, with menus clearly categorized.
          </li>
          <li className="flex items-start ml-6">
            <span className="mr-2">•</span>
            Using NextJS, Typescript, Firebase .
          </li>
        </ul>

        <div className="flex flex-wrap justify-center mt-10">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4">
            <Image
              className="w-full h-auto rounded-md object-cover"
              src="/image/menumagic1.png"
              alt="MENUmagic Screenshot 1"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4">
            <Image
              className="w-full h-auto rounded-md object-cover"
              src="/image/menumagic2.png"
              alt="MENUmagic Screenshot 2"
              width={300}
              height={300}
            />
          </div>
        </div>

      </div>

      {/*project2*/}
      <div className="bg-pink-100 ml-32 mr-28 mb-8 text-primaryBlue p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="text-xl ml-6 mb-1 mt-4 font-bold">Detect falls (Innovation)</h3>
          <h3 className="text-m mr-6 mt-4 font-bold">SEP 2024 - OCT 2024</h3>
        </div>

        <p className="text-blue-500 text-m font-semibold ml-6 mb-6">Leader</p>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start ml-6">
            <span className="mr-2">•</span>
            Device to detect falls in the elderly and notify relatives via Line.
          </li>
          <li className="flex items-start ml-6">
            <span className="mr-2">•</span>
            As a leader, I oversee planning, design, and operations, focusing on an information notification system developed in C++ .
          </li>
        </ul>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <Image
              className="w-full h-auto rounded-md object-cover"
              src="/image/detect1.jpg"
              alt="Detect Falls Screenshot 1"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/6">
            <Image
              className="w-full h-auto rounded-md object-cover"
              src="/image/detect2.png"
              alt="Detect Falls Screenshot 2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>


      {/*project3*/}
      <div className="bg-blue-100 ml-32 mr-28 mb-8 text-primaryBlue p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="text-xl ml-6 mb-1 mt-4 font-bold">Intelligence Bin (Innovation)</h3>
          <h3 className="text-m mr-6 mt-4 font-bold">APR 2024 - SEP 2024</h3>
        </div>

        <p className="text-blue-500 text-m font-semibold ml-6 mb-6">Leader</p>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start ml-6">
            <span className="mr-2">•</span>
            Winner of the e-Waste HACK BKK 2024 by TrueLab.
          </li>
          <li className="flex items-start ml-6">
            <span className="mr-2">•</span>
            A project to create a trash can that automatically separates recyclables with 92% AI accuracy, using e-waste materials.
          </li>
          <li className="flex items-start ml-6">
            <span className="mr-2">•</span>
            My role is to train the AI model for optimal performance.
          </li>
        </ul>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/6">
            <Image
              className="w-full h-auto rounded-md object-cover"
              src="/image/ewaste1.jpg"
              alt="e-waste Screenshot 1"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/6">
            <Image
              className="w-full h-auto rounded-md object-cover"
              src="/image/ewaste2.jpg"
              alt="e-waste Screenshot 2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      {/*project4*/}
      <div className="bg-pink-100 ml-32 mr-28 mb-8 text-primaryBlue p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="text-xl ml-6 mb-1 mt-4 font-bold">Quickhire (Website)</h3>
          <h3 className="text-m mr-6 mt-4 font-bold">APR 2023 - AUG 2023</h3>
        </div>

        <p className="text-blue-500 text-m font-semibold ml-6 mb-6">UX/UI design</p>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start ml-6">
            <span className="mr-2">•</span>
            Received funding from the New Regional STARTUPS.
          </li>
          <li className="flex items-start ml-6">
            <span className="mr-2">•</span>
            The final 50 teams in STARTUP THAILAND LEAGUE 2023.
          </li>
          <li className="flex items-start ml-6">
            <span className="mr-2">•</span>
            A part-time job platform with a match system for both employers and job seekers.
          </li>
        </ul>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/6">
            <Image
              className="w-full h-auto rounded-md object-cover"
              src="/image/quickhire1.jpg"
              alt="Quickhire Screenshot 1"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
            <Image
              className="w-full h-auto rounded-md object-cover"
              src="/image/quickhire2.png"
              alt="Quickhire Screenshot 2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      {/*project5*/}
      <div className="bg-blue-100 ml-32 mr-28 mb-8 text-primaryBlue p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="text-xl ml-6 mb-1 mt-4 font-bold">Why cannot I be myself? (Game)</h3>
          <h3 className="text-m mr-6 mt-4 font-bold">NOV 2022 - APR 2023</h3>
        </div>

        <p className="text-blue-500 text-m font-semibold ml-6 mb-6">Graphics design</p>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start ml-6">
            <span className="mr-2">•</span>
            Advanced to the second round of the 25s NSC 2023.
          </li>
          <li className="flex items-start ml-6">
            <span className="mr-2">•</span>
            A narrative-driven game that explores sexual diversity, where players must engage with the game to learn and understand gender differences.
          </li>
          <li className="flex items-start ml-6">
            <span className="mr-2">•</span>
            Responsible for various graphics, such as scenes, characters, and cutscenes.
          </li>
        </ul>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/6">
            <Image
              className="w-full h-auto rounded-md object-cover"
              src="/image/game1.png"
              alt="Game Screenshot 1"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/6">
            <Image
              className="w-full h-auto rounded-md object-cover"
              src="/image/game2.png"
              alt="Game Screenshot 2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Experience;
