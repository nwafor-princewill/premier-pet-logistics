'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaBoxOpen, FaMapMarkerAlt } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import Image from 'next/image';
import TrackingModal from '@/components/TrackingModal'; // ← ADDED

const TrackingSection = () => {
  const [trackingCode, setTrackingCode] = useState('');
  // ---------- MODAL STATE ----------
  const [isTracking, setIsTracking] = useState(false);
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
    <section id="tracking" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <MdLocalShipping />
              <span>Real-Time Tracking Available</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Track Your Pet's Journey
            </h2>
            <p className="text-lg text-gray-600">
              Enter your tracking code below to get real-time updates on your pet's location and status
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/relocate-pet.png"
                alt="Pet Relocation Tracking"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>

            {/* Right Side - Tracking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-10"
            >
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
                      placeholder="Enter tracking code (e.g., PL-ABC123XYZ)"
                      className="w-full px-6 py-5 pr-14 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none text-lg transition-all"
                      required
                    />
                    <FaBoxOpen className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                  </div>
                  {/* Error message */}
                  {error && (
                    <p className="mt-2 text-sm text-red-600">{error}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-2">
                    Your tracking code was provided when you booked your pet's shipment
                  </p>
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

              {/* Info Cards */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FaMapMarkerAlt className="text-green-600 text-lg" />
                  </div>
                  <p className="text-xs font-semibold text-gray-900">Live GPS</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MdLocalShipping className="text-blue-600 text-lg" />
                  </div>
                  <p className="text-xs font-semibold text-gray-900">Updates</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FaBoxOpen className="text-purple-600 text-lg" />
                  </div>
                  <p className="text-xs font-semibold text-gray-900">ETA</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---------- TRACKING MODAL ---------- */}
      <TrackingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        parcel={parcelData}
      />
    </section>
  );
};

export default TrackingSection;