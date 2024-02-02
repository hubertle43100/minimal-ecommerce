import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import ProductList from "./ProductList";
import category from "@/minimal-ecommerce/schemas/category";
import Hero from "../components/Hero";
import AboutUs from "./AboutUs";

async function getData(cateogry: string) {
  const query = `*[_type == "product" && category->name == "${cateogry}"] {
        _id,
          "imageUrl": images[0].asset->url,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: simplifiedProduct[] = await getData(params.category);
  const formattedCategory = params.category.replace(/_/g, " ");

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
        {params.category !== "home" ? (
          params.category === "location" ? (
            <div>location</div>
          ) : params.category === "about_us" ? (
            <AboutUs />
          ) : (
            <ProductList data={data} formattedCategory={formattedCategory} />
          )
        ) : (
          <div>Error: Page does not exist</div>
        )}
      </div>
    </div>
  );
}
