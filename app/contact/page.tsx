// app/contact/page.tsx

"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ✨ Updated title color */}
          <h1 className="text-4xl font-extrabold text-brand-green-dark">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We&apos;re here to help. Contact us for quotes, support, or any
            inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-dark-gray">
              Send us a Message
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  // ✨ Updated focus ring color
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green-light"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green-light"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green-light"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green-light"
                ></textarea>
              </div>
              {/* ✨ Updated button color */}
              <button
                type="submit"
                className="w-full bg-brand-green-dark text-white font-bold py-3 px-6 rounded-md hover:bg-brand-green-light transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* ✨ Updated cards with green theme and new info */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 border-t-4 border-brand-green-light">
              <MapPin className="w-10 h-10 text-brand-green-dark mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Our Address</h3>
                <p className="text-gray-600">
                  <span className="font-bold">Unit-1:</span> Plot No. 06, Ram
                  Nagar, Sangriya, Jodhpur, Rajasthan 342008
                </p>
                <p className="text-gray-600 mt-2">
                  <span className="font-bold">Unit-2:</span> J-65, RIICO, 1st
                  Phase, Sangriya, Jodhpur, Rajasthan 342008
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 border-t-4 border-brand-green-light">
              <Mail className="w-8 h-8 text-brand-green-dark mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-gray-600">rmt.jodhpur@gmail.com</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 border-t-4 border-brand-green-light">
              <Phone className="w-8 h-8 text-brand-green-dark mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-gray-600">+91 9983813366</p>
                <p className="text-gray-600">+91 9950329353</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
