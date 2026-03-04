'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle, Calendar,
  Brain, Heart, Users, Baby, Lightbulb, Shield, Flower2, HeartPulse, SmilePlus, Sparkles
} from 'lucide-react';
import { serviceCategories, getServicesByCategory } from '@/lib/services-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, Heart, Users, Baby, Lightbulb, Shield, Flower2, HeartPulse, SmilePlus, Sparkles,
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ServicesPage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-16">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              <CheckCircle className="h-4 w-4" />
              <span>Comprehensive Mental Health Services</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Services Tailored to
              <span className="block bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                Your Unique Needs
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From individual counseling to specialized support, we offer comprehensive mental health services 
              to help you navigate life's challenges and achieve lasting wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services by Category */}
      {serviceCategories.map((category, categoryIndex) => {
        const services = getServicesByCategory(category.id);

        return (
          <section
            key={category.id}
            className={`py-24 ${
              categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-gray-50 to-white'
            }`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {category.name}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
                <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full mx-auto" />
              </motion.div>

              {/* Service Cards */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
                className={`grid gap-8 ${
                  services.length === 2
                    ? 'md:grid-cols-2 max-w-5xl mx-auto'
                    : services.length === 3
                    ? 'md:grid-cols-3'
                    : 'md:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={fadeInUp}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <Link href={`/services/${service.slug}`}>
                      <div className="h-full p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer">
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                          {(() => { const Icon = iconMap[service.iconName] || Brain; return <Icon className="h-8 w-8 text-white" />; })()}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                          {service.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {service.shortDescription}
                        </p>

                        {/* Key Benefits (First 3) */}
                        <ul className="space-y-2 mb-6">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Learn More Link */}
                        <div className="flex items-center space-x-2 text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                          <span>Learn More</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Why Choose Our Services Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-purple-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Why Choose Saheeli Counselling?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Experience the difference of professional, compassionate care
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: 'Expert Therapists',
                description: 'Licensed professionals with extensive training and experience',
              },
              {
                title: 'Evidence-Based',
                description: 'Proven therapeutic approaches backed by research',
              },
              {
                title: 'Personalized Care',
                description: 'Treatment plans tailored to your unique needs',
              },
              {
                title: 'Confidential & Safe',
                description: 'Complete privacy in a judgment-free environment',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600">
              Take the first step towards better mental health. Book your appointment today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center space-x-2 px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-xl hover:shadow-primary-300 transition-all duration-200 group"
              >
                <Calendar className="h-6 w-6" />
                <span>Book Appointment</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 font-bold rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-200"
              >
                Have Questions? Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
