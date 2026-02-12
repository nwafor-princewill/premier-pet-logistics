'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaSearch,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaClock,
  FaShippingFast,
  FaPhone,
  FaGlobe,
} from 'react-icons/fa';
import {
  MdLocalShipping,
  MdGpsFixed,
  MdNotifications,
} from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import TrackingModal from '@/components/TrackingModal'; // ← ADDED

export default function TrackPage() {
  const [trackingCode, setTrackingCode] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  // ---------- MODAL STATE ----------
  const [modalOpen, setModalOpen] = useState(false);
  const [parcelData, setParcelData] = useState<any>(null);
  const [error, setError] = useState('');

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingCode.trim()) return;

    setIsTracking(true);
    setError('');

    try {
      const res = await fetch(`/api/track/${trackingCode.trim()}`);
      const data = await res.json();

      if (!data.success) {
        throw new Error('Tracking code not found');
      }

      setParcelData(data.parcel);
      setModalOpen(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsTracking(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 animate-float">
            <MdLocalShipping className="text-white text-9xl" />
          </div>
          <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '1s' }}>
            <FaMapMarkerAlt className="text-white text-8xl" />
          </div>
          <div className="absolute top-1/2 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
            <MdGpsFixed className="text-white text-7xl" />
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
              <MdGpsFixed />
              <span>Real-Time GPS Tracking Available</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Track Your Pet's Journey
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Stay connected with your pet every step of the way. Get real-time updates, 
              live location tracking, and instant notifications throughout their journey.
            </p>

            {/* Quick Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: MdGpsFixed, label: 'Live GPS Tracking' },
                { icon: MdNotifications, label: 'Instant Updates' },
                { icon: FaClock, label: 'Estimated Arrival' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <item.icon className="text-4xl mb-3 mx-auto text-accent-300" />
                  <p className="font-semibold text-white">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Tracking Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Tracking Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary-100 p-4 rounded-xl">
                      <FaSearch className="text-primary-600 text-2xl" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Enter Tracking Code</h2>
                      <p className="text-sm text-gray-600">Track your pet's shipment in real-time</p>
                    </div>
                  </div>

                  <form onSubmit={handleTrack} className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-3 text-lg">
                        Tracking Code
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={trackingCode}
                          onChange={(e) => setTrackingCode(e.target.value.toUpperCase())}
                          placeholder="e.g., PL-ABC123XYZ"
                          className="w-full px-6 py-5 pr-14 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none text-lg transition-all"
                          required
                        />
                        <FaBoxOpen className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Your tracking code was provided when you booked your shipment
                      </p>
                      {/* ERROR MESSAGE */}
                      {error && (
                        <p className="mt-2 text-red-600 text-sm">{error}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isTracking}
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-5 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isTracking ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Tracking...
                        </>
                      ) : (
                        <>
                          <FaSearch />
                          Track My Pet Now
                        </>
                      )}
                    </button>
                  </form>

                  {/* Example Tracking Code */}
                  <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                    <p className="text-sm text-blue-900 font-semibold mb-1">Sample Tracking Code Format:</p>
                    <p className="text-xs text-blue-700">PL-[TIMESTAMP]-[UNIQUE-ID]</p>
                    <p className="text-xs text-blue-600 mt-2">Example: PL-2024ABC-XYZ123</p>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                    <div className="text-center">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <FaMapMarkerAlt className="text-green-600 text-lg" />
                      </div>
                      <p className="text-xs font-semibold text-gray-900">Location</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <MdLocalShipping className="text-blue-600 text-lg" />
                      </div>
                      <p className="text-xs font-semibold text-gray-900">Status</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <FaClock className="text-purple-600 text-lg" />
                      </div>
                      <p className="text-xs font-semibold text-gray-900">ETA</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/relocate-pet.png"
                    alt="Pet Relocation Tracking"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-3 drop-shadow-lg">Peace of Mind</h3>
                    <p className="text-lg text-white/90 drop-shadow-md">
                      Track your pet's journey from departure to arrival with our advanced GPS tracking system.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How Tracking Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Our Tracking System Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced technology meets compassionate care for complete transparency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: FaBoxOpen,
                title: 'Shipment Created',
                description: 'Unique tracking code generated when your pet\'s journey is booked.',
                color: 'bg-blue-500',
              },
              {
                step: '02',
                icon: MdGpsFixed,
                title: 'GPS Activated',
                description: 'Real-time GPS tracking begins from the moment of pickup.',
                color: 'bg-green-500',
              },
              {
                step: '03',
                icon: MdNotifications,
                title: 'Live Updates',
                description: 'Receive instant notifications at every checkpoint and milestone.',
                color: 'bg-orange-500',
              },
              {
                step: '04',
                icon: FaCheckCircle,
                title: 'Safe Arrival',
                description: 'Delivery confirmation with timestamp and location details.',
                color: 'bg-purple-500',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200 z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className={`${item.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <item.icon className="text-white text-3xl" />
                  </div>
                  <div className="bg-gray-100 text-gray-500 text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    STEP {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Advanced Tracking Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to stay informed about your pet's journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MdGpsFixed,
                title: 'Live GPS Location',
                description: 'See your pet\'s exact location on an interactive map, updated in real-time throughout the journey.',
                color: 'bg-blue-500',
              },
              {
                icon: FaClock,
                title: 'Estimated Arrival Time',
                description: 'Get accurate ETA predictions based on current location, route, and traffic conditions.',
                color: 'bg-green-500',
              },
              {
                icon: MdNotifications,
                title: 'Milestone Alerts',
                description: 'Receive instant notifications when your pet reaches important checkpoints.',
                color: 'bg-orange-500',
              },
              {
                icon: FaMapMarkerAlt,
                title: 'Journey Timeline',
                description: 'View complete travel history with timestamps and locations for every stop.',
                color: 'bg-purple-500',
              },
              {
                icon: FaShippingFast,
                title: 'Transport Method Info',
                description: 'See which mode of transport (air, sea, rail, ground) is currently being used.',
                color: 'bg-pink-500',
              },
              {
                icon: FaPhone,
                title: '24/7 Support Access',
                description: 'Direct contact with our support team from the tracking page anytime you need help.',
                color: 'bg-indigo-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tracking FAQs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about our tracking system
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'When will I receive my tracking code?',
                answer: 'Your unique tracking code is generated immediately when your pet\'s shipment is booked and will be sent to your email and phone within minutes of confirmation.',
              },
              {
                question: 'How often is the tracking information updated?',
                answer: 'Our GPS tracking system updates your pet\'s location every 5-15 minutes during transit. Major checkpoints (pickup, transfer points, delivery) trigger instant notifications.',
              },
              {
                question: 'Can I track multiple pets at once?',
                answer: 'Yes! If you\'re relocating multiple pets, each will have a unique tracking code. You can monitor all of them simultaneously by entering each code.',
              },
              {
                question: 'What if my tracking code isn\'t working?',
                answer: 'If you encounter any issues, please contact our 24/7 support team at +1 (800) PET-SHIP or email support@premierpetlogistics.com. We\'ll resolve it immediately.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-bold flex-shrink-0">Q</span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed ml-11">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Help With Tracking?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Our support team is available 24/7 to assist you with any tracking questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Contact Support
              </Link>
              
              <a
                href="tel:+1-800-PET-SHIP"
                className="bg-accent-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-accent-600 hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-3"
              >
                <FaPhone />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- TRACKING MODAL ---------- */}
      <TrackingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        parcel={parcelData}
      />
    </>
  );
}