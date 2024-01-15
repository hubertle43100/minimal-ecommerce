import { Leaf, BadgeCheck, Smartphone } from "lucide-react";

const perks = [
  {
    name: "Fresh brewed",
    Icon: Leaf,
    description: "Taiwanese tea brewed right on order",
  },
  {
    name: "Best Boba locally",
    Icon: BadgeCheck,
    description: "Yelp certified and well liked by everyone far and near",
  },
  {
    name: "Order ahead of time",
    Icon: Smartphone,
    description: "Order online and guarentee make it under 15 minutes",
  },
];

export default async function Perks() {
  return (
    <section className="border-t border-white bg-gray-50 p-5">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 p-5">
        {perks.map((perk) => (
          <div
            key={perk.name}
            className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
          >
            <div className="md:flex-shrink-0 flex justify-center">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900">
                {<perk.Icon className="w-1/3 h-1/3" />}
              </div>
            </div>

            <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-base font-medium text-gray-900">
                {perk.name}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {perk.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
