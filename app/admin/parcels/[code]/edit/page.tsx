'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import RequireAuth from '@/components/admin/RequireAuth';
import toast, { Toaster } from 'react-hot-toast';

export default function EditParcel() {
  const { code } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    fetch(`/api/admin/parcels/${code}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setFormData(data.parcel);
        } else {
          toast.error('Parcel not found');
          router.push('/admin/dashboard');
        }
      })
      .finally(() => setLoading(false));
  }, [code, router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/parcels/${code}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      toast.success('Parcel updated!');
      router.push('/admin/dashboard');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-600">Loading parcel data...</div>;
  }

  return (
    <RequireAuth>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gray-50 p-6 md:p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Parcel</h1>
          <p className="text-gray-600 mb-6 font-mono">Tracking Code: {code}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ===== REQUIRED FIELDS ===== */}
            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
              <h2 className="font-bold text-yellow-800 mb-3">Required Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pet Name *</label>
                  <input
                    name="petName"
                    value={formData.petName || ''}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Sender Name *</label>
                  <input
                    name="sender"
                    value={formData.sender || ''}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">User (Customer) *</label>
                  <input
                    name="user"
                    value={formData.user || ''}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Location *</label>
                  <input
                    name="currentLocation"
                    value={formData.currentLocation || ''}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* ===== OPTIONAL FIELDS (COLLAPSIBLE) ===== */}
            <details open className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <summary className="font-bold text-gray-800 cursor-pointer">
                Optional Details (click to expand/collapse)
              </summary>
              <div className="mt-4 space-y-6">
                {/* Sender Additional Info */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Sender Additional Info</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      name="senderAddress"
                      value={formData.senderAddress || ''}
                      onChange={handleChange}
                      placeholder="Address"
                      className="px-4 py-2 border rounded-lg"
                    />
                    <input
                      name="senderPhone"
                      value={formData.senderPhone || ''}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="px-4 py-2 border rounded-lg"
                    />
                    <input
                      name="senderEmail"
                      value={formData.senderEmail || ''}
                      onChange={handleChange}
                      placeholder="Email"
                      className="px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>

                {/* Receiver Details */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Receiver Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      name="receiverName"
                      value={formData.receiverName || ''}
                      onChange={handleChange}
                      placeholder="Receiver Name"
                      className="px-4 py-2 border rounded-lg"
                    />
                    <input
                      name="receiverAddress"
                      value={formData.receiverAddress || ''}
                      onChange={handleChange}
                      placeholder="Address"
                      className="px-4 py-2 border rounded-lg"
                    />
                    <input
                      name="receiverPhone"
                      value={formData.receiverPhone || ''}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="px-4 py-2 border rounded-lg"
                    />
                    <input
                      name="receiverEmail"
                      value={formData.receiverEmail || ''}
                      onChange={handleChange}
                      placeholder="Email"
                      className="px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>

                {/* Parcel Details */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Parcel Details</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      name="weight"
                      value={formData.weight || ''}
                      onChange={handleChange}
                      placeholder="Weight (kg)"
                      className="px-4 py-2 border rounded-lg"
                    />
                    <input
                      name="dimensions"
                      value={formData.dimensions || ''}
                      onChange={handleChange}
                      placeholder="Dimensions (e.g. 30x20x15 cm)"
                      className="px-4 py-2 border rounded-lg"
                    />
                    <select
                      name="deliveryMethod"
                      value={formData.deliveryMethod || ''}
                      onChange={handleChange}
                      className="px-4 py-2 border rounded-lg"
                    >
                      <option value="">Delivery Method</option>
                      <option value="air">Air</option>
                      <option value="sea">Sea</option>
                      <option value="rail">Rail</option>
                      <option value="ground">Ground</option>
                    </select>
                    <select
                      name="currentStatus"
                      value={formData.currentStatus || 'pending'}
                      onChange={handleChange}
                      className="px-4 py-2 border rounded-lg"
                    >
                      <option value="pending">Pending</option>
                      <option value="in-transit">In Transit</option>
                      <option value="out-for-delivery">Out for Delivery</option>
                      <option value="delivered">Delivered</option>
                      <option value="on-hold">On Hold</option>
                    </select>
                    <input
                      name="estimatedDelivery"
                      type="date"
                      value={
                        formData.estimatedDelivery
                          ? new Date(formData.estimatedDelivery).toISOString().split('T')[0]
                          : ''
                      }
                      onChange={handleChange}
                      className="px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </details>

            {/* FORM ACTIONS */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={saving}
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all disabled:opacity-70"
              >
                {saving ? 'Saving...' : 'Save Changes'}
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