import connectDB from '../lib/mongodb';
import Admin from '../models/Admin';
import bcrypt from 'bcryptjs';

async function checkAdmin() {
  try {
    await connectDB();

    const admin = await Admin.findOne({ username: 'admin' });
    if (!admin) {
      console.log('❌ No admin found with username: admin');
      process.exit();
    }

    console.log('✅ Admin found:');
    console.log('   Username:', admin.username);
    console.log('   Email:', admin.email);
    console.log('   Role:', admin.role);
    console.log('   Password hash:', admin.password.substring(0, 20) + '...');

    // Test password comparison
    const testPassword = 'yourpassword123';
    const isValid = await bcrypt.compare(testPassword, admin.password);
    console.log('   Password "yourpassword123" matches:', isValid);

    // If false, try with exact string (case, spaces)
    console.log('\n🔐 If password mismatch, try recreating admin with a simple password.');
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    process.exit();
  }
}

checkAdmin();