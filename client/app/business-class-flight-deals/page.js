"use client";
import AboutSection from "@/components/AboutUs";
import AdBanner from "@/components/AdBanner";
import BannerSection from "@/components/Banner";
import ClientBg from "@/components/ClientBg";
import ContactUs from "@/components/ContactUs";
import CustomerReviews from "@/components/CustomerReviews";
import FlightInfoSection from "@/components/FlightInfoSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowWeWork from "@/components/HowWeWork";
import MobilePromo from "@/components/MobilePromoBanner";
import Newsletter from "@/components/NewsLetter";
import ReservationAirTicket from "@/components/ReservationAirTicket";
import WhyChooseUs from "@/components/WhyChooseUs";
import TravelAssistanceSection from "@/components/WorkSteps";
import { Bus } from "lucide-react";

const BusinessClassFlightDeals = () => {
  const jsxContent = [
    {
      heading: "Premium Business Class Booking Options",
      points: [
        "Exclusive Upgrades: Secure your upgrade to Business Class and experience top-tier comfort and service on your next Swiss Airlines flight.",
        "Flexible Rescheduling: No stress when plans change. Easily modify your booking with flexible rescheduling options.",
        "Hassle-Free Cancellations: Enjoy peace of mind with clear and straightforward cancellation policies for Business Class travelers.",
        "Priority Boarding: Skip the lines and board first. Benefit from priority boarding with Business Class tickets on Swiss Airlines.",
      ],
    },
    {
      heading: "Unbeatable Business Class Airfares on Swiss Airlines",
      points: [
        "Premium Deals: Enjoy discounts on Business Class fares that are not available through traditional booking channels.",
        "Limited-Time Promotions: Take advantage of our exclusive last-minute offers on Business Class flights to your favorite destinations.",
      ],
    },
    {
      heading: "Business Class Experience with Swiss Airlines",
      points: [
        "Personalized Service: Indulge in a premium travel experience with personal assistance and curated services from Swiss Airlines staff.",
        "Luxury Amenities: From spacious seating to gourmet dining, Business Class provides a level of comfort that transforms your travel.",
      ],
    },
    {
      heading: "Convenient Business Class Flight Booking Process",
      points: [
        "Seamless Booking: Reserve your Business Class ticket in just a few clicks with Airbookings, ensuring a smooth experience from start to finish.",
        "Baggage Allowance: Get generous baggage allowances when you book Business Class with Swiss Airlines, including extra baggage for your convenience.",
      ],
    },
    {
      heading: "Why Choose Airbookings for Your Business Class Booking?",
      points: [
        "Lowest Price Guarantee: We ensure the best prices on Business Class bookings, so you can travel in style without breaking the bank.",
        "24/7 Customer Support: Our team is always available to help with any changes, cancellations, or upgrades, ensuring you have a stress-free experience.",
      ],
    },
  ];

  const jsxFaqs = [
    {
      question:
        "How can I get the best price on Business Class flights with Swiss Airlines?",
      answer:
        "Visit Airbookings to discover exclusive Business Class deals and enjoy discounts that are not available through other platforms. Keep an eye on our site for new promotions and offers.",
    },
    {
      question: "Can I upgrade to Business Class after booking a flight?",
      answer:
        "Yes! You can upgrade to Business Class when booking through Airbookings or by contacting our customer support team to assist you with the upgrade process.",
    },
    {
      question:
        "What additional benefits do I get when flying Business Class with Swiss Airlines?",
      answer:
        "Flying Business Class with Swiss Airlines provides numerous benefits, including priority check-in, larger seats, more legroom, exceptional dining, and access to exclusive lounges.",
    },
    {
      question: "How do I make changes to my Business Class reservation?",
      answer:
        "Changes to your Business Class reservation can be made easily through Airbookings. Contact our customer service team for immediate assistance with modifying your booking.",
    },
    {
      question: "What is the cancellation policy for Business Class flights?",
      answer:
        "Swiss Airlines offers flexible cancellation policies for Business Class travelers. Review the cancellation options directly on Airbookings for more details on your ticket type.",
    },
  ];

  return (
    <div>
      <Header />
      <MobilePromo />
      <BannerSection
        heading="Your Travel Assistance Starts Here"
        additionalHeading="Business Class Flight Reservations"
        subheading="Exclusive discounts available now!"
      />
      <AboutSection />
      <ReservationAirTicket
        title="Business Class Flight Deals With Airbookings"
        content="Looking for Business Class Flight Deals With Airbookings? Look no further! Whether you're booking domestic or international flights, we offer unpublished airfare deals that guarantee the best price. Our affordable price over the phone ensures you secure discounted flight deals with quick refunds, easy changes, and instant cancellations. Call now to access exclusive offers, enjoy secure payment reservations, and benefit from hassle-free assistance. Need to make changes, cancel, or upgrade your flight? Our service provides unlimited new bookings and the flexibility to compare and book your flights with confidence. Don’t miss out on the 59% Discount—book now for guaranteed savings and the most competitive prices!"
      />
      <FlightInfoSection
        title="Unbeatable Business Class Deals at Airbookings"
        airlineName="Swiss Airlines"
        contentSections={jsxContent}
        faqs={jsxFaqs}
      />
      <HowWeWork />
      <WhyChooseUs />
      <ClientBg />
      <TravelAssistanceSection />
      <AdBanner />
      <CustomerReviews />
      <ContactUs />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default BusinessClassFlightDeals;
