'use client';

import { motion } from 'framer-motion';
import { FaPlane, FaTruck, FaTrain, FaShip, FaCheckCircle, FaGlobe, FaClock, FaShieldAlt } from 'react-icons/fa';
import { MdLocalShipping, MdPets } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      icon: FaPlane,
      title: 'Air Freight Services',
      subtitle: 'Fast & Secure Sky Transport',
      description: 'Experience the fastest and most reliable pet relocation through our premium air freight services. We partner with major airlines worldwide to ensure your pet travels in climate-controlled, pressurized cargo holds with the highest safety standards.',
      image: '/service2.jpg',
      features: [
        'Climate-controlled cargo compartments',
        'IATA Live Animal Regulations certified',
        'Direct and connecting flight options',
        'Priority boarding and handling',
        'Real-time flight tracking',
        'Airport-to-airport or door-to-door delivery',
      ],
      stats: [
        { value: '150+', label: 'Countries Served' },
        { value: '24/7', label: 'Support' },
        { value: '100%', label: 'Safety Record' },
      ],
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-700',
      checkBg: 'bg-blue-100',
      checkIcon: 'text-blue-600',
      gradient: 'from-blue-500 to-blue-700',
      btnGradient: 'from-blue-600 to-blue-700',
    },
    {
      id: 2,
      icon: FaTruck,
      title: 'Ground Shipping',
      subtitle: 'Door-to-Door Comfort',
      description: 'Our professional ground transport services provide safe, comfortable door-to-door pet relocation across domestic and international routes. With temperature-controlled vehicles and experienced pet handlers, we ensure your pet\'s journey is stress-free.',
      image: '/service3.jpg',
      features: [
        'Direct door-to-door delivery service',
        'Temperature-controlled pet vehicles',
        'Professional certified pet handlers',
        'Regular comfort and rest breaks',
        'Live GPS tracking throughout journey',
        'Flexible scheduling to suit your needs',
      ],
      stats: [
        { value: '5000+', label: 'Safe Deliveries' },
        { value: '48hrs', label: 'Avg Delivery' },
        { value: '98%', label: 'On-Time Rate' },
      ],
      badgeBg: 'bg-orange-100',
      badgeText: 'text-orange-700',
      checkBg: 'bg-orange-100',
      checkIcon: 'text-orange-600',
      gradient: 'from-orange-500 to-orange-700',
      btnGradient: 'from-orange-600 to-orange-700',
    },
    {
      id: 3,
      icon: FaTrain,
      title: 'Rail Transport',
      subtitle: 'Smooth & Reliable Journey',
      description: 'Rail transport offers a comfortable, economical, and eco-friendly alternative for domestic and cross-border pet relocation. Our rail services provide spacious, pet-friendly compartments with regular monitoring to ensure your pet\'s comfort throughout the journey.',
      image: '/service4.jpg',
      features: [
        'Spacious pet-friendly compartments',
        'Scheduled departures with reliable timing',
        'Domestic and international rail routes',
        'Regular wellness check-ins during transit',
        'Cost-effective for medium distances',
        'Less stressful than long road trips',
      ],
      stats: [
        { value: '20+', label: 'Rail Routes' },
        { value: '2-5 Days', label: 'Transit Time' },
        { value: '95%', label: 'Comfort Rating' },
      ],
      badgeBg: 'bg-green-100',
      badgeText: 'text-green-700',
      checkBg: 'bg-green-100',
      checkIcon: 'text-green-600',
      gradient: 'from-green-500 to-green-700',
      btnGradient: 'from-green-600 to-green-700',
    },
    {
      id: 4,
      icon: FaShip,
      title: 'Sea Cargo Services',
      subtitle: 'International Ocean Freight',
      description: 'For international pet relocation, our sea cargo services provide a cost-effective and safe solution. We handle all documentation, customs clearance, and quarantine coordination to ensure smooth ocean transport to destinations worldwide.',
      image: '/service5.avif',
      features: [
        'Full container and shared shipping options',
        'Complete customs clearance assistance',
        'Port-to-port and door-to-door service',
        'Quarantine facility coordination',
        'Temperature and humidity-controlled containers',
        'Competitive pricing for international moves',
      ],
      stats: [
        { value: '100+', label: 'Ports Worldwide' },
        { value: '7-30 Days', label: 'Transit Range' },
        { value: '99%', label: 'Success Rate' },
      ],
      badgeBg: 'bg-cyan-100',
      badgeText: 'text-cyan-700',
      checkBg: 'bg-cyan-100',
      checkIcon: 'text-cyan-600',
      gradient: 'from-cyan-500 to-cyan-700',
      btnGradient: 'from-cyan-600 to-cyan-700',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 animate-float">
            <MdPets className="text-white text-8xl" />
          </div>
          <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
            <MdLocalShipping className="text-white text-9xl" />
          </div>
          <div className="absolute top-1/2 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
            <FaPlane className="text-white text-7xl" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/30"
            >
              <FaGlobe />
              <span>Comprehensive Pet Logistics Solutions</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Our Premium Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              From air to sea, rail to road - we offer comprehensive pet transportation solutions tailored to your needs. Every journey is handled with expertise, care, and commitment to your pet's safety and comfort.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { icon: FaShieldAlt, label: 'Fully Insured' },
                { icon: FaClock, label: '24/7 Support' },
                { icon: FaGlobe, label: 'Global Network' },
                { icon: FaCheckCircle, label: 'IPATA Certified' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <item.icon className="text-4xl mb-3 mx-auto text-accent-300" />
                  <p className="font-semibold text-white">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}
              >
                <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="grid grid-cols-3 gap-4">
                      {service.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-2xl font-bold text-white">{stat.value}</p>
                          <p className="text-xs text-white/80">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <div className={`inline-flex items-center gap-3 ${service.badgeBg} ${service.badgeText} px-4 py-2 rounded-full mb-6`}>
                  <service.icon className="text-xl" />
                  <span className="font-semibold text-sm">{service.subtitle}</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`${service.checkBg} p-2 rounded-lg mt-1 flex-shrink-0`}>
                        <FaCheckCircle className={`${service.checkIcon} text-lg`} />
                      </div>
                      <p className="text-gray-700">{feature}</p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-3 bg-gradient-to-r ${service.btnGradient} text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300`}
                >
                  Get Started
                  <span>→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine expertise, technology, and compassion to deliver unmatched pet logistics services worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaShieldAlt,
                title: 'Safety First',
                description: 'IPATA-certified handlers and airline-approved equipment ensure your pet\'s safety at every step.',
                color: 'bg-green-500',
              },
              {
                icon: FaGlobe,
                title: 'Global Network',
                description: 'Partnerships with airlines, shipping lines, and rail operators across 150+ countries.',
                color: 'bg-blue-500',
              },
              {
                icon: FaClock,
                title: 'Timely Delivery',
                description: 'Reliable scheduling and on-time delivery with real-time tracking and updates.',
                color: 'bg-orange-500',
              },
              {
                icon: MdPets,
                title: 'Pet Comfort',
                description: 'Climate-controlled transport, regular breaks, and stress-free handling protocols.',
                color: 'bg-purple-500',
              },
              {
                icon: FaCheckCircle,
                title: 'Documentation Support',
                description: 'Complete assistance with health certificates, permits, and customs clearance.',
                color: 'bg-pink-500',
              },
              {
                icon: MdLocalShipping,
                title: 'Flexible Options',
                description: 'Multiple transport methods to suit your timeline, budget, and pet\'s needs.',
                color: 'bg-indigo-500',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className={`${item.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Pet's Journey?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Contact us today for a free consultation and personalized quote for your pet's relocation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Get Free Quote
              </Link>
              <Link
                href="/track"
                className="bg-accent-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-accent-600 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Track Shipment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}