import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Parcel from '@/models/Parcel';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    await connectDB();
    const { code } = await params; // ✅ MUST await

    const parcel = await Parcel.findOne({ trackingCode: code });
    if (!parcel) {
      return NextResponse.json({ success: false, message: 'Tracking code not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, parcel });
  } catch (error) {
    console.error('Track GET error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}