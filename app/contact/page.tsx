// app/contact/page.js

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
          <h1 className="text-4xl font-extrabold text-dark-gray">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We're here to help. Contact us for quotes, support, or any
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
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-yellow"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-yellow"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-yellow"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-yellow"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-yellow text-dark-gray font-bold py-3 px-6 rounded-md hover:bg-yellow-400 transition-colors"
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
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
              <MapPin className="w-8 h-8 text-brand-yellow mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Our Address</h3>
                <p className="text-gray-600">
                  123 Industrial Area, Jodhpur, Rajasthan, India
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
              <Mail className="w-8 h-8 text-brand-yellow mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-gray-600">contact@radhikamachineries.com</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
              <Phone className="w-8 h-8 text-brand-yellow mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-gray-600">+91 12345 67890</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
