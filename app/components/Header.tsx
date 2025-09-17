// app/components/Header.js

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const productCategories = [
    { name: "Granite Cutting Machines", href: "/products/granite-cutting" },
    { name: "Line Polishing Machines", href: "/products/line-polishing" },
    { name: "Handling Cranes", href: "/products/handling-cranes" },
    { name: "Epoxy Resin Line", href: "/products/epoxy-resin" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              {/* You can use an Image component here if you have a logo file */}
              {/* <Image src="/logo.png" alt="Radhika Machineries" width={50} height={50} /> */}
              <span className="text-2xl font-bold text-dark-gray">
                Radhika <span className="text-brand-yellow">Machineries</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-brand-yellow transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-brand-yellow transition-colors duration-300"
            >
              About Us
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center text-gray-600 hover:text-brand-yellow transition-colors duration-300">
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2">
                  {productCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-gray hover:text-brand-yellow"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-brand-yellow transition-colors duration-300"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-600 hover:bg-light-gray"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-gray-600 hover:bg-light-gray"
          >
            About Us
          </Link>
          <div className="px-4 py-2">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="flex justify-between w-full items-center text-gray-600 hover:bg-light-gray"
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                  isProductsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isProductsOpen && (
              <div className="mt-2 pl-4">
                {productCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="block py-2 text-sm text-gray-700 hover:text-brand-yellow"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-600 hover:bg-light-gray"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
