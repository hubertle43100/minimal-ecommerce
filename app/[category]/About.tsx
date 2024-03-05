import React from "react";
import Link from "next/link";
import Image from "next/image";
import store from "../public/Store1.png";

const About = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl">
        <p className="mt-4 text-8xl">
          We are a small business that is passionate about boba. We are the
          best!
        </p>
        <div className="flex items-center mt-8">
          <h2 className="text-lg font-bold tracking-tight text-gray-900">
            Locations
            <div className="border-t border-black flex-shrink-0"></div>
          </h2>
        </div>
        <p className="mt-4">
          We are a small business that is passionate about boba. We are the
          best!
        </p>
        <Image src={store} alt="Example Image" width={500} height={100} />
        <p>
          We are a small business that is passionate about boba. We are the
          best!
        </p>
      </div>
    </div>
  );
};

export default About;
