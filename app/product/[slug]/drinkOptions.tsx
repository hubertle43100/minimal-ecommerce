"use client";

import AddToBag from "@/app/components/AddToBag";
import React, { useState } from "react";
import {
  FcStackOfPhotos,
  FcGlobe,
  FcMoneyTransfer,
  FcChargeBattery,
} from "react-icons/fc";

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

interface Option {
  label: string;
  options: (string | { value: string; icon: JSX.Element })[];
}

const DrinkOptions: React.FC<DrinkOptionsProps> = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});

  const options: Option[] = [
    {
      label: "Temperature preference:",
      options: ["Cold", "Hot"],
    },
    { label: "Sugar Level:", options: ["25%", "50%", "75%", "100%"] },
    { label: "Ice Level:", options: ["None", "Less", "Regular", "More"] },
    {
      label: "1 Free Toppings:",
      options: ["None", "Pearls", "Pudding", "Jelly"],
    },
  ];

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotalPrice = () => {
    // Example calculation, adjust as needed
    return 0; // Placeholder calculation, you should implement the actual logic
  };

  const iconCircles =
    "border hover:bg-slate-300 rounded-full p-1 border-gray-300 ml-1";

  return (
    <div className="mb-4">
      <div className="flex items-end gap-2 mb-4">
        <div className="flex gap-2 font-semibold text-md p-2 bg-slate-100 rounded-md">
          <button onClick={decreaseQuantity}>-</button>
          <span className="p-1">{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>

      {options.map(({ label, options }) => (
        <div key={label} className="flex justify-between w-full mt-1">
          <p>{label}</p>
          <select
            value={selectedOptions[label] || ""}
            onChange={(e) =>
              setSelectedOptions({
                ...selectedOptions,
                [label]: e.target.value,
              })
            }
            className="w-1/6 px-2 py-1 rounded-lg text-right "
          >
            {options.map((option, index) => (
              <option
                key={index}
                value={typeof option === "string" ? option : option.value}
              >
                {typeof option === "string" ? option : option.icon}
              </option>
            ))}
          </select>
        </div>
      ))}
      <div className="flex justify-between w-full mt-1 mb-10">
        <p>Free Sticker</p>
        <div className="flex text-4xl">
          <FcStackOfPhotos className={iconCircles} />
          <FcGlobe className={iconCircles} />
          <FcMoneyTransfer className={iconCircles} />
          <FcChargeBattery className={iconCircles} />
        </div>
      </div>

      <div className="flex gap-2.5 pt-3">
        <div className="flex justify-between w-full">
          <span className=" flex text-xl font-bold text-gray-800 md:text-2xl mt-1">
            ${((data.price + calculateTotalPrice()) * quantity).toFixed(2)}
            <p className="text-sm ml-1 text-slate-500 flex items-center">
              / 24 oz
            </p>
          </span>
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
    </div>
  );
};

export default DrinkOptions;
