// app/components/Footer.js

import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-brand-green-dark to-brand-green-deeper text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Radhika <span className="text-brand-yellow">Machineries</span>
            </h3>
            <p className="text-gray-400">
              Engineering excellence in stone processing machinery. We provide
              robust, reliable, and innovative solutions for the global stone
              industry.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-400 hover:text-brand-yellow">
                <Facebook />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brand-yellow">
                <Twitter />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brand-yellow">
                <Linkedin />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-yellow">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-white"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-yellow">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Service Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-yellow">
              Contact Info
            </h4>
            <p className="text-gray-400">
              Plot No. 06, Khasra No. 155/1, Ram Nagar, Industrial Area,
              Sangriya, Jodhpur, Rajasthan 342008
            </p>
            <p className="text-gray-400 mt-2">Email: rmt.jodhpur@gmail.com</p>
            <p className="text-gray-400 mt-2">Phone: +91 9983813366</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Radhika Machineries. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
