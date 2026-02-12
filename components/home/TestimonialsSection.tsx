'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useState } from 'react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'New York to London',
      pet: 'Golden Retriever - Max',
      image: '/testimonial4.png', // REPLACE WITH YOUR IMAGE
      rating: 5,
      text: 'Premier Pet Logistics made our international move seamless! They handled every detail with care and kept us updated throughout Max\'s journey. He arrived happy, healthy, and stress-free. Highly recommend for anyone relocating with pets!',
    },
    {
      name: 'David Chen',
      location: 'Los Angeles to Tokyo',
      pet: 'Persian Cat - Luna',
      image: '/testimonial3.png', // REPLACE WITH YOUR IMAGE
      rating: 5,
      text: 'I was nervous about flying Luna internationally, but Premier Pet Logistics team was professional and compassionate. They answered all my questions and ensured Luna\'s comfort at every step. Thank you for the peace of mind!',
    },
    {
      name: 'Emily Rodriguez',
      location: 'Chicago to Sydney',
      pet: 'French Bulldog - Charlie',
      image: '/testimonial2.png', // REPLACE WITH YOUR IMAGE
      rating: 5,
      text: 'From paperwork to safe delivery, Premier Pet Logistics exceeded expectations. Charlie arrived in perfect health and spirits. The real-time tracking feature was amazing! The team\'s dedication truly sets them apart.',
    },
    {
      name: 'Michael Thompson',
      location: 'Miami to Dubai',
      pet: 'Labrador - Bailey',
      image: '/testimonial1.png', // REPLACE WITH YOUR IMAGE
      rating: 5,
      text: 'Outstanding service! The team went above and beyond to ensure Bailey\'s safe journey. The 24/7 support was invaluable. We couldn\'t be happier with the experience. Premier Pet Logistics is simply the best!',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from pet parents who trusted us with their beloved companions.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-linear-to-br from-primary-50 to-white rounded-3xl shadow-xl p-8 md:p-12 relative"
          >
            <FaQuoteLeft className="text-primary-200 text-6xl absolute top-8 left-8 opacity-50" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-2xl" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonials[activeIndex].location}</p>
                  <p className="text-sm text-primary-600 font-semibold">
                    {testimonials[activeIndex].pet}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-primary-600 w-12 h-3'
                    : 'bg-gray-300 w-3 h-3 hover:bg-primary-400'
                } rounded-full`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-all"
            >
              ← Previous
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="bg-linear-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;