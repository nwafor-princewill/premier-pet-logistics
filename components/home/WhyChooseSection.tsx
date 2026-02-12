'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaGlobeAmericas, FaCertificate, FaClock, FaHeadset, FaAward } from 'react-icons/fa';

const WhyChooseSection = () => {
  const features = [
    {
      icon: FaGlobeAmericas,
      title: 'Global Reach',
      description: 'Seamless international and domestic pet relocations to over 150 countries worldwide.',
      color: 'bg-blue-500',
    },
    {
      icon: FaCertificate,
      title: 'Certified Experts',
      description: 'IPATA-certified professionals and animal care specialists handle your pet\'s journey.',
      color: 'bg-green-500',
    },
    {
      icon: FaShieldAlt,
      title: 'Safety First',
      description: 'Airline-approved crates, climate-controlled transport, and comprehensive insurance coverage.',
      color: 'bg-purple-500',
    },
    {
      icon: FaClock,
      title: 'On-Time Delivery',
      description: 'Reliable scheduling and timely delivery with estimated arrival time guarantees.',
      color: 'bg-orange-500',
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Round-the-clock customer service available any time of the day or night.',
      color: 'bg-pink-500',
    },
    {
      icon: FaAward,
      title: '20+ Years Experience',
      description: 'Two decades of excellence in pet logistics with thousands of happy reunions.',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Premier Pet Logistics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unmatched care, expertise, and commitment to making your pet's relocation safe, comfortable, and stress-free.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-white">Trusted & Certified</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <FaCertificate className="text-5xl mx-auto mb-4 text-yellow-300" />
              <p className="font-bold text-xl text-white mb-1">IPATA Certified</p>
              <p className="text-sm text-white/90">International Pet Transport</p>
            </div>
            <div>
              <FaShieldAlt className="text-5xl mx-auto mb-4 text-green-300" />
              <p className="font-bold text-xl text-white mb-1">Fully Insured</p>
              <p className="text-sm text-white/90">Comprehensive Coverage</p>
            </div>
            <div>
              <FaAward className="text-5xl mx-auto mb-4 text-blue-300" />
              <p className="font-bold text-xl text-white mb-1">Award Winning</p>
              <p className="text-sm text-white/90">Industry Recognition</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;