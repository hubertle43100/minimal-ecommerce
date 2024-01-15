"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";

export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
  price_id,
  quantity,
}: ProductCart) {
  const { checkoutSingleItem, setItemQuantity } = useShoppingCart();

  function buyNow(priceId: string, qty: number) {
    checkoutSingleItem(priceId);
    setItemQuantity(priceId, 2);
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
    quantity: quantity || 1,
  };
  return (
    <Button
      variant="outline"
      onClick={() => {
        buyNow(product.price_id, quantity);
      }}
    >
      Checkout Now
    </Button>
  );
}
