// app/components/Header.tsx

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
    <header className="bg-gradient-to-r from-brand-green-dark to-brand-green-deeper text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">
                Radhika{" "}
                <span className="text-brand-green-light">Machineries</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-200 hover:text-white transition-colors duration-300"
            >
              About Us
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              {/* ✨ Link added for navigation on click */}
              <Link href="/products">
                <button className="flex items-center text-gray-200 hover:text-white transition-colors duration-300 cursor-pointer">
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </Link>
              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 text-dark-gray">
                  {productCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block px-4 py-2 text-sm hover:bg-light-gray hover:text-brand-green-dark"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="text-gray-200 hover:text-white transition-colors duration-300"
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
        <div className="md:hidden bg-white py-4 text-dark-gray">
          <Link
            href="/"
            className="block px-4 py-2 hover:bg-light-gray hover:text-brand-green-dark"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 hover:bg-light-gray hover:text-brand-green-dark"
          >
            About Us
          </Link>

          {/* ✨ Updated Mobile Products link for better UX */}
          <div className="px-4 py-2 flex justify-between items-center">
            <Link href="/products" className="hover:text-brand-green-dark">
              Products
            </Link>
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="p-2"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isProductsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {isProductsOpen && (
            <div className="pl-8">
              {productCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block py-2 text-sm text-gray-700 hover:text-brand-green-dark"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/contact"
            className="block px-4 py-2 hover:bg-light-gray hover:text-brand-green-dark"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
