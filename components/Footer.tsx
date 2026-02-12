import Link from 'next/link';
import { FaPaw, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { MdLocalShipping, MdSecurity, MdSupportAgent } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-600 p-3 rounded-xl">
                <FaPaw className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Premier Pet Logistics</h3>
                <p className="text-sm text-gray-400">Safe. Reliable. Caring.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Your trusted partner in pet relocation. We handle every detail with expertise, compassion, and commitment to ensure your pet's safe journey worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-700 hover:bg-accent-500 p-3 rounded-full transition-all duration-300">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-accent-500 p-3 rounded-full transition-all duration-300">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-accent-500 p-3 rounded-full transition-all duration-300">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-accent-500 p-3 rounded-full transition-all duration-300">
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
              <MdLocalShipping className="text-accent-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-accent-400 transition">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-accent-400 transition">Our Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-accent-400 transition">About Us</Link></li>
              <li><Link href="/track" className="text-gray-400 hover:text-accent-400 transition">Track Shipment</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-accent-400 transition">Contact Us</Link></li>
              <li><Link href="/admin" className="text-gray-400 hover:text-accent-400 transition">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
              <MdSecurity className="text-accent-400" />
              Our Services
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent-400 mt-1">✈️</span>
                <span>International Pet Shipping</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-400 mt-1">🚢</span>
                <span>Sea Freight Transport</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-400 mt-1">🚂</span>
                <span>Rail Cargo Services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-400 mt-1">🚛</span>
                <span>Ground Shipping</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-400 mt-1">📦</span>
                <span>Custom Solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-400 mt-1">📍</span>
                <span>Real-Time Tracking</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
              <MdSupportAgent className="text-accent-400" />
              Contact Us
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent-400 mt-1 shrink-0" />
                <span>123 Pet Logistics Ave, Suite 500<br />Los Angeles, CA 90001, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-accent-400 shrink-0" />
                <a href="tel:+1-800-PET-SHIP" className="hover:text-accent-400 transition">+1 (800) PET-SHIP</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent-400 shrink-0" />
                <a href="mailto:info@premierpetlogistics.com" className="hover:text-accent-400 transition break-all">info@premierpetlogistics.com</a>
              </li>
            </ul>
            <div className="mt-6 bg-accent-500/20 border border-accent-400 rounded-lg p-4">
              <p className="text-sm font-semibold text-accent-400 mb-1">24/7 Support Available</p>
              <p className="text-xs text-gray-400">We're always here for your pet's journey</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {currentYear} Premier Pet Logistics. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-accent-400 transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-accent-400 transition">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-accent-400 transition">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;