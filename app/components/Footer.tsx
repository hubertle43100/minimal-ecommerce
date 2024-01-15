import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 mt-auto">
      <div className="container mx-auto text-left">
        <p className="text-2xl font-Oswald font-bold">
          Check out the other pages
        </p>

        <Link href="/">
          <h1 className="text-sm md:text-1xl font-bold mt-5 mr-4 text-white font-SourceCodePro">
            Home
          </h1>
        </Link>

        <Link href="/Milk_Tea">
          <h1 className="text-sm md:text-1xl font-bold mt-2 mr-4 text-white font-SourceCodePro">
            Milk tea
          </h1>
        </Link>

        <Link href="/Fruit_Tea">
          <h1 className="text-sm md:text-1xl font-bold mt-2 mr-4 text-white font-SourceCodePro">
            Fruit Tea
          </h1>
        </Link>
      </div>
      <div className="container mx-auto text-center">
        <p className="mt-10 text-sm">
          &copy; 2024 Boba Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
