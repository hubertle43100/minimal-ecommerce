//case sensitive
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
  >({
    "Temperature preference:": "Cold",
    "Sugar Level:": "70% sweet",
    "Ice Level:": "Regular Ice",
    "1 Free Toppings:": "Honey Boba",
  });

  const selectedOptionsArray = Object.values(selectedOptions);

  const options: Option[] = [
    {
      label: "Temperature preference:",
      options: ["Cold", "Hot"],
    },
    {
      label: "Sugar Level:",
      options: [
        "0% sweet",
        "25% sweet",
        "50% sweet",
        "70% sweet",
        "100% sweet",
      ],
    },
    {
      label: "Ice Level:",
      options: ["No Ice", "Less Ice", "Regular Ice", "More Ice"],
    },
    {
      label: "1 Free Toppings:",
      options: [
        "No Toppings",
        "Honey Boba",
        "Pudding",
        "Grass Jelly",
        "Aloe Vera",
      ],
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
    return 0;
  };

  const iconCircles =
    "border hover:bg-slate-300 rounded-full p-1 border-gray-300 ml-1";

  const [selectedIcon, setSelectedIcon] = useState("globe");

  const handleClick = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  return (
    <div className="mb-4">
      <div className="flex items-end gap-2 mb-4">
        <div className="flex gap-2 font-semibold text-md p-2 bg-slate-100 rounded-md">
          <button onClick={decreaseQuantity}>-</button>
          <span className="p-1">{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>

      {options.map(({ label, options }, index) => (
        <div className="border-b border-gray-400 mb-2" key={label}>
          <div className="flex justify-between w-full mt-1">
            <p>{label}</p>
            <select
              value={selectedOptions[label] || ""}
              onChange={(e) =>
                setSelectedOptions({
                  ...selectedOptions,
                  [label]: e.target.value,
                })
              }
              className="px-2 py-1 rounded-lg text-right border-none shadow-non outline-none"
            >
              {options.map((option, optionIndex) => (
                <option
                  key={optionIndex}
                  value={typeof option === "string" ? option : option.value}
                >
                  {typeof option === "string" ? option : option.icon}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}

      <div className="flex justify-between w-full mt-1 mb-2">
        <p>1 Free Sticker:</p>
        <div className="flex text-4xl">
          <FcStackOfPhotos
            className={`${iconCircles} ${
              selectedIcon === "stack" ? "bg-slate-300" : ""
            }`}
            onClick={() => handleClick("stack")}
          />
          <FcGlobe
            className={`${iconCircles} ${
              selectedIcon === "globe" ? "bg-slate-300" : ""
            }`}
            onClick={() => handleClick("globe")}
          />
          <FcMoneyTransfer
            className={`${iconCircles} ${
              selectedIcon === "transfer" ? "bg-slate-300" : ""
            }`}
            onClick={() => handleClick("transfer")}
          />
          <FcChargeBattery
            className={`${iconCircles} ${
              selectedIcon === "battery" ? "bg-slate-300" : ""
            }`}
            onClick={() => handleClick("battery")}
          />
        </div>
      </div>
      <div className="border-b border-gray-400 mb-10"></div>

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
            addon={["24 oz", ...selectedOptionsArray, "1 Free Sticker"]}
          />
        </div>
      </div>
    </div>
  );
};

export default DrinkOptions;
