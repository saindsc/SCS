'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft, Calendar, CheckCircle, Users, Target, Lightbulb, ArrowRight,
  Brain, Heart, Baby, Shield, Flower2, HeartPulse, SmilePlus, Sparkles
} from 'lucide-react';

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
      staggerChildren: 0.08,
    },
  },
};

interface ServiceDetailContentProps {
  service: {
    id: string;
    title: string;
    shortDescription: string;
    detailedDescription: string;
    color: string;
    iconName: string;
    howItWorks: string[];
    whoItsFor: string[];
    benefits: string[];
  };
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const Icon = iconMap[service.iconName] || Brain;

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className={`relative min-h-[60vh] flex items-center bg-gradient-to-br ${service.color} pt-32 pb-16`}>
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Back Button */}
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-white/90 hover:text-white transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Services</span>
            </Link>

            <div className="flex items-start space-x-6">
              {/* Icon */}
              <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-2xl">
                <Icon className="h-10 w-10 text-white" />
              </div>

              {/* Title & Description */}
              <div className="flex-1 space-y-4">
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight">
                  {service.title}
                </h1>
                <p className="text-2xl text-white/90">
                  {service.shortDescription}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/book-appointment"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 shadow-2xl hover:shadow-white/20 transition-all duration-200 group"
              >
                <Calendar className="h-5 w-5" />
                <span>Book This Service</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
              About This Service
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {service.detailedDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Lightbulb className="h-8 w-8 text-primary-600" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
                How It Works
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven process for effective treatment
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6 max-w-4xl mx-auto"
          >
            {service.howItWorks.map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-primary-300 transition-all duration-300"
              >
                {/* Step Number */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="text-white font-bold text-xl">{idx + 1}</span>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Users className="h-8 w-8 text-primary-600" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
                Who This Service Is For
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              This service may be right for you if you're experiencing:
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {service.whoItsFor.map((person, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-primary-300 transition-all duration-300"
              >
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{person}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Target className="h-8 w-8 text-primary-600" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
                Expected Benefits
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What you can expect to gain from this service
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {service.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-primary-600 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-purple-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Book a consultation with our experienced therapist to discuss your needs and create a personalized treatment plan.
            </p>

            <Link
              href="/book-appointment"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-100 shadow-2xl hover:shadow-white/30 transition-all duration-200 group"
            >
              <Calendar className="h-6 w-6" />
              <span>Book Your Appointment</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
