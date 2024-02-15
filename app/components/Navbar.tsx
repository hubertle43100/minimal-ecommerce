"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import "../globals.css";

const links = [
  { name: "Home", href: "/" },

  { name: "Milk Tea", href: "/Milk_Tea" },
  { name: "Fruit Tea", href: "/Fruit_Tea" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  return (
    <div className="">
      <div className="flex items-center justify-between sm:px-6 mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex items-start mt-5 mb-5">
          <Link href="/">
            <div className="bg-green-500 flex items-end">
              <h1 className="text-sm md:text-1xl font-bold m-2 mt-8 mr-6 text-white font-SourceCodePro">
                Boba
              </h1>
            </div>
          </Link>

          <nav className="text-sm hidden sm:flex flex-col ml-5">
            {links.map((link, idx) => (
              <div key={idx}>
                {pathname === link.href ? (
                  <Link
                    className="text-md font-semibold text-primary font-SourceCodePro"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-md font-semibold text-gray-600 transition duration-100 hover:text-primary font-SourceCodePro"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="flex">
          <Button variant={null} onClick={() => handleCartClick()} className="">
            <ShoppingBag />
          </Button>
        </div>
      </div>
    </div>
  );
}
