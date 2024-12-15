import Root from "./src/Pages/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "./src/Pages/Home";
import Contact from "./src/Pages/Contact";
import CarFleet from "./src/Pages/CarFleet";
import CarDetails from "./src/CarDetails";
import Reservation from "./src/Pages/Reservation";
import HowItWorks from "./src/Pages/HowItWorks";
import Faq from "./src/Pages/Faq";
import OurDifference from "./src/Pages/OurDifference";
import PartyBus from "./src/Pages/PartyBus";
import Thanks from "./src/Pages/Thanks";
import SpecialEventReservation from "./src/Pages/WeddingReservation";
import PartyBusRental from "./src/Pages/PartyBusRental";
import AboutUs from "./src/Pages/AboutUs";
import Dashboard from "./src/Admin/Dashboard";
import AdminHome from "./src/Admin/AdminHome";
import Users from "./src/Admin/Users";
import Cars from "./src/Admin/Cars";
import Bookings from "./src/Admin/Bookings";
import BookingHistory from "./src/Admin/BookingHistory";
import Brands from "./src/Admin/Brands";
import AddCar from "./src/Admin/AddCar";
import EditCar from "./src/Admin/EditCar";
import ViewCar from "./src/Admin/ViewCar";
import UsersDetails from "./src/Admin/UsersDetails";
import AddBrand from "./src/Admin/AddBrand";
import EditBrand from "./src/Admin/EditBrand";
import SingleBooking from "./src/Admin/SingleBooking";
import SingleBookingHistory from "./src/Admin/SingleBookingHistory";
import AdminRegister from "./src/Admin/AdminRegister";
import AdminLogin from "./src/Admin/AdminLogin";
import AdminForgottenPassword from "./src/Admin/AdminForgottenPassword";
import Settings from "./src/Admin/Settings";
import Payment from "./src/Admin/Payment";
import CarBookingDetails from "./src/Admin/CarBookingDetails";
import BabyShower from "./src/Pages/BabyShower";
import ChauffeurService from "./src/Pages/ChauffeurService";
import WeddingRental from "./src/Pages/WeddingRental";
import PromCarRental from "./src/Pages/PromCarRental";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "/car-fleet",
        element: <CarFleet />,
      },
      {
        path: "/car-fleet/car-details",
        element: <CarDetails />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/sepcial-event-reservsation",
        element: <SpecialEventReservation />,
      },
      {
        path: "/party-bus-rental",
        element: <PartyBusRental />,
      },
      {
        path: "/our-difference",
        element: <OurDifference />,
      },
      {
        path: "/services/wedding-car-rental",
        element: <WeddingRental />,
      },
      {
        path: "/services/chauffeur-service",
        element: <ChauffeurService />,
      },
      {
        path: "/services/party-bus-rental",
        element: <PartyBus />,
      },
      {
        path: "/services/prom-car-rental",
        element: <PromCarRental />,
      },
      {
        path: "/services/baby-shower",
        element: <BabyShower />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/thanks",
        element: <Thanks />,
      },
      {
        path: "/how-it-works",
        element: <HowItWorks />,
      },
    ],
  },
  {
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/admin-home",
        element: <AdminHome />,
        index: true,
      },
      {
        path: "/dashboard/users",
        element: <Users />,
      },

      {
        path: "/dashboard/users/user-details",
        element: <UsersDetails />,
      },
      {
        path: "/dashboard/cars",
        element: <Cars />,
      },
      {
        path: "/dashboard/cars/add-cars",
        element: <AddCar />,
      },
      {
        path: "/dashboard/cars/edit-car",
        element: <EditCar />,
      },
      {
        path: "/dashboard/cars/view-car",
        element: <ViewCar />,
      },
      {
        path: "/dashboard/bookings",
        element: <Bookings />,
      },
      {
        path: "/dashboard/bookings/details",
        element: <SingleBooking />,
      },
      {
        path: "/dashboard/bookings/car-booking",
        element: <CarBookingDetails />,
      },
      {
        path: "/dashboard/booking-history",
        element: <BookingHistory />,
      },
      {
        path: "/dashboard/booking-history/history",
        element: <SingleBookingHistory />,
      },
      {
        path: "/dashboard/brands",
        element: <Brands />,
      },
      {
        path: "/dashboard/brands/add-brands",
        element: <AddBrand />,
      },
      {
        path: "/dashboard/brands/edit-brands",
        element: <EditBrand />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/admin-register",
    element: <AdminRegister />,
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
  {
    path: "/admin-forgotten-password",
    element: <AdminForgottenPassword />,
  },
]);

export default router;
