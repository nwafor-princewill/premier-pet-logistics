'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaPaw,
  FaCheckCircle,
  FaGlobe,
  FaQuestionCircle,
} from 'react-icons/fa';
import { MdPets, MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  // ---------- FORM STATE ----------
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
        const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        // Success
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error: any) {
        alert(error.message || 'Something went wrong. Please try again.');
    } finally {
        setIsSubmitting(false);
    }
    };

  // ---------- LOCATIONS (from your footer style) ----------
  const locations = [
    {
      city: 'New York',
      country: 'USA',
      address: '123 Pet Street, Suite 100, New York, NY 10001',
      phone: '+1 (212) 555-0123',
      email: 'nyc@premierpetlogistics.com',
    },
    {
      city: 'London',
      country: 'UK',
      address: '45 Paws Avenue, Canary Wharf, London E14 5AB',
      phone: '+44 20 7946 0123',
      email: 'london@premierpetlogistics.com',
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      address: '7-10-5 Shibuya, Shibuya-ku, Tokyo 150-0002',
      phone: '+81 3-1234-5678',
      email: 'tokyo@premierpetlogistics.com',
    },
    {
      city: 'Sydney',
      country: 'Australia',
      address: '55 George Street, The Rocks, Sydney NSW 2000',
      phone: '+61 2 9876 5432',
      email: 'sydney@premierpetlogistics.com',
    },
  ];

  // ---------- FAQ DATA ----------
  const faqs = [
    {
      question: 'How do I get a quote for pet relocation?',
      answer:
        'Simply fill out the contact form above or call our 24/7 support line. Provide details about your pet, destination, and preferred travel dates – we’ll get back to you within 2 hours with a customized quote.',
    },
    {
      question: 'What documents are required for international pet travel?',
      answer:
        'Requirements vary by country but typically include health certificates, vaccination records, microchip details, and import permits. Our team handles all documentation and guides you through every step.',
    },
    {
      question: 'How can I track my pet during transport?',
      answer:
        'Every booking includes free real‑time GPS tracking. You’ll receive a unique tracking link via email and SMS to monitor your pet’s journey 24/7 from departure to arrival.',
    },
    {
      question: 'Are your transport vehicles climate‑controlled?',
      answer:
        'Yes, all our air, sea, rail, and ground transport options feature temperature‑controlled environments to ensure your pet’s comfort and safety throughout the journey.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'We offer free cancellation up to 7 days before departure. Within 7 days, a partial fee applies. All details are clearly outlined in your service agreement.',
    },
  ];

  // ---------- ACCORDION STATE ----------
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Background paw prints */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 animate-float">
            <MdPets className="text-white text-8xl" />
          </div>
          <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
            <FaEnvelope className="text-white text-8xl" />
          </div>
          <div className="absolute top-1/2 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
            <FaPhoneAlt className="text-white text-7xl" />
          </div>
          <div className="absolute bottom-1/4 left-[15%] animate-float" style={{ animationDelay: '1.5s' }}>
            <FaPaw className="text-white text-7xl" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/30"
            >
              <FaGlobe />
              <span>Get In Touch With Us</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Contact Our Team
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              We're here to answer your questions and help your pet travel safely. 
              Reach out today – we respond within 2 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== CONTACT INFO + FORM ========== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* ----- LEFT: CONTACT DETAILS ----- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <MdPets />
                <span>Contact Information</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                We'd Love to Hear From You
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Whether you have a question about our services, need a quote, or want to track an 
                existing shipment – our pet logistics specialists are ready to assist you 24/7.
              </p>

              {/* Contact cards */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                  <div className="bg-primary-100 p-4 rounded-lg shrink-0">
                    <FaMapMarkerAlt className="text-primary-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-700">
                      Premier Pet Logistics Headquarters<br />
                      123 Pet Street, Suite 100<br />
                      New York, NY 10001, USA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                  <div className="bg-primary-100 p-4 rounded-lg shrink-0">
                    <FaPhoneAlt className="text-primary-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-700">
                      Toll Free: +1 (800) 123-4567<br />
                      International: +1 (212) 555-0199<br />
                      <span className="text-sm text-gray-500">Available 24/7</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                  <div className="bg-primary-100 p-4 rounded-lg shrink-0">
                    <FaEnvelope className="text-primary-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-700">
                      General Inquiries: info@premierpetlogistics.com<br />
                      Quotes: quotes@premierpetlogistics.com<br />
                      Support: support@premierpetlogistics.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                  <div className="bg-primary-100 p-4 rounded-lg shrink-0">
                    <FaClock className="text-primary-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday – Friday: 9:00 AM – 6:00 PM (EST)<br />
                      Saturday: 10:00 AM – 4:00 PM (EST)<br />
                      Sunday: Closed (emergency support available)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ----- RIGHT: CONTACT FORM ----- */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-3xl p-8 md:p-10 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl flex items-center gap-3"
                >
                  <FaCheckCircle className="text-xl shrink-0" />
                  <span>Thank you! Your message has been sent. We'll reply within 2 hours.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="+1 123 456 7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="quote">Request a Quote</option>
                      <option value="tracking">Track My Pet</option>
                      <option value="services">Service Information</option>
                      <option value="support">Customer Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your pet, destination, and any special requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== OUR GLOBAL LOCATIONS ========== */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Global Offices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're wherever your pet needs to be. Visit one of our regional offices or contact us online.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-primary-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                  <MdLocationOn className="text-primary-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {location.city}, {location.country}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {location.address}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaPhoneAlt className="text-primary-500 text-xs" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaEnvelope className="text-primary-500 text-xs" />
                    <span className="truncate">{location.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <FaQuestionCircle />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Got Questions? We've Got Answers
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our pet relocation services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                  <span className="text-primary-600 text-2xl ml-4">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                    marginTop: openFaq === index ? 0 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-gray-100 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-700 mb-4">Still have questions?</p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <FaPhoneAlt />
              Call Our Support Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== FOOTER WILL GO HERE ========== */}
      {/* Import your existing Footer component and place it below */}
    </>
  );
}