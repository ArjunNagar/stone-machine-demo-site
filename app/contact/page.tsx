// app/contact/page.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle, X } from "lucide-react";

export default function ContactPage() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // State for submission status and success toast
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate the form
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Full Name is required.";
    if (!formData.email) {
      newErrors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email Address is invalid.";
    }
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call for demo purposes
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccessToast(true);
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Hide toast after 4 seconds
        setTimeout(() => setShowSuccessToast(false), 4000);
      }, 1500);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Success Toast */}
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 62, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-1/2 z-50 flex items-center gap-3 bg-brand-green-dark text-white p-4 rounded-lg shadow-2xl"
          >
            <CheckCircle />
            <span>Message sent successfully!</span>
            <button onClick={() => setShowSuccessToast(false)} className="ml-4">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-brand-green-light ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-brand-green-light ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-brand-green-light ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-brand-green-light ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-green-dark text-white font-bold py-3 px-6 rounded-md hover:bg-brand-green-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
    </div>
  );
}
