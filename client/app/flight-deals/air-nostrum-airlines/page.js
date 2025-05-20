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

const AirNostrumAirlines = () => {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>
          Air Nostrum Flight Booking | Cheap Air Nostrum Tickets - GenzTraveller
        </title>
        <meta
          name="description"
          content="Book Air Nostrum airline tickets at unbeatable fares. Enjoy cheap flights, exclusive phone-only deals, and 24/7 airline reservation assistance with GenzTraveller."
        />
        <meta
          name="keywords"
          content="Airline Reservation, Flight Reservation, cheap flight tickets, airline phone number, flight booking, airlines tickets, airline tickets booking, cheap flights tickets, flight ticket, plane tickets Deals, flight ticket booking, cheap airline tickets, air ticket booking, booking com flights, cheap plane tickets, flight ticket booking online, airline Customer Care Number, international flights tickets"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="">
        {/* Header */}
        <div className="hidden md:block">
          <Header />
        </div>

        {/* Mobile Promo */}
        <MobilePromo
          airlineName="Air Nostrum"
          phoneNumber="+1-(844) 930-0173"
          fixedCtaBgColor="bg-red-700"
          buttonBgColor="bg-red-700"
          mainSectionBgColor="bg-gray-50"
        />

        {/* Banner */}
        <BannerSection
          heading="Fly Smart with Air Nostrum"
          subheading="Get unbeatable prices on domestic and international Air Nostrum flights."
          additionalHeading="Hassle-Free Airline Reservation"
          bgImage="/images/generic-banner.jpg"
        />

        {/* Mobile Search Form */}
        <div className="block md:hidden">
          <Suspense fallback={<div>Loading...</div>}>
            <FlightSearch />
          </Suspense>
        </div>

        {/* Deal Sections */}
        <BestTodayDeals airline="Air Nostrum" />
        <UrgencySection airline="Air Nostrum" />
        <WhyCallInstead airline="Air Nostrum" />
        <HowWeWork />
        <WhyChooseAirline airline="Air Nostrum" />
        <CustomerReviews airline="Air Nostrum" />
        <WhyBookWithGenzTraveller airline="Air Nostrum" />
        <FAQs airline="Air Nostrum" />
        <ClientBg />
        <Footer />
        <MobileBottomCTA />

        {/* Modal CTA */}
        <MobilePromoModal
          airlineName="Air Nostrum"
          bgColor="bg-red-700"
          phoneNumber="+1-(844) 930-0173"
        />
      </div>
    </>
  );
};

export default AirNostrumAirlines;
