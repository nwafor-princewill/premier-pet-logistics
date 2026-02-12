import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Parcel from '@/models/Parcel';

export async function GET(
  request: NextRequest,
  { params }: { params: { code: string } }
) {
  try {
    await connectDB();
    const parcel = await Parcel.findOne({ trackingCode: params.code });
    if (!parcel) {
      return NextResponse.json({ success: false, message: 'Parcel not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, parcel });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to fetch parcel' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { code: string } }
) {
  try {
    await connectDB();
    const data = await request.json();
    const parcel = await Parcel.findOne({ trackingCode: params.code });

    if (!parcel) {
      return NextResponse.json({ success: false, message: 'Parcel not found' }, { status: 404 });
    }

    // Update only provided fields
    const updatableFields = [
      'petName', 'sender', 'user', 'currentLocation',
      'senderAddress', 'senderPhone', 'senderEmail',
      'receiverName', 'receiverAddress', 'receiverPhone', 'receiverEmail',
      'weight', 'dimensions', 'deliveryMethod', 'currentStatus', 'estimatedDelivery'
    ];

    updatableFields.forEach(field => {
      if (data[field] !== undefined) {
        (parcel as any)[field] = data[field];
      }
    });

    parcel.updatedAt = new Date();
    await parcel.save();

    return NextResponse.json({ success: true, parcel });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Failed to update parcel' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { code: string } }
) {
  try {
    await connectDB();
    const result = await Parcel.findOneAndDelete({ trackingCode: params.code });
    if (!result) {
      return NextResponse.json({ success: false, message: 'Parcel not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: 'Parcel deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to delete parcel' }, { status: 500 });
  }
}