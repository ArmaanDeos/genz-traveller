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

const CheapFlightsTickets = () => {
  const jsxContent = [
    {
      heading: "Affordable Flight Booking Options",
      points: [
        "Exclusive Discounts: Book cheap flights with Airbookings and enjoy access to unpublished low fares for your next trip.",
        "Flexible Rescheduling: Plans changed? We offer flexible rescheduling options for your cheap flight bookings to ensure no stress.",
        "Easy Cancellations: Enjoy a hassle-free cancellation process for budget-friendly fares with quick refunds.",
        "Last-Minute Deals: Looking to fly soon? Grab great last-minute flight deals and save big on your next trip.",
      ],
    },
    {
      heading: "Unbeatable Airfares on Budget Airlines",
      points: [
        "Low-Cost Airfares: Find the lowest fares on both domestic and international flights with our budget airline partners.",
        "Seasonal Offers: Take advantage of our seasonal deals, offering incredible savings on flights to top destinations.",
      ],
    },
    {
      heading: "Cheap Flights Booking Made Simple",
      points: [
        "Simple Booking Process: Find and book your cheap flights in just a few easy steps with Airbookings.",
        "No Hidden Fees: Transparent pricing means you know exactly what you’re paying for with no surprise fees at checkout.",
      ],
    },
    {
      heading: "Why Choose Airbookings for Your Cheap Flight Booking?",
      points: [
        "Lowest Price Guarantee: We guarantee you’ll find the best prices for cheap flight tickets, ensuring great savings on airfare.",
        "24/7 Customer Support: Need help booking, changing, or cancelling your flight? Our support team is always here for you.",
      ],
    },
    {
      heading: "Maximize Your Savings on Air Travel",
      points: [
        "Flight Comparisons: Easily compare different flight options to find the cheapest fares that meet your travel needs.",
        "Easy Upgrades: Even on budget flights, we offer affordable upgrades to enhance your travel experience if desired.",
      ],
    },
  ];

  const jsxFaqs = [
    {
      question: "How can I find the cheapest flights with Airbookings?",
      answer:
        "Search for flights on Airbookings to unlock exclusive access to cheap tickets. Be sure to check our website for seasonal promotions and last-minute deals.",
    },
    {
      question: "Can I get a refund for cheap flights tickets?",
      answer:
        "Yes! Our cancellation policies for cheap flights tickets allow for full or partial refunds, depending on the ticket type. Review the details on Airbookings before booking.",
    },
    {
      question: "How can I upgrade to a higher class on a cheap flight?",
      answer:
        "You can upgrade to a higher class by booking through Airbookings or by contacting our customer support team for assistance with upgrades on your flight.",
    },
    {
      question: "What are the cancellation policies for cheap flights tickets?",
      answer:
        "Cancellation policies vary depending on the airline and ticket type. You can review your specific cancellation policy at the time of booking, and our customer service team is always here to assist you.",
    },
    {
      question: "How do I book last-minute cheap flights?",
      answer:
        "Simply visit Airbookings and search for available flights. You can filter results to find last-minute cheap flights with incredible discounts to your favorite destinations.",
    },
  ];

  return (
    <div>
      <Header />
      <MobilePromo />
      <BannerSection
        heading="Your Travel Assistance Starts Here"
        additionalHeading="Cheap Flights Tickets Reservations"
        subheading="Exclusive discounts available now!"
      />
      <AboutSection />
      <ReservationAirTicket
        title="Cheap Flights Tickets Deals With Airbookings"
        content="Looking for cheap flights tickets deals with Airbookings? You’ve come to the right place! Our exclusive affordable price over the phone ensures that you’re booking at the best rates possible. Call Now for unpublished airfare deals, easy changes, and instant cancellations with quick refunds. We offer hassle-free assistance and secure payment reservations to give you peace of mind with every booking. Compare and book your flights with confidence while taking advantage of discounted flight deals. Whether you want to cancel or upgrade your flight, enjoy unlimited new bookings, changes, or simply need assistance, our team is here for you. We guarantee the best price and the most competitive price, including unpublished airfare deals with 59% discount. Don't miss out—book now for a seamless, secure experience!"
      />
      <FlightInfoSection
        title="Unlock Exceptional Savings on Air Travel with Airbookings"
        airlineName="Cheap Flights Tickets"
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

export default CheapFlightsTickets;
