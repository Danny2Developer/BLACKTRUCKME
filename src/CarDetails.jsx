import Section from "./components/Section";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import SwiperThumbGallery from "./components/SwiperThumbGallery";
import PriceSection from "./components/PriceSection";
import MoreCars from "./components/MoreCars";
import Dream from "./components/Dream";

function CarDetails() {
  return (
    <>
      <Section className={"md:!pt-[135px] md:!mt-0 mt-0"}>
        <div className="car-details pt-[80px] md:pt-0">
          {/* <Breadcrumbs className=" font-monts mb-[90px]">
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/car-fleet">Cars</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>BMW 740i (Chalk)</BreadcrumbItem>
          </Breadcrumbs> */}

          <h1 className="name font-dmsans font-medium md:font-semibold text-[18px] md:text-[30px] mb-[15px] md:mb-[30px]">
            BMW 740i (Chalk)
          </h1>
          <div className=" flex lg:flex-row flex-col gap-[25px] items-start ">
            <SwiperThumbGallery />
            <PriceSection />
          </div>
          <MoreCars />
        </div>
      </Section>
      <Dream />
    </>
  );
}

export default CarDetails;
