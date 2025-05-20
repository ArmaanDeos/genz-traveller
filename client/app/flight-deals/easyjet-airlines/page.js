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
    "EasyJet Airlines Flight Booking | Cheap EasyJet Tickets - GenzTraveller",
  description:
    "Book EasyJet Airlines tickets at the lowest fares. Find cheap domestic and international flights with exclusive phone deals and 24/7 booking support.",
};

const EasyJetAirlines = () => {
  return (
    <>
      <div className="">
        {/* Header */}
        <div className="hidden md:block">
          <Header />
        </div>

        {/* Mobile Promo */}
        <MobilePromo
          airlineName="EasyJet Airlines"
          phoneNumber="+1-(844) 930-0173"
          fixedCtaBgColor="bg-orange-600"
          buttonBgColor="bg-orange-600"
          mainSectionBgColor="bg-gray-50"
        />

        {/* Banner */}
        <BannerSection
          heading="Fly Affordably with EasyJet Airlines"
          subheading="Book top EasyJet flight deals across Europe and beyond with ease."
          additionalHeading="Exclusive EasyJet Reservation Help Line"
          bgImage="/images/generic-banner.jpg"
        />

        {/* Mobile Search Form */}
        <div className="block md:hidden">
          <Suspense fallback={<div>Loading...</div>}>
            <FlightSearch />
          </Suspense>
        </div>

        {/* Deal Sections */}
        <BestTodayDeals airline="EasyJet Airlines" />
        <UrgencySection airline="EasyJet Airlines" />
        <WhyCallInstead airline="EasyJet Airlines" />
        <HowWeWork />
        <WhyChooseAirline airline="EasyJet Airlines" />
        <CustomerReviews airline="EasyJet Airlines" />
        <WhyBookWithGenzTraveller airline="EasyJet Airlines" />
        <FAQs airline="EasyJet Airlines" />
        <ClientBg />
        <Footer />
        <MobileBottomCTA />

        {/* Modal CTA */}
        <MobilePromoModal
          airlineName="EasyJet Airlines"
          bgColor="bg-orange-600"
          phoneNumber="+1-(844) 930-0173"
        />
      </div>
    </>
  );
};

export default EasyJetAirlines;
