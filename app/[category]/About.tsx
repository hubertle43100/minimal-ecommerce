import React from "react";
import Link from "next/link";
import Image from "next/image";
import store1 from "../public/Store1.png";
import store2 from "../public/Store2.png";
import store3 from "../public/Store3.png";

const stores = [
  {
    image: store1,
    location: "San Francisco",
    address: "1064 Ella Streeto San Francisco, CA 94107",
  },
  {
    image: store2,
    location: "Palo Alto",
    address: "4337 Rardin Drive Palo Alto, CA 94301",
  },
  {
    image: store3,
    location: "Santa Cruz",
    address: "4196 Ventura Drive Santa Cruz, CA 95060",
  },
];

const About = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 lg:max-w-7xl">
        <p className="mt-4 text-5xl md:text-6xl lg:text-7xl">
          We are a small business that is passionate about boba. We are the
          best!
        </p>
        <div className="flex items-center mt-8">
          <h2 className="text-lg font-bold tracking-tight text-gray-900">
            Locations
            <div className="border-t border-black flex-shrink-0 mb-4"></div>
          </h2>
        </div>
        <div className="justify-between grid grid-cols-3">
          {stores.map((store, index) => (
            <div key={index} className="mr-4">
              <Image
                src={store.image}
                alt="Example Image"
                width={400}
                height={400}
              />
              <p className="text-3xl lg:text-4xl mt-4">{store.location}</p>
              <p className="text-sm md:text-md opacity-50 mb-8">
                {store.address}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-8">
          <h2 className="text-lg font-bold tracking-tight text-gray-900">
            About Us
            <div className="border-t border-black flex-shrink-0 mb-4"></div>
          </h2>
        </div>
        <p className="text-3xl lg:text-4xl mb-8">We are cool</p>
      </div>
    </div>
  );
};

export default About;
