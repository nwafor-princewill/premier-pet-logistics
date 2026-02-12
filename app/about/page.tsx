'use client';

import { motion } from 'framer-motion';
import { FaGlobe, FaMapMarkedAlt, FaClock, FaTruck, FaHeart, FaShieldAlt, FaAward, FaUsers } from 'react-icons/fa';
import { MdPets, MdVerified } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 animate-float">
            <MdPets className="text-white text-9xl" />
          </div>
          <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '1.5s' }}>
            <FaHeart className="text-white text-8xl" />
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
              <FaHeart />
              <span>Caring for Pets Since 2004</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Dedicated to making every pet's journey safe, comfortable, and stress-free. 
              We're more than just a logistics company – we're your partner in pet relocation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About The Company Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/with-pet.png"
                  alt="Happy pet owner with pet"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-primary-100 p-3 rounded-full">
                        <FaAward className="text-primary-600 text-2xl" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary-900">20+ Years</p>
                        <p className="text-sm text-gray-600">of Excellence</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <MdVerified className="text-green-600" />
                      <span className="font-semibold">IPATA Certified Members</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <MdPets />
                <span>About The Company</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Trusted Partner in Pet Relocation
              </h2>
              
              <h3 className="text-2xl font-semibold text-primary-600 mb-6">
                Expertise, Compassion, and Commitment to Your Pet's Journey
              </h3>

              <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
                <p>
                  At <span className="font-bold text-primary-900">Premier Pet Logistics</span>, we know that pets are cherished family members, and their travel experience matters as much as yours. Established in 2004, we have guided thousands of families through the intricate pet relocation process, from initial planning to heartwarming reunions in their new homes.
                </p>
                <p>
                  With a deep understanding of pet transport, we strive to deliver the unparalleled service you and your pet deserve. As proud members of the International Pet and Animal Transportation Association (IPATA), we're on a bold mission to reimagine how pets move around the world.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: FaGlobe, text: 'Worldwide Services' },
                  { icon: FaMapMarkedAlt, text: 'Local Service' },
                  { icon: FaTruck, text: 'Tracking Moving' },
                  { icon: FaClock, text: 'On-Time Delivery' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl hover:bg-primary-50 transition-colors duration-300 group"
                  >
                    <div className="bg-primary-100 p-3 rounded-lg group-hover:bg-primary-600 transition-colors duration-300">
                      <item.icon className="text-primary-600 text-xl group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-semibold text-gray-900">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Driven by passion, guided by expertise, committed to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaHeart className="text-primary-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide safe, reliable, and compassionate pet relocation services that reunite families with their beloved companions. We are committed to handling every pet with the same care and attention we would give our own, ensuring stress-free journeys and happy arrivals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-white"
            >
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaAward className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To be the world's most trusted pet logistics partner, setting the industry standard for excellence in pet transportation. We envision a future where every pet's journey is seamless, every family reunion is joyful, and every relocation experience exceeds expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaShieldAlt,
                title: 'Safety First',
                description: 'Your pet\'s safety is our top priority in every decision we make.',
                color: 'bg-green-500',
              },
              {
                icon: FaHeart,
                title: 'Compassion',
                description: 'We treat every pet with love, care, and understanding.',
                color: 'bg-red-500',
              },
              {
                icon: MdVerified,
                title: 'Integrity',
                description: 'Honest, transparent service you can trust completely.',
                color: 'bg-blue-500',
              },
              {
                icon: FaAward,
                title: 'Excellence',
                description: 'We strive for perfection in every aspect of our service.',
                color: 'bg-purple-500',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center"
              >
                <div className={`${value.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white text-4xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: '10,000+', label: 'Happy Pets Relocated' },
              { value: '150+', label: 'Countries Served' },
              { value: '20+', label: 'Years of Experience' },
              { value: '100%', label: 'Customer Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg text-white/90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Families Trust Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              More than 20 years of expertise in pet relocation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MdVerified,
                title: 'IPATA Certified',
                description: 'As proud members of the International Pet and Animal Transportation Association, we adhere to the highest industry standards and best practices.',
              },
              {
                icon: FaUsers,
                title: 'Expert Team',
                description: 'Our certified pet handlers and logistics experts have decades of combined experience in safe pet transportation worldwide.',
              },
              {
                icon: FaGlobe,
                title: 'Global Network',
                description: 'Partnerships with airlines, customs officials, and veterinary professionals in over 150 countries ensure smooth relocations.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="text-primary-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-500 via-accent-600 to-orange-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Ready to Start Your Pet's Journey?
            </h2>
            <p className="text-xl md:text-2xl text-white mb-10 drop-shadow-md">
              Join thousands of happy families who trusted us with their pet's relocation. 
              Let's make your pet's journey safe, comfortable, and stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-accent-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-3"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="bg-primary-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-700 hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-3"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}