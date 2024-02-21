import AddToBag from "@/app/components/AddToBag";
import CheckoutNow from "@/app/components/CheckoutNow";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import DrinkOptions from "./DrinkOptions";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name,
          price_id
      }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

interface ExtendedFullProduct extends fullProduct {
  quantity: number;
}

export default async function ProductPge({
  params,
}: {
  params: { slug: string };
}) {
  const data: ExtendedFullProduct = await getData(params.slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <Link
          className="text-sm font-SourceCodePro"
          href={`/${data.categoryName}`}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaArrowLeft className="mr-2" />
            {data.categoryName.replace(/_/g, " ")}
          </div>
        </Link>
        <div className="grid gap-8 pt-5 md:grid-cols-2 mb-4">
          <ImageGallery images={data.images} />

          <div className="">
            <div className="mb-2 md:mb-3">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl">
                {data.name}
              </h2>
              <span className="mb-0.5 inline-block text-gray-500 text-2xl lg:text-3xl">
                {data.categoryName.replace(/_/g, " ")}
              </span>
            </div>

            {/* Deployment error */}
            <DrinkOptions data={data} />

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
