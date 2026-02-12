'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes,
  FaPaw,
  FaBox,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from 'react-icons/fa';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  parcel: any;
}

export default function TrackingModal({ isOpen, onClose, parcel }: Props) {
  if (!parcel) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <FaPaw className="text-primary-600 text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Tracking Details</h2>
                    <p className="text-sm text-gray-500 font-mono">{parcel.trackingCode}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition p-2"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Status Badge */}
                <div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      parcel.currentStatus === 'delivered'
                        ? 'bg-green-100 text-green-700'
                        : parcel.currentStatus === 'in-transit'
                        ? 'bg-blue-100 text-blue-700'
                        : parcel.currentStatus === 'pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    Status: {parcel.currentStatus?.replace('-', ' ') || 'Pending'}
                  </span>
                </div>

                {/* Pet & Location */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-5 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <FaBox className="text-primary-500" />
                      Pet Information
                    </h3>
                    <div className="space-y-2">
                      <p>
                        <span className="font-medium">Name:</span> {parcel.petName}
                      </p>
                      <p>
                        <span className="font-medium">Current location:</span>{' '}
                        {parcel.currentLocation}
                      </p>
                      {parcel.estimatedDelivery && (
                        <p>
                          <span className="font-medium">Est. delivery:</span>{' '}
                          {new Date(parcel.estimatedDelivery).toLocaleDateString()}
                        </p>
                      )}
                      {parcel.deliveryMethod && (
                        <p>
                          <span className="font-medium">Method:</span> {parcel.deliveryMethod}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <FaUser className="text-primary-500" />
                      Sender
                    </h3>
                    <div className="space-y-2">
                      <p className="font-medium">{parcel.sender}</p>
                      {parcel.senderPhone && (
                        <p className="text-sm flex items-center gap-1">
                          <FaPhone className="text-xs" /> {parcel.senderPhone}
                        </p>
                      )}
                      {parcel.senderEmail && (
                        <p className="text-sm flex items-center gap-1">
                          <FaEnvelope className="text-xs" /> {parcel.senderEmail}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Receiver (if exists) */}
                {parcel.receiverName && (
                  <div className="bg-gray-50 p-5 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <FaUser className="text-primary-500" />
                      Receiver
                    </h3>
                    <div className="space-y-2">
                      <p className="font-medium">{parcel.receiverName}</p>
                      {parcel.receiverAddress && <p className="text-sm">{parcel.receiverAddress}</p>}
                      {parcel.receiverPhone && (
                        <p className="text-sm flex items-center gap-1">
                          <FaPhone className="text-xs" /> {parcel.receiverPhone}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Additional Parcel Details */}
                {(parcel.weight || parcel.dimensions) && (
                  <div className="bg-gray-50 p-5 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Parcel Details</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {parcel.weight && (
                        <p>
                          <span className="font-medium">Weight:</span> {parcel.weight} kg
                        </p>
                      )}
                      {parcel.dimensions && (
                        <p>
                          <span className="font-medium">Dimensions:</span> {parcel.dimensions}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="text-right text-xs text-gray-500 border-t pt-4">
                  Last updated: {new Date(parcel.updatedAt).toLocaleString()}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}