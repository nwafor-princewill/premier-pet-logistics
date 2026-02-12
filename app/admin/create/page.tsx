'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import RequireAuth from '@/components/admin/RequireAuth';
import toast, { Toaster } from 'react-hot-toast';

export default function CreateParcel() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  const [formData, setFormData] = useState({
    petName: '',
    sender: '',
    user: '',
    currentLocation: '',
    // optional
    senderAddress: '',
    senderPhone: '',
    senderEmail: '',
    receiverName: '',
    receiverAddress: '',
    receiverPhone: '',
    receiverEmail: '',
    weight: '',
    dimensions: '',
    deliveryMethod: '',
    currentStatus: 'pending',
    estimatedDelivery: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/admin/parcels', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setGeneratedCode(data.parcel.trackingCode);
      toast.success(`Parcel created! Code: ${data.parcel.trackingCode}`);
      setTimeout(() => router.push('/admin/dashboard'), 2000);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RequireAuth>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gray-50 p-6 md:p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Create New Parcel</h1>
          
          {generatedCode && (
            <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl">
              <p className="font-semibold">✅ Tracking Code Generated:</p>
              <p className="text-2xl font-mono mt-2">{generatedCode}</p>
              <p className="text-sm mt-2">Redirecting to dashboard...</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Required fields section */}
            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
              <h2 className="font-bold text-yellow-800 mb-3">Required Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pet Name *</label>
                  <input name="petName" value={formData.petName} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-200 rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Sender Name *</label>
                  <input name="sender" value={formData.sender} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-200 rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">User (Customer Email/Name) *</label>
                  <input name="user" value={formData.user} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-200 rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Location *</label>
                  <input name="currentLocation" value={formData.currentLocation} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-200 rounded-xl" />
                </div>
              </div>
            </div>

            {/* Optional fields – collapsible or always visible */}
            <details open className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <summary className="font-bold text-gray-800 cursor-pointer">Optional Details (click to expand)</summary>
              <div className="mt-4 space-y-6">
                {/* Sender extra */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Sender Additional Info</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <input name="senderAddress" value={formData.senderAddress} onChange={handleChange} placeholder="Address" className="px-4 py-2 border rounded-lg" />
                    <input name="senderPhone" value={formData.senderPhone} onChange={handleChange} placeholder="Phone" className="px-4 py-2 border rounded-lg" />
                    <input name="senderEmail" value={formData.senderEmail} onChange={handleChange} placeholder="Email" className="px-4 py-2 border rounded-lg" />
                  </div>
                </div>

                {/* Receiver details */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Receiver Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="receiverName" value={formData.receiverName} onChange={handleChange} placeholder="Receiver Name" className="px-4 py-2 border rounded-lg" />
                    <input name="receiverAddress" value={formData.receiverAddress} onChange={handleChange} placeholder="Address" className="px-4 py-2 border rounded-lg" />
                    <input name="receiverPhone" value={formData.receiverPhone} onChange={handleChange} placeholder="Phone" className="px-4 py-2 border rounded-lg" />
                    <input name="receiverEmail" value={formData.receiverEmail} onChange={handleChange} placeholder="Email" className="px-4 py-2 border rounded-lg" />
                  </div>
                </div>

                {/* Parcel details */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Parcel Details</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                    type="number"
                    step="0.1"
                    min="0"
                    name="weight"
                    value={formData.weight || ''}
                    onChange={handleChange}
                    placeholder="Weight (kg)"
                    className="px-4 py-2 border rounded-lg"
                    />
                    <input name="dimensions" value={formData.dimensions} onChange={handleChange} placeholder="Dimensions (e.g. 30x20x15 cm)" className="px-4 py-2 border rounded-lg" />
                    <select name="deliveryMethod" value={formData.deliveryMethod} onChange={handleChange} className="px-4 py-2 border rounded-lg">
                      <option value="">Delivery Method</option>
                      <option value="air">Air</option>
                      <option value="sea">Sea</option>
                      <option value="rail">Rail</option>
                      <option value="ground">Ground</option>
                    </select>
                    <select name="currentStatus" value={formData.currentStatus} onChange={handleChange} className="px-4 py-2 border rounded-lg">
                      <option value="pending">Pending</option>
                      <option value="in-transit">In Transit</option>
                      <option value="out-for-delivery">Out for Delivery</option>
                      <option value="delivered">Delivered</option>
                      <option value="on-hold">On Hold</option>
                    </select>
                    <input name="estimatedDelivery" type="date" value={formData.estimatedDelivery} onChange={handleChange} className="px-4 py-2 border rounded-lg" />
                  </div>
                </div>
              </div>
            </details>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all disabled:opacity-70"
              >
                {loading ? 'Creating...' : 'Generate Tracking Code'}
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </RequireAuth>
  );
}