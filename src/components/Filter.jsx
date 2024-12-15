import React from "react";
import Section from "./Section";
import { Select, SelectItem } from "@nextui-org/react";

function Filter() {
  const brands = [
    { key: "all", label: "All" },
    { key: "audi", label: "Audi" },
    { key: "bentley", label: "Bentley" },
    { key: "bmw", label: "BMW" },
    { key: "cadillac", label: "Cadillac" },
    { key: "coevette", label: "Corvette" },
    { key: "dodge", label: "Dodge" },
    { key: "ferrari", label: "Ferrari" },
    { key: "lamborghini", label: "Lamborghini" },
    { key: "land_rover", label: "Land Rover" },
    { key: "mclaren", label: "McLaren" },
    { key: "mercedes_benz", label: "Mercedes Benz" },
    { key: "porsche", label: "Porsche" },
    { key: "rolls_royce", label: "Rolls Royce" },
  ];
  const types = [
    { key: "all", label: "All" },
    { key: "luxury_car", label: "Luxury Cars" },
    { key: "luxury_suvs", label: "Luxury SUVs" },
    { key: "muscle_cars", label: "Muscle Cars" },
    { key: "sports_cars", label: "Sports Cars" },
    { key: "super_cars", label: "Super Cars" },
    { key: "super_suvs", label: "Super SUVs" },
  ];
  const price = [
    { key: "all", label: "All" },
    { key: "lowest_price", label: "Lowest Price" },
    { key: "highest_price", label: "Highest Price" },
  ];
  return (
    <div className="2xl:max-w-[1440px] 2xl:px-0 mx-auto px-[25px] md:px-[60px] mt-[20px] md:mt-[100px] mb-[25px] md:mb-[45px]">
      <h1 className=" font-dmsans text-md md:text-xl mb-[10px] md:mb-[20px]">
        Filter By
      </h1>
      <form
        action=""
        className="w-full px-[10px] md:px-[20px] py-[10px] md:py-[20px] rounded-md border border-white"
      >
        <div className="grid grid-cols-2 md:flex w-full flex-wrap justify-between md:flex-nowrap gap-2 md:gap-4">
          <Select
            label="Brands"
            defaultSelectedKeys={["all"]}
            className="col-span-2 md:max-w-[32%] font-dmsans"
          >
            {brands.map((brand) => (
              <SelectItem key={brand.key}>{brand.label}</SelectItem>
            ))}
          </Select>
          <Select
            label="Types"
            defaultSelectedKeys={["all"]}
            className="md:max-w-[32%] font-dmsans"
          >
            {types.map((type) => (
              <SelectItem key={type.key}>{type.label}</SelectItem>
            ))}
          </Select>
          <Select
            label="Prices"
            defaultSelectedKeys={["all"]}
            className="md:max-w-[32%] font-dmsans"
          >
            {price.map((price) => (
              <SelectItem key={price.key}>{price.label}</SelectItem>
            ))}
          </Select>
        </div>
      </form>
    </div>
  );
}

export default Filter;
