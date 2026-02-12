'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent-500 via-accent-600 to-orange-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Ready to Relocate Your Pet?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white drop-shadow-md">
              Let our experienced team handle every detail of your pet's journey. 
              Get a free quote and personalized consultation today!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/contact"
                className="bg-white text-accent-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-3"
              >
                <FaPaperPlane />
                Get Free Quote
              </Link>
              
              <a
                href="tel:+1-800-PET-SHIP"
                className="bg-primary-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-700 hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-3"
              >
                <FaPhone />
                Call Us Now
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30"
              >
                <FaPhone className="text-4xl mb-3 mx-auto text-white drop-shadow-lg" />
                <p className="font-bold text-xl mb-2 text-white drop-shadow">Call Us 24/7</p>
                <a href="tel:+1-800-PET-SHIP" className="text-white font-semibold hover:text-white/80 transition drop-shadow">
                  +1 (800) PET-SHIP
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30"
              >
                <FaEnvelope className="text-4xl mb-3 mx-auto text-white drop-shadow-lg" />
                <p className="font-bold text-xl mb-2 text-white drop-shadow">Email Support</p>
                <a href="mailto:info@premierpetlogistics.com" className="text-white font-semibold hover:text-white/80 transition drop-shadow">
                  info@premierpetlogistics.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;