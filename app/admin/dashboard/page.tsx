'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaCopy } from 'react-icons/fa';
import RequireAuth from '@/components/admin/RequireAuth';
import toast, { Toaster } from 'react-hot-toast'; // optional – install: npm i react-hot-toast

interface Parcel {
  _id: string;
  trackingCode: string;
  petName: string;
  sender: string;
  currentLocation: string;
  currentStatus: string;
}

export default function AdminDashboard() {
  const [parcels, setParcels] = useState<Parcel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchParcels();
  }, []);

  const fetchParcels = async () => {
    try {
      const res = await fetch('/api/admin/parcels');
      const data = await res.json();
      if (data.success) setParcels(data.parcels);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success('Tracking code copied!');
  };

  const handleDelete = async (code: string) => {
    if (!confirm('Are you sure you want to delete this parcel?')) return;
    try {
      const res = await fetch(`/api/admin/parcels/${code}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        toast.success('Parcel deleted');
        fetchParcels();
      }
    } catch (error) {
      toast.error('Delete failed');
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <RequireAuth>
      <Toaster position="top-right" />
      <div className="p-6 md:p-8 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Parcel Management</h1>
            <Link
              href="/admin/create"
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              <FaPlus /> New Parcel
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Tracking Code</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Pet Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Sender</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Current Location</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {parcels.map((parcel) => (
                    <motion.tr
                      key={parcel._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4 font-mono text-sm">{parcel.trackingCode}</td>
                      <td className="px-6 py-4">{parcel.petName}</td>
                      <td className="px-6 py-4">{parcel.sender}</td>
                      <td className="px-6 py-4">{parcel.currentLocation}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          parcel.currentStatus === 'delivered' ? 'bg-green-100 text-green-700' :
                          parcel.currentStatus === 'in-transit' ? 'bg-blue-100 text-blue-700' :
                          parcel.currentStatus === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {parcel.currentStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleCopy(parcel.trackingCode)}
                            className="text-gray-600 hover:text-primary-600 transition p-2"
                            title="Copy tracking code"
                          >
                            <FaCopy />
                          </button>
                          <Link
                            href={`/admin/parcels/${parcel.trackingCode}/edit`}
                            className="text-gray-600 hover:text-primary-600 transition p-2"
                            title="Edit"
                          >
                            <FaEdit />
                          </Link>
                          <button
                            onClick={() => handleDelete(parcel.trackingCode)}
                            className="text-gray-600 hover:text-red-600 transition p-2"
                            title="Delete"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            {parcels.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No parcels yet. Create your first one!
              </div>
            )}
          </div>
        </div>
      </div>
    </RequireAuth>
  );
}