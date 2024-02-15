// ProductList.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { simplifiedProduct } from "../interface";
//import Banner from "../public/Boba-Banner.png";

interface ProductListProps {
  data: simplifiedProduct[];
  formattedCategory: string;
}

const AboutUs = () => {
  return (
    <div>
      <div className="relative">
        {/* <Image
          src={Banner} // Replace with the actual path to your PNG file
          alt="Description"
        /> */}
        <div className="absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white  ">
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold hover:text-black hover:translate-y-[-10px] duration-300">
            BOBA
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-6xl tracking-tight text-gray-900 text-center font-bold">
          Who We Are
        </h2>
      </div>
      <p className="mt-4 font-SourceCodePro">
        Adjust the [-10px] value to your preference. This will move the text 10
        pixels up when hovered. You can also use other values like [-2rem],
        [-1.5em], etc. to customize the vertical movement.
      </p>
      {[
        { value: "80%", label: "Repeat client" },
        { value: "90+", label: "clients" },
        { value: "900+", label: "projects" },
      ].map((item, index) => (
        <a
          key={index}
          href="#"
          className="border-solid border-2 border-gray-100 bg-slate-200 p-3 mb-4 inline-block mr-2 mt-5 rounded"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.value}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.label}
          </p>
        </a>
      ))}
    </div>
  );
};

export default AboutUs;
