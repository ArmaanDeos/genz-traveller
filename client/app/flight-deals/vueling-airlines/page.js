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

const VuelingAirlines = () => {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>
          Vueling Airlines Flight Booking | Cheap Vueling Tickets -
          GenzTraveller
        </title>
        <meta
          name="description"
          content="Book Vueling Airlines flights at cheap rates with GenzTraveller. Enjoy exclusive deals, phone-only offers, and 24/7 booking assistance."
        />
        <meta
          name="keywords"
          content="Vueling booking, cheap Vueling flights, Vueling deals, airline reservation, Vueling phone number, Vueling ticket booking, flight reservation, low cost European flights, Vueling airline customer support"
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
          airlineName="Vueling Airlines"
          phoneNumber="+1-(844) 930-0173"
          fixedCtaBgColor="bg-yellow-600"
          buttonBgColor="bg-yellow-600"
          mainSectionBgColor="bg-gray-50"
        />

        {/* Banner */}
        <BannerSection
          heading="Fly with Vueling Airlines"
          subheading="Book cheap Vueling flights across Europe with exclusive phone deals."
          additionalHeading="Vueling Reservation Assistance 24/7"
          bgImage="/images/generic-banner.jpg"
        />

        {/* Mobile Search Form */}
        <div className="block md:hidden">
          <Suspense fallback={<div>Loading...</div>}>
            <FlightSearch />
          </Suspense>
        </div>

        {/* Deal Sections */}
        <BestTodayDeals airline="Vueling Airlines" />
        <UrgencySection airline="Vueling Airlines" />
        <WhyCallInstead airline="Vueling Airlines" />
        <HowWeWork />
        <WhyChooseAirline airline="Vueling Airlines" />
        <CustomerReviews airline="Vueling Airlines" />
        <WhyBookWithGenzTraveller airline="Vueling Airlines" />
        <FAQs airline="Vueling Airlines" />
        <ClientBg />
        <Footer />
        <MobileBottomCTA />

        {/* Modal CTA */}
        <MobilePromoModal
          airlineName="Vueling Airlines"
          bgColor="bg-yellow-600"
          phoneNumber="+1-(844) 930-0173"
        />
      </div>
    </>
  );
};

export default VuelingAirlines;
