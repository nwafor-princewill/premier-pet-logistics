'use client';

import { motion } from 'framer-motion';
import { FaPlane, FaShip, FaTrain, FaTruck, FaMapMarkedAlt, FaCog } from 'react-icons/fa';
import Link from 'next/link';

const ServicesSection = () => {
  const services = [
    {
      icon: FaPlane,
      title: 'Air Freight',
      description: 'Fast and secure air transport for your pets with climate-controlled cabins and priority handling.',
      color: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: FaShip,
      title: 'Sea Cargo',
      description: 'Cost-effective ocean freight for international pet relocation with full documentation support.',
      color: 'from-cyan-500 to-cyan-600',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
    },
    {
      icon: FaTrain,
      title: 'Rail Transport',
      description: 'Reliable rail services for domestic pet shipping with comfortable and safe transit conditions.',
      color: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: FaTruck,
      title: 'Ground Shipping',
      description: 'Door-to-door ground transport with experienced pet handlers and real-time GPS tracking.',
      color: 'from-orange-500 to-orange-600',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      icon: FaMapMarkedAlt,
      title: 'Real-Time Tracking',
      description: 'Monitor your pet\'s journey 24/7 with live location updates and status notifications.',
      color: 'from-purple-500 to-purple-600',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      icon: FaCog,
      title: 'Custom Solutions',
      description: 'Tailored pet transport plans for special needs, exotic pets, and VIP relocation services.',
      color: 'from-pink-500 to-pink-600',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
    },
  ];

  return (
    <section className="pt-12 pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive pet logistics solutions tailored to your needs. We offer multiple transport methods to ensure your pet's safe and comfortable journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              <div className={`h-2 bg-linear-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className={`${service.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`${service.iconColor} text-3xl`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href="/services"
                  className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-block bg-linear-to-r from-primary-600 to-primary-700 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;