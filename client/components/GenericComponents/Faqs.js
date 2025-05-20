"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqsData = (airline, siteName) => [
  {
    question: `How do I book ${airline} flights through ${siteName}?`,
    answer: `Booking ${airline} flights with ${siteName} is easy! Just call our dedicated hotline or use our website to connect with live agents who help you get the best deals.`,
  },
  {
    question: `Can I find exclusive phone-only deals on ${airline} flights?`,
    answer: `Yes! ${siteName} offers exclusive unpublished rates on ${airline} flights when you book over the phone, ensuring you get the best prices.`,
  },
  {
    question: `What payment methods are accepted when booking ${airline} flights?`,
    answer: `We accept all major credit cards, debit cards, and sometimes alternative payment methods depending on your location for ${airline} flight bookings.`,
  },
  {
    question: `Can I make changes or cancellations to my ${airline} booking through ${siteName}?`,
    answer: `Absolutely! Our live agents at ${siteName} assist with flexible changes and cancellations based on ${airline}'s policies, often with no extra fees.`,
  },
  {
    question: `Are there any hidden fees when booking ${airline} flights with ${siteName}?`,
    answer: `No hidden fees! ${siteName} is transparent about all costs involved in your ${airline} flight booking, so you know exactly what you’re paying for.`,
  },
  {
    question: `How do I get support if I face issues with my ${airline} booking?`,
    answer: `You can contact ${siteName}'s 24/7 customer support hotline anytime for help with your ${airline} flight booking and travel plans.`,
  },
  {
    question: `Can I book multi-city or complex itineraries with ${airline} through ${siteName}?`,
    answer: `Yes! ${siteName} specializes in custom trip planning, including multi-city routes and special requests for your ${airline} flights.`,
  },
  {
    question: `Is it safe to book ${airline} flights via phone with ${siteName}?`,
    answer: `Definitely. ${siteName} uses secure systems and trusted agents to ensure your personal and payment information is protected when booking ${airline} flights.`,
  },
];

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-gray-200 py-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        {open ? (
          <ChevronUp className="w-6 h-6 text-blue-600" />
        ) : (
          <ChevronDown className="w-6 h-6 text-blue-600" />
        )}
      </div>
      {open && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQs = ({ airline = "Iberia", siteName = "Genztraveller" }) => {
  const faqs = faqsData(airline, siteName);

  return (
    <section className="max-w-7xl mx-auto p-6 bg-white rounded-lg ">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        FAQs – {airline} Flights Booking
      </h2>
      <div>
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
