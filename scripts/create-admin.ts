import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';

async function createAdmin() {
  await connectDB();
  
  const existing = await Admin.findOne({ username: 'admin' });
  if (existing) {
    console.log('Admin already exists');
    process.exit(0);
  }

  const admin = new Admin({
    username: 'admin',
    password: 'yourpassword123', // change this!
    email: 'admin@premierpetlogistics.com',
    role: 'super-admin'
  });

  await admin.save();
  console.log('✅ Admin created successfully');
  process.exit(0);
}

createAdmin();