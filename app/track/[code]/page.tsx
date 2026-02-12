'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaPaw, FaMapMarkerAlt, FaCalendarAlt, FaBox, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function TrackPage() {
  const { code } = useParams();
  const [parcel, setParcel] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/track/${code}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setParcel(data.parcel);
        else setError('Tracking code not found');
      })
      .catch(() => setError('Error fetching data'))
      .finally(() => setLoading(false));
  }, [code]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary-100 p-4 rounded-full">
              <FaPaw className="text-primary-600 text-3xl" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Track Your Pet</h1>
              <p className="text-gray-600 font-mono mt-1">Code: {code}</p>
            </div>
          </div>

          {/* Status Badge */}
          <div className="mb-8">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
              parcel.currentStatus === 'delivered' ? 'bg-green-100 text-green-700' :
              parcel.currentStatus === 'in-transit' ? 'bg-blue-100 text-blue-700' :
              parcel.currentStatus === 'pending' ? 'bg-yellow-100 text-yellow-700' :
              'bg-gray-100 text-gray-700'
            }`}>
              Status: {parcel.currentStatus?.replace('-', ' ') || 'Pending'}
            </span>
          </div>

          {/* Two column layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Pet & Location */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FaBox /> Pet Information
                </h2>
                <div className="space-y-3">
                  <p><span className="font-semibold">Pet Name:</span> {parcel.petName}</p>
                  <p><span className="font-semibold">Current Location:</span> {parcel.currentLocation}</p>
                  {parcel.estimatedDelivery && (
                    <p><span className="font-semibold">Est. Delivery:</span> {new Date(parcel.estimatedDelivery).toLocaleDateString()}</p>
                  )}
                  {parcel.weight && <p><span className="font-semibold">Weight:</span> {parcel.weight} kg</p>}
                  {parcel.dimensions && <p><span className="font-semibold">Dimensions:</span> {parcel.dimensions}</p>}
                  {parcel.deliveryMethod && <p><span className="font-semibold">Method:</span> {parcel.deliveryMethod}</p>}
                </div>
              </div>
            </div>

            {/* Right: Sender & Receiver */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FaUser /> Sender
                </h2>
                <div className="space-y-2">
                  <p className="font-semibold">{parcel.sender}</p>
                  {parcel.senderAddress && <p className="text-sm">{parcel.senderAddress}</p>}
                  {parcel.senderPhone && <p className="text-sm flex items-center gap-1"><FaPhone className="text-xs" /> {parcel.senderPhone}</p>}
                  {parcel.senderEmail && <p className="text-sm flex items-center gap-1"><FaEnvelope className="text-xs" /> {parcel.senderEmail}</p>}
                </div>
              </div>

              {parcel.receiverName && (
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaUser /> Receiver
                  </h2>
                  <div className="space-y-2">
                    <p className="font-semibold">{parcel.receiverName}</p>
                    {parcel.receiverAddress && <p className="text-sm">{parcel.receiverAddress}</p>}
                    {parcel.receiverPhone && <p className="text-sm flex items-center gap-1"><FaPhone className="text-xs" /> {parcel.receiverPhone}</p>}
                    {parcel.receiverEmail && <p className="text-sm flex items-center gap-1"><FaEnvelope className="text-xs" /> {parcel.receiverEmail}</p>}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer: last updated */}
          <div className="mt-8 pt-6 border-t text-sm text-gray-500 text-right">
            Last updated: {new Date(parcel.updatedAt).toLocaleString()}
          </div>
        </motion.div>
      </div>
    </div>
  );
}