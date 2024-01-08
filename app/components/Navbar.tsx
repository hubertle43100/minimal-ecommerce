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
    <div className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl p-1">
        <Link href="/">
          <div className="bg-green-500 flex items-end">
            <h1 className="text-sm md:text-1xl font-bold m-2 mt-10 mr-12 text-white font-SourceCodePro">
              Boba
            </h1>
          </div>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            // Checks if /Men == /Men (bold it)
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary font-SourceCodePro"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary font-SourceCodePro"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex hover:bg-slate-600">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart {/* ADD NUMBER */}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
