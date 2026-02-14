import { config } from 'dotenv';
import connectDB from '../lib/mongodb';
import Admin from '../models/Admin';

// Load environment variables from .env.local
config({ path: '.env.local' });

async function resetAdmin() {
  try {
    await connectDB();

    // Delete any existing admin with username 'admin'
    await Admin.deleteMany({ username: 'admin' });
    console.log('🧹 Removed existing admin (if any)');

    // Create a fresh admin
    const admin = new Admin({
      username: 'admin',
      password: 'admin123', // Simple password – you can change it later
      email: 'admin@premierpetlogistics.com',
      role: 'super-admin'
    });

    await admin.save();
    console.log('✅ Admin created successfully!');
    console.log('   Username: admin');
    console.log('   Password: admin123');
    console.log('   Database:', process.env.MONGODB_URI?.includes('mongodb+srv') ? 'Atlas' : 'Local');
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    process.exit();
  }
}

resetAdmin();