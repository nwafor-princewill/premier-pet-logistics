import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Parcel from '@/models/Parcel';
import { generateTrackingCode } from '@/lib/generateTrackingCode';

export async function GET() {
  try {
    await connectDB();
    const parcels = await Parcel.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, parcels });
  } catch (error: any) {
    console.error('❌ GET PARCELS ERROR:', error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const data = await request.json();

    console.log('📦 RECEIVED DATA:', JSON.stringify(data, null, 2));

    // Required fields
    if (!data.petName || !data.sender || !data.user || !data.currentLocation) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const parcelData: any = {
      trackingCode: generateTrackingCode(),
      petName: data.petName,
      sender: data.sender,
      user: data.user,
      currentLocation: data.currentLocation,
    };

    // Optional fields – with safe parsing
    if (data.senderAddress) parcelData.senderAddress = data.senderAddress;
    if (data.senderPhone) parcelData.senderPhone = data.senderPhone;
    if (data.senderEmail) parcelData.senderEmail = data.senderEmail;
    if (data.receiverName) parcelData.receiverName = data.receiverName;
    if (data.receiverAddress) parcelData.receiverAddress = data.receiverAddress;
    if (data.receiverPhone) parcelData.receiverPhone = data.receiverPhone;
    if (data.receiverEmail) parcelData.receiverEmail = data.receiverEmail;
    
    // ✅ FIX: Convert weight to number – extract numeric part
    if (data.weight) {
      const weightStr = String(data.weight);
      const numericWeight = parseFloat(weightStr.replace(/[^0-9.]/g, ''));
      if (!isNaN(numericWeight) && numericWeight > 0) {
        parcelData.weight = numericWeight;
      }
    }

    if (data.dimensions) parcelData.dimensions = data.dimensions;
    
    if (data.deliveryMethod && ['air', 'sea', 'rail', 'ground'].includes(data.deliveryMethod)) {
      parcelData.deliveryMethod = data.deliveryMethod;
    }
    
    if (data.currentStatus) parcelData.currentStatus = data.currentStatus;
    
    if (data.estimatedDelivery) {
      parcelData.estimatedDelivery = new Date(data.estimatedDelivery);
    }

    const parcel = new Parcel(parcelData);
    await parcel.save();

    return NextResponse.json({ success: true, parcel });
  } catch (error: any) {
    console.error('❌ CREATE PARCEL ERROR:', error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}