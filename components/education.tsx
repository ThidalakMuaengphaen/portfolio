import React from "react";
import Image from "next/image";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl text-gray-700 text-center font-extrabold  mb-10">
        Education
      </h2>

      <div className="bg-blue-100 mx-auto max-w-5xl text-primaryBlue p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
          <div className="flex items-center">
            <Image
              className="rounded-lg"
              src="/image/LogoKKU.webp"
              alt="Khon Kaen University Logo"
              width={80}
              height={80}
            />
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-orange-700">
                Khon Kaen University
              </h3>
              <p className="text-lg text-gray-700 mt-1">
                Computer Engineering, 3rd Year
              </p>
            </div>
          </div>

          <div className="mt-6 mr-6 md:mt-0 text-right md:text-left">
            <p className="text-lg font-semibold mt-10 text-gray-800">
              GPA: 3.55
            </p>
            <p className="text-sm text-gray-600 mt-2">JUN 2022 - Present</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

