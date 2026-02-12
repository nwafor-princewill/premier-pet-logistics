import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';
import mongoose from 'mongoose';

export async function POST(request: NextRequest) {
  try {
    console.log('🔐 Login API called');
    
    // Log the MongoDB connection string (redacted)
    const uri = process.env.MONGODB_URI || 'not set';
    const redactedUri = uri.replace(/:[^:]*@/, ':****@');
    console.log('📦 MONGODB_URI:', redactedUri);
    
    await connectDB();
    console.log('✅ MongoDB connected');
    
    // Log database name
    const dbName = mongoose.connection.db?.databaseName;
    console.log('📀 Database name:', dbName);
    
    // Log collection names
    const collections = await mongoose.connection.db?.listCollections().toArray();
    const collectionNames = collections?.map(c => c.name) || [];
    console.log('📚 Collections:', collectionNames);

    const { username, password } = await request.json();
    console.log('📦 Request body:', { username, password: '***' });

    const admin = await Admin.findOne({ username: username.toLowerCase() });
    console.log('👤 Admin found in DB:', !!admin);
    
    if (!admin) {
      console.log('❌ No admin found with username:', username);
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    }

    console.log('👤 Admin ID:', admin._id);
    console.log('👤 Stored hash:', admin.password ? admin.password.substring(0, 20) + '...' : 'none');

    const isValid = await admin.comparePassword(password);
    console.log('🔑 Password valid:', isValid);

    if (!isValid) {
      console.log('❌ Password mismatch');
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    }

    console.log('✅ Login successful for:', admin.username);
    return NextResponse.json({ 
      success: true, 
      admin: { id: admin._id, username: admin.username, role: admin.role } 
    });
  } catch (error) {
    console.error('🔥 Login error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}