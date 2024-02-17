"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
  quantity: number;
  addon: string[];
}

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
  quantity,
  addon,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
    quantity: quantity,
    addon: addon,
  };
  return (
    <Button
      onClick={() => {
        addItem(product, { count: quantity }), handleCartClick();
      }}
      className="rounded-none w-2/5"
    >
      Add To Cart
    </Button>
  );
}
