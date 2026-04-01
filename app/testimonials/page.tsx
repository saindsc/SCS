'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Star,
  Quote,
  Heart,
  Users,
  Calendar,
  ArrowRight,
  Shield,
  CheckCircle,
} from 'lucide-react';

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

const testimonials = [
  {
    id: 1,
    name: 'Riya S.',
    role: 'Software Engineer',
    service: 'Anxiety Management',
    rating: 5,
    quote:
      'I was constantly stressed and couldn\'t sleep at night. The anxiety was making me go crazy. When I came here, the sessions and practical tips gave me a completely new perspective. Now I feel very calm, my confidence is much better, and I can control my own thoughts properly.',
    improvement: 'Reduced panic episodes and better daily coping',
    months: '4 months',
    icon: Heart,
  },
  {
    id: 2,
    name: 'Arjun & Neha',
    role: 'Married Couple',
    service: 'Couples Therapy',
    rating: 5,
    quote:
      'Both of us were constantly arguing and not understanding each other at all. Every small thing was causing fights. When we came here, we finally learned how to properly listen to each other and understand what the other person is feeling. Now our relationship is really strong and we enjoy each other\'s company.',
    improvement: 'Healthier communication and emotional connection',
    months: '6 months',
    icon: Users,
  },
  {
    id: 3,
    name: 'Priya M.',
    role: 'Marketing Professional',
    service: 'Mental Health Counseling',
    rating: 5,
    quote:
      'For so many years I was carrying stress and I completely forgot about myself. It was only work and work every day. The burnout had become so bad that my health was getting worse. These sessions helped me understand that taking care of myself is actually very important. Now my life is properly balanced and I have gotten my confidence back.',
    improvement: 'Improved work-life balance and confidence',
    months: '3 months',
    icon: Star,
  },
];

const stats = [
  { label: 'Happy Clients', value: '1000+' },
  { label: 'Average Rating', value: '4.8/5' },
  { label: 'Success Stories', value: '96%' },
  { label: 'Years of Care', value: '8+' },
];

export default function TestimonialsPage() {
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
              <Quote className="h-4 w-4" />
              <span>Real Stories, Real Healing</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Client
              <span className="block bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from individuals and families who found support, healing, and growth through
              our compassionate mental health care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experiences That Inspire Hope
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every journey is unique. These stories reflect the care and progress our clients have experienced.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.article
                key={testimonial.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="h-full p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <testimonial.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">“{testimonial.quote}”</p>

                <div className="space-y-3 border-t border-gray-100 pt-5">
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>

                  <div className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full">
                    {testimonial.service}
                  </div>

                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">Outcome:</span> {testimonial.improvement}
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>Journey: {testimonial.months}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Note */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 bg-gradient-to-br from-primary-50 to-purple-50 rounded-3xl border border-primary-100 text-center"
          >
            <Shield className="h-10 w-10 text-primary-600 mx-auto mb-4" />
            <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">Confidentiality Matters</h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              To protect privacy, some names and identifying details are changed. Every testimonial reflects real therapeutic outcomes experienced by our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-purple-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Ready to Start Your Own Success Story?</h2>
            <p className="text-xl text-white/90">
              Let’s take the first step together toward healing, growth, and emotional well-being.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center space-x-2 px-10 py-5 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-100 shadow-2xl hover:shadow-white/20 transition-all duration-200 group"
              >
                <Calendar className="h-6 w-6" />
                <span>Book Appointment</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-10 py-5 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
