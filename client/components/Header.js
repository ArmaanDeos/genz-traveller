"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Home, Info, Phone, Plane } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4 mr-1" /> },
    {
      href: "/about-us",
      label: "About",
      icon: <Info className="w-4 h-4 mr-1" />,
    },
    {
      href: "/contact-us",
      label: "Contact",
      icon: <Phone className="w-4 h-4 mr-1" />,
    },
  ];

  const dropdownLinks = [
    {
      href: "/flights-reservation",
      label: "Flight Reservations",
    },
    { href: "/flight-deals/iberia-airlines", label: "Iberia Airlines" },
    { href: "/flight-deals/vueling-airlines", label: "Vueling Airlines" },
    { href: "/flight-deals/air-europa-airlines", label: "Air Europa Airlines" },
    { href: "/flight-deals/volotea-airlines", label: "Volotea Airlines" },
    { href: "/flight-deals/ryanair-airlines", label: "Ryanair Airlines" },
    {
      href: "/flight-deals/air-nostrum-airlines",
      label: "Air Nostrum Airlines",
    },
    { href: "/flight-deals/easyjet-airlines", label: "EasyJet Airlines" },
    { href: "/flight-deals/copa-airlines", label: "Copa Airlines" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Airbookings logo"
              width={100}
              height={100}
              className="object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 font-lato text-gray-700 items-center relative">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center hover:text-primary-red transition duration-200 font-semibold text-lg ${
                  isActive(item.href) ? "text-primary-red" : ""
                }`}
              >
                <span className="hidden md:inline">{item.icon}</span>
                {item.label}
              </Link>
            ))}

            {/* Flight Deals Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center font-semibold text-lg cursor-pointer transition duration-200 hover:text-primary-red ${
                  dropdownOpen ||
                  dropdownLinks.some((link) => isActive(link.href))
                    ? "text-primary-red"
                    : "text-gray-700"
                }`}
              >
                <Plane className="w-4 h-4 mr-1" />
                Flight Deals <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full mt-2 w-60 bg-white rounded-md shadow-lg z-50 animate-fade-in border border-gray-200">
                  {dropdownLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center gap-1 px-4 py-2 text-md  transition duration-200 hover:bg-blue-50 hover:text-primary-red ${
                        isActive(link.href)
                          ? "bg-blue-50 text-primary-red font-semibold"
                          : "text-gray-700"
                      }`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {link.icon && (
                        <span className="hidden md:inline">{link.icon}</span>
                      )}
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+18449300173"
              className="flex items-center gap-4 bg-gradient-to-r from-primary-blue to-primary-red hover:from-primary-blue hover:to-primary-red text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Image
                src="/images/call-agent-icon.png"
                alt="Call Agent Icon"
                width={40}
                height={24}
                className="object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-md font-lato">Call Us For Booking</span>
                <span className="font-bold text-lg tracking-wide">
                  +1 (844) 930-0173
                </span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col space-y-3 font-lato">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-2 border-b border-gray-100 hover:bg-blue-50 px-2 rounded transition duration-200 ${
                    isActive(item.href)
                      ? "text-primary-red font-semibold"
                      : "text-gray-700"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Flight Deals Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center py-2 px-2 border-b border-gray-100 hover:bg-blue-50 rounded transition duration-200 w-full justify-between font-semibold"
                >
                  <span
                    className={`${
                      dropdownOpen ||
                      dropdownLinks.some((link) => isActive(link.href))
                        ? "text-primary-red"
                        : "text-gray-700"
                    }`}
                  >
                    Flight Deals
                  </span>
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>

                {dropdownOpen && (
                  <div className="mt-2 max-h-64 overflow-y-auto bg-white rounded-md shadow-lg z-10 animate-fade-in scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100">
                    {dropdownLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-2 text-sm hover:bg-blue-50 hover:text-primary-red transition duration-200 ${
                          isActive(link.href)
                            ? "bg-blue-50 text-primary-red font-semibold"
                            : "text-gray-700"
                        }`}
                        onClick={() => {
                          setDropdownOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Call Button */}
              <a
                href="tel:+18449300173"
                className="flex items-center gap-3 bg-gradient-to-r from-primary-blue to-primary-red hover:from-primary-blue hover:to-primary-red text-white font-semibold px-4 py-3 rounded-full shadow-lg justify-center mt-4"
                onClick={() => setMenuOpen(false)}
              >
                <Image
                  src="/images/call-agent-icon.png"
                  alt="Call Agent Icon"
                  width={32}
                  height={20}
                  className="object-contain"
                />
                <span className="font-lato text-lg tracking-wide">
                  Call Us For Booking: +1 (844) 930-0173
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
