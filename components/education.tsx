import React from "react";
import Image from "next/image";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl text-center font-bold mb-4">Education</h2>

      <div className="bg-white ml-32 mr-28 mb-8 text-primaryBlue p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="text-xl ml-16 mb-1 mt-4">3rd year of Computer Engineering</h3>
          <h3 className="text-m mr-20 mt-4">JUN 2022 - Present</h3>
        </div>

        <div className="flex mt-4">
            <Image
              className="w-full md:w-1/12 rounded-lg ml-16"
              src="/image/LogoKKU.webp"
              alt="Profile"
              width={300}
              height={300}
            />
            <h3 className="text-orange-700 text-2xl font-bold mt-8 ml-8 mr-20" > Khon Kaen <br className="hidden sm:inline" /> University </h3>
          <h3 className="text-lg font-bold mt-10 ml-96"> GPA: 3.55 </h3>
        </div>

      </div>
    </section>
  );
};

export default Education;
