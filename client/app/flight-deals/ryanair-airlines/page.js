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

const RyanairAirlines = () => {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>
          Ryanair Flight Booking | Cheap Ryanair Tickets - GenzTraveller
        </title>
        <meta
          name="description"
          content="Book Ryanair flights at affordable prices through GenzTraveller. Unlock cheap airfares, exclusive deals, and 24/7 customer support for Ryanair reservations."
        />
        <meta
          name="keywords"
          content="Ryanair booking, cheap Ryanair tickets, Ryanair flights, airline reservation, low cost flights Europe, Ryanair contact, Ryanair customer support, flight deals, book Ryanair Airlines, cheap plane tickets"
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
          airlineName="Ryanair Airlines"
          phoneNumber="+1-(844) 930-0173"
          fixedCtaBgColor="bg-blue-800"
          buttonBgColor="bg-blue-800"
          mainSectionBgColor="bg-gray-50"
        />

        {/* Banner */}
        <BannerSection
          heading="Fly Cheap with Ryanair Airlines"
          subheading="Book low-cost Ryanair flights across Europe and beyond."
          additionalHeading="24/7 Ryanair Flight Booking Support"
          bgImage="/images/generic-banner.jpg"
        />

        {/* Mobile Search Form */}
        <div className="block md:hidden">
          <Suspense fallback={<div>Loading...</div>}>
            <FlightSearch />
          </Suspense>
        </div>

        {/* Deal Sections */}
        <BestTodayDeals airline="Ryanair Airlines" />
        <UrgencySection airline="Ryanair Airlines" />
        <WhyCallInstead airline="Ryanair Airlines" />
        <HowWeWork />
        <WhyChooseAirline airline="Ryanair Airlines" />
        <CustomerReviews airline="Ryanair Airlines" />
        <WhyBookWithGenzTraveller airline="Ryanair Airlines" />
        <FAQs airline="Ryanair Airlines" />
        <ClientBg />
        <Footer />
        <MobileBottomCTA />

        {/* Modal CTA */}
        <MobilePromoModal
          airlineName="Ryanair Airlines"
          bgColor="bg-blue-800"
          phoneNumber="+1-(844) 930-0173"
        />
      </div>
    </>
  );
};

export default RyanairAirlines;
