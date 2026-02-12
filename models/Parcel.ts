import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IParcel extends Document {
  trackingCode: string;
  petName: string;          // renamed from parcelName
  sender: string;           // required: sender name
  user: string;             // required: customer email/name
  currentLocation: string;  // required: where the pet is now

  // ----- Optional fields -----
  senderAddress?: string;
  senderPhone?: string;
  senderEmail?: string;
  receiverName?: string;
  receiverAddress?: string;
  receiverPhone?: string;
  receiverEmail?: string;
  weight?: number;
  dimensions?: string;
  deliveryMethod?: 'air' | 'sea' | 'rail' | 'ground';
  currentStatus?: 'pending' | 'in-transit' | 'out-for-delivery' | 'delivered' | 'on-hold';
  estimatedDelivery?: Date;

  // Dates
  createdAt: Date;
  updatedAt: Date;
}

const ParcelSchema = new Schema<IParcel>({
  trackingCode: { 
    type: String, 
    required: true, 
    unique: true,
    uppercase: true 
  },
  petName: { type: String, required: true },
  sender: { type: String, required: true },
  user: { type: String, required: true },
  currentLocation: { type: String, required: true },

  // Optional fields – no `required: true`
  senderAddress: String,
  senderPhone: String,
  senderEmail: String,
  receiverName: String,
  receiverAddress: String,
  receiverPhone: String,
  receiverEmail: String,
  weight: Number,
  dimensions: String,
  deliveryMethod: { 
    type: String, 
    enum: ['air', 'sea', 'rail', 'ground']
  },
  currentStatus: { 
    type: String, 
    enum: ['pending', 'in-transit', 'out-for-delivery', 'delivered', 'on-hold'],
    default: 'pending'
  },
  estimatedDelivery: Date,

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Generate tracking code if not provided (we'll always generate)
ParcelSchema.pre('save', function(next) {
  if (!this.trackingCode) {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    this.trackingCode = `PL-${timestamp}-${random}`;
  }
  next();
});

// Update `updatedAt` on every save
ParcelSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const Parcel: Model<IParcel> = mongoose.models.Parcel || mongoose.model<IParcel>('Parcel', ParcelSchema);

export default Parcel;