import React from "react";
import car from "../assets/images/carly2.jpg";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Browse from "../components/Browse";
import HowItWorks from "../components/HowItWorks";
import Section from "../components/Section";
import WhyUs from "../components/WhyUs";
import LongTimeRental from "../components/PartyBusRentalBanner";
import SpecialEvent from "../components/WeddingRentalBanner";
import PersonalDriver from "../components/ChauffeurServiceRental";
import PhotoShoot from "../components/PromRentalBanner";
import OutOfTown from "../components/BabyShowerBanner";
import JetRental from "../components/JetRental";
import Call from "../components/Call";
import PartyBusRentalBanner from "../components/PartyBusRentalBanner";
import WeddingRentalBanner from "../components/WeddingRentalBanner";
import ChauffeurServiceRental from "../components/ChauffeurServiceRental";
import PromRentalBanner from "../components/PromRentalBanner";
import BabyShowerBanner from "../components/BabyShowerBanner";
// import { Cars } from "../../Data";
function Home() {
  return (
    <div>
      <Header />
      <Browse />
      <HowItWorks />
      <WhyUs />
      <PartyBusRentalBanner />
      <WeddingRentalBanner />
      <ChauffeurServiceRental />
      <PromRentalBanner />
      <BabyShowerBanner />
      <Call />
      <Section />
    </div>
  );
}

export default Home;
