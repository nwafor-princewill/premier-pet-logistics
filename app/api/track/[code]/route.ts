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
      return NextResponse.json({ success: false, message: 'Tracking code not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, parcel });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}