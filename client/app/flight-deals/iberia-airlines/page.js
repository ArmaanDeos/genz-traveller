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
  title:
    "Iberia Airlines Flight Booking | Cheap Iberia Tickets - GenzTraveller",
  description:
    "Book Iberia Airlines flights with GenzTraveller at affordable prices. Get the best deals, international flight offers, and 24/7 booking assistance.",
};

const IberiaAirlines = () => {
  return (
    <>
      <div className="">
        {/* Header */}
        <div className="hidden md:block">
          <Header />
        </div>

        {/* Mobile Promo */}
        <MobilePromo
          airlineName="Iberia Airlines"
          phoneNumber="+1-(844) 930-0173"
          fixedCtaBgColor="bg-red-800"
          buttonBgColor="bg-red-800"
          mainSectionBgColor="bg-gray-50"
        />

        {/* Banner */}
        <BannerSection
          heading="Book Iberia Airlines Flights Easily"
          subheading="Fly comfortably to Spain and worldwide with exclusive Iberia deals."
          additionalHeading="24/7 Iberia Airlines Reservation Help"
          bgImage="/images/generic-banner.jpg"
        />

        {/* Mobile Search Form */}
        <div className="block md:hidden">
          <Suspense fallback={<div>Loading...</div>}>
            <FlightSearch />
          </Suspense>
        </div>

        {/* Deal Sections */}
        <BestTodayDeals airline="Iberia Airlines" />
        <UrgencySection airline="Iberia Airlines" />
        <WhyCallInstead airline="Iberia Airlines" />
        <HowWeWork />
        <WhyChooseAirline airline="Iberia Airlines" />
        <CustomerReviews airline="Iberia Airlines" />
        <WhyBookWithGenzTraveller airline="Iberia Airlines" />
        <FAQs airline="Iberia Airlines" />
        <ClientBg />
        <Footer />
        <MobileBottomCTA />

        {/* Modal CTA */}
        <MobilePromoModal
          airlineName="Iberia Airlines"
          bgColor="bg-red-800"
          phoneNumber="+1-(844) 930-0173"
        />
      </div>
    </>
  );
};

export default IberiaAirlines;
