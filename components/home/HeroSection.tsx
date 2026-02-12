'use client';

import { motion } from 'framer-motion';
import { FaPaw, FaShippingFast, FaGlobe, FaCheckCircle } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative bg-linear-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* ---------- MANY MORE PAW PRINTS ---------- */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <FaPaw className="absolute top-10 left-[5%] text-primary-200 text-7xl animate-float" />
        <FaPaw className="absolute top-32 left-[15%] text-primary-300 text-5xl animate-float" style={{ animationDelay: '0.5s' }} />
        <MdPets className="absolute top-1/4 right-[10%] text-accent-200 text-8xl animate-float" style={{ animationDelay: '1.2s' }} />
        <FaPaw className="absolute bottom-1/3 left-[20%] text-primary-100 text-6xl animate-float" style={{ animationDelay: '0.8s' }} />
        <FaPaw className="absolute bottom-10 right-[5%] text-primary-200 text-7xl animate-float" style={{ animationDelay: '1.8s' }} />
        <MdPets className="absolute top-1/2 left-[80%] text-accent-100 text-6xl animate-float" style={{ animationDelay: '2.2s' }} />
        <FaPaw className="absolute bottom-20 left-[40%] text-primary-300 text-5xl animate-float" style={{ animationDelay: '0.3s' }} />
        <FaPaw className="absolute top-3/4 right-[25%] text-primary-200 text-7xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* 🟢 CHANGED: py-20 md:py-32 → pt-20 md:pt-32 pb-6 md:pb-10 */}
      <div className="container mx-auto px-4 pt-20 md:pt- pb-8 md:pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT – same as before */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <FaCheckCircle />
              <span>Trusted by 10,000+ Pet Families Worldwide</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Pet's Journey,
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-primary-600 to-accent-500">
                Our Priority
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Safe, reliable, and compassionate pet relocation services worldwide.
              With a deep understanding of pet transport, we strive to deliver the unparalleled service you and your pet deserve. As proud members of the International Pet and Animal Transportation 
              We handle every detail of your pet's journey with expertise and care, 
              ensuring a stress-free experience from departure to heartwarming reunion.
            </p>

            {/* FEATURE GRID – same as before */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                { icon: FaGlobe, text: 'Global Coverage' },
                { icon: FaShippingFast, text: 'Fast Delivery' },
                { icon: MdPets, text: 'Pet Safety First' },
                { icon: FaCheckCircle, text: '24/7 Support' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <feature.icon className="text-primary-600 text-xl" />
                  </div>
                  <span className="font-medium text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#tracking"
                className="bg-linear-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-semibold text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Track Your Pet Now
              </a>
              <a
                href="/services"
                className="bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold text-center hover:bg-primary-50 transition-all duration-300"
              >
                Explore Services
              </a>
            </motion.div>

            {/* STATS BAR – below buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="mt-12 flex flex-wrap items-center justify-start gap-8 pt-6 border-t border-gray-200"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaCheckCircle className="text-green-600 text-xl" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10,000+</p>
                  <p className="text-sm text-gray-600">Pets Relocated</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-accent-100 p-3 rounded-full">
                  <FaCheckCircle className="text-accent-600 text-xl" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-600">Safe Delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary-100 p-3 rounded-full">
                  <FaGlobe className="text-primary-600 text-xl" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">50+</p>
                  <p className="text-sm text-gray-600">Countries</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-pet.png"
                alt="Happy pet traveling"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;