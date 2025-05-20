import AboutUs from "@/components/AboutUs";
import AdBanner from "@/components/AdBanner";
import BannerSection from "@/components/Banner";
import DealsSection from "@/components/BestDealsSection";
import ClientBg from "@/components/ClientBg";
import ContactUs from "@/components/ContactUs";
import CountdownSection from "@/components/CountDownSection";
import CustomerReviews from "@/components/CustomerReviews";
import FlightSearch from "@/components/FlightSearchForm";
import FlightDealsSection from "@/components/FllightDeals";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowWeWork from "@/components/HowWeWork";
import MobilePromo from "@/components/MobilePromoBanner";
import Newsletter from "@/components/NewsLetter";

import WhyChooseUs from "@/components/WhyChooseUs";
import Head from "next/head";
import { Suspense } from "react";

const metadata = {
  title: "GenZTraveller - Cheap Flight Booking | Airline Reservation",
  description:
    "Book cheap airline tickets online with GenZTraveller. 24/7 customer support at (844) 930-0173. Enjoy great deals on domestic and international flights.",
  keywords:
    "Airline Reservation, Flight Reservation, cheap flight tickets, airline phone number, flight booking, airlines tickets, airline tickets booking, cheap flights tickets, flight ticket, plane tickets Deals, flight ticket booking, cheap airline tickets, air ticket booking, booking com flights, cheap plane tickets, flight ticket booking online, airline Customer Care Number, international flights tickets",
  siteUrl: "https://genztraveller.com",
  phoneNumber: "(844) 930-0173",
};

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={metadata.siteUrl} />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
      </Head>

      <Header />
      <MobilePromo />
      <BannerSection
        heading="GenzTraveller: Fly Beyond Limits"
        subheading="Unlock exclusive fares from 100+ airlines. Travel smart. Travel bold. Travel your way."
      />
      <div className="block md:hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <FlightSearch />
        </Suspense>
      </div>
      <CountdownSection />

      <AboutUs />
      <DealsSection />
      <FlightDealsSection />
      <HowWeWork />
      <WhyChooseUs />
      <CustomerReviews />
      <ContactUs />
      <Newsletter />
      <ClientBg />
      <Footer />
    </div>
  );
};

export default HomePage;
