import Head from "next/head";
import BannerSection from "@/components/Banner";
import ClientBg from "@/components/ClientBg";
import CustomerReviews from "@/components/CustomerReviews";
import FlightSearch from "@/components/FlightSearchForm";
import Footer from "@/components/Footer";
import BestTodayDeals from "@/components/GenericComponents/BestTodayDeals";
import MobileBottomCTA from "@/components/GenericComponents/BottomFixedCta";
import FAQs from "@/components/GenericComponents/Faqs";
import MobilePromo from "@/components/GenericComponents/MobilePromo";
import MobilePromoModal from "@/components/GenericComponents/MobilePromoModal";
import UrgencySection from "@/components/GenericComponents/UrgencySection";
import WhyBookWithGenzTraveller from "@/components/GenericComponents/WhyBookingWIthSkyJoy";
import WhyCallInstead from "@/components/GenericComponents/WhyCallInstead";
import WhyChooseAirline from "@/components/GenericComponents/WhyChooseAirlines";
import Header from "@/components/Header";
import HowWeWork from "@/components/HowWeWork";
import { Suspense } from "react";

export const metadata = {
  title: "Copa Airlines Flight Booking | Cheap Copa Tickets - GenzTraveller",
  description:
    "Book Air Nostrum airline tickets at unbeatable fares. Enjoy cheap flights, exclusive phone-only deals, and 24/7 airline reservation assistance with GenzTraveller.",
};

const CopaAirlines = () => {
  return (
    <>
      <div className="">
        {/* Header */}
        <div className="hidden md:block">
          <Header />
        </div>

        {/* Mobile Promo */}
        <MobilePromo
          airlineName="Copa Airlines"
          phoneNumber="+1-(844) 930-0173"
          fixedCtaBgColor="bg-cyan-900"
          buttonBgColor="bg-cyan-900"
          mainSectionBgColor="bg-gray-50"
        />

        {/* Banner */}
        <BannerSection
          heading="Book Copa Airlines Flights Today"
          subheading="Enjoy exclusive phone-only deals on Copa Airlines international routes."
          additionalHeading="Copa Airline Reservation Assistance 24/7"
          bgImage="/images/generic-banner.jpg"
        />

        {/* Mobile Search Form */}
        <div className="block md:hidden">
          <Suspense fallback={<div>Loading...</div>}>
            <FlightSearch />
          </Suspense>
        </div>

        {/* Deal Sections */}
        <BestTodayDeals airline="Copa Airlines" />
        <UrgencySection airline="Copa Airlines" />
        <WhyCallInstead airline="Copa Airlines" />
        <HowWeWork />
        <WhyChooseAirline airline="Copa Airlines" />
        <CustomerReviews airline="Copa Airlines" />
        <WhyBookWithGenzTraveller airline="Copa Airlines" />
        <FAQs airline="Copa Airlines" />
        <ClientBg />
        <Footer />
        <MobileBottomCTA />

        {/* Modal CTA */}
        <MobilePromoModal
          airlineName="Copa Airlines"
          bgColor="bg-cyan-900"
          phoneNumber="+1-(844) 930-0173"
        />
      </div>
    </>
  );
};

export default CopaAirlines;
