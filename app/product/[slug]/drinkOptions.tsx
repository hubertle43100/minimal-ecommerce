// DrinkOptions.tsx
"use client";

import AddToBag from "@/app/components/AddToBag";
import CheckoutNow from "@/app/components/CheckoutNow";
import React, { useState } from "react";

interface DrinkOptionsProps {
  data: {
    price: number;
    description: string;
    images: string[];
    name: string;
    price_id: string;
    _id: string;
    quantity: number;
  };
}

const DrinkOptions: React.FC<DrinkOptionsProps> = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotalPrice = () => {
    let toppingsPrice = selectedToppings.length * 0.8; // Example: $0.8 per topping
    return toppingsPrice;
  };

  return (
    <div className="mb-4">
      <div className="flex items-end gap-2">
        <div className="flex gap-2 font-semibold text-md p-2 bg-slate-100 rounded-md">
          <button onClick={decreaseQuantity}>-</button>
          <span className="p-1">{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <span className="text-xl font-bold text-gray-800 md:text-2xl pb-2">
          ${((data.price + calculateTotalPrice()) * quantity).toFixed(2)}
        </span>
      </div>

      <div className="flex gap-2.5 pt-3">
        <AddToBag
          currency="USD"
          description={data.description}
          image={data.images[0]}
          name={data.name}
          price={data.price + calculateTotalPrice()}
          key={data._id}
          price_id={data.price_id}
          quantity={quantity}
        />
      </div>
    </div>
  );
};

export default DrinkOptions;
