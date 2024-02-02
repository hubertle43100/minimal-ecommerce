import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import "../globals.css";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}
export const revalidate = 10;

export default async function Hero() {
  const data = await getData();

  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className=" flex w-full flex-col justify-center lg:mb-0 lg:w-1/2 ">
          <h1 className="mb-4 text-2xl text-black sm:text-3xl md:mb-8 md:text-4xl font-bold">
            Explore uniquely sophisticated tea journey
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg font-SourceCodePro mb-8">
            Individually brewed for perfection, ensuring freshness in every cup
          </p>
          <div className="flex mb-10">
            <Link href="/Milk_Tea">
              <button className="bg-green-500 flex items-end mr-1">
                <h1 className="text-sm md:text-1xl font-bold m-2 mt-10 mr-4 text-white">
                  Milk tea
                </h1>
              </button>
            </Link>

            <Link href="/Fruit_Tea">
              <button className="bg-green-500 flex items-end mr-1">
                <h1 className="text-sm md:text-1xl font-bold m-2 mt-10 mr-4 text-white ">
                  Fruit Tea
                </h1>
              </button>
            </Link>
          </div>
          <div className="flex mt-10 flex-grow">
            <Image
              src={urlFor(data.image1).url()}
              alt="Great Photo"
              className="object-cover object-center pr-2"
              priority
              width={265}
              height={250}
            />
            <Image
              src={urlFor(data.image2).url()}
              alt="Great Photo"
              className="object-cover object-center pr-1"
              priority
              width={265}
              height={250}
            />
          </div>
        </div>
        <div className="relative">
          <Image
            src={urlFor(data.image3).url()}
            alt="Great Photo"
            className="object-cover object-center pt-4 pr-1"
            priority
            width={600}
            height={600}
          />
          <div className="absolute bottom-5 left-10 right-10 bg-black text-white p-4 ">
            <p className="text-2xlo pb-3 md:text-4xl">Trending Drinks</p>
            <p className="text-sm font-SourceCodePro font-semibold md:text-md">
              Discovering the highest-quality ingredients is our goal, and our
              journey takes us to the scenic island of Taiwan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
