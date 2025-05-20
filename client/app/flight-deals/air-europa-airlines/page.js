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
  title: "Air Europa Flight Booking | Cheap Air Europa Tickets - GenzTraveller",
  description:
    "Book Air Europa airline tickets with GenzTraveller. Enjoy cheap flight tickets, phone-only airfare deals, international flight booking, and 24/7 customer care.",
};

const AirEuropaAirlines = () => {
  return (
    <>
      <div className="">
        {/* Header */}
        <div className="hidden md:block">
          <Header />
        </div>

        {/* Mobile Promo with Props-based BG Colors */}
        <MobilePromo
          airlineName="Air Europa"
          phoneNumber="+1-(844) 930-0173"
          fixedCtaBgColor="bg-blue-800"
          buttonBgColor="bg-blue-800"
          mainSectionBgColor="bg-gray-50"
        />

        {/* Banner */}
        <BannerSection
          heading="Book Cheap Air Europa Flights Today"
          subheading="Save big on international flights with exclusive phone-only fares."
          additionalHeading="Airline Reservation Made Easy"
          bgImage="/images/generic-banner.jpg"
        />

        {/* Mobile Search Form */}
        <div className="block md:hidden">
          <Suspense fallback={<div>Loading...</div>}>
            <FlightSearch />
          </Suspense>
        </div>

        <BestTodayDeals airline="Air Europa" />
        <UrgencySection airline="Air Europa" />
        <WhyCallInstead airline="Air Europa" />
        <HowWeWork />
        <WhyChooseAirline airline="Air Europa" />
        <CustomerReviews airline="Air Europa" />
        <WhyBookWithGenzTraveller airline="Air Europa" />
        <FAQs airline="Air Europa" />
        <ClientBg />
        <Footer />
        <MobileBottomCTA />

        {/* Modal CTA with Airline-Specific Colors */}
        <MobilePromoModal
          airlineName="Air Europa"
          bgColor="bg-blue-800"
          phoneNumber="+1-(844) 930-0173"
        />
      </div>
    </>
  );
};

export default AirEuropaAirlines;
