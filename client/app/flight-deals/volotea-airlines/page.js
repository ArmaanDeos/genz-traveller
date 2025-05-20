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
  title: " Volotea Flight Booking | Cheap Volotea Tickets - GenzTraveller",
  description:
    "Book Volotea flights with GenzTraveller for unbeatable fares across Europe. Get cheap tickets, exclusive phone deals, and 24/7 booking assistance.",
};

const VoloteaAirlines = () => {
  return (
    <>
      <div className="">
        {/* Header */}
        <div className="hidden md:block">
          <Header />
        </div>

        {/* Mobile Promo */}
        <MobilePromo
          airlineName="Volotea Airlines"
          phoneNumber="+1-(844) 930-0173"
          fixedCtaBgColor="bg-rose-700"
          buttonBgColor="bg-rose-700"
          mainSectionBgColor="bg-gray-50"
        />

        {/* Banner */}
        <BannerSection
          heading="Book Affordable Volotea Flights"
          subheading="Get discounted fares on Volotea flights to top European destinations."
          additionalHeading="Volotea Reservation Support Available 24/7"
          bgImage="/images/generic-banner.jpg"
        />

        {/* Mobile Search Form */}
        <div className="block md:hidden">
          <Suspense fallback={<div>Loading...</div>}>
            <FlightSearch />
          </Suspense>
        </div>

        {/* Deal Sections */}
        <BestTodayDeals airline="Volotea Airlines" />
        <UrgencySection airline="Volotea Airlines" />
        <WhyCallInstead airline="Volotea Airlines" />
        <HowWeWork />
        <WhyChooseAirline airline="Volotea Airlines" />
        <CustomerReviews airline="Volotea Airlines" />
        <WhyBookWithGenzTraveller airline="Volotea Airlines" />
        <FAQs airline="Volotea Airlines" />
        <ClientBg />
        <Footer />
        <MobileBottomCTA />

        {/* Modal CTA */}
        <MobilePromoModal
          airlineName="Volotea Airlines"
          bgColor="bg-rose-700"
          phoneNumber="+1-(844) 930-0173"
        />
      </div>
    </>
  );
};

export default VoloteaAirlines;
