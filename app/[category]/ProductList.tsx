// ProductList.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { simplifiedProduct } from "../interface";

interface ProductListProps {
  data: simplifiedProduct[];
  formattedCategory: string;
}

const ProductList: React.FC<ProductListProps> = ({
  data,
  formattedCategory,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Products for {formattedCategory}
        </h2>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((product) => (
          <div key={product._id} className="group relative">
            <Link href={`/product/${product.slug}`}>
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt="Product image"
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  width={300}
                  height={300}
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
