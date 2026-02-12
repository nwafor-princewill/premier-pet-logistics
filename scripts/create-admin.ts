import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

async function createAdmin() {
  try {
    await connectDB();

    // Optional: delete existing admin first (to reset password)
    await Admin.deleteOne({ username: 'admin' });
    console.log('🧹 Removed existing admin (if any)');

    const admin = new Admin({
      username: 'admin',
      password: 'yourpassword123', // you can change this
      email: 'admin@premierpetlogistics.com',
      role: 'super-admin'
    });

    await admin.save();
    console.log('✅ Admin created successfully!');
    console.log('   Username: admin');
    console.log('   Password: yourpassword123');
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    process.exit();
  }
}

createAdmin();