'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Users,
  Video,
  MapPin,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { servicesData } from '@/lib/services-data';

type AppointmentFormData = {
  fullName: string;
  email: string;
  phone: string;
  serviceSlug: string;
  preferredDate: string;
  preferredTime: string;
  sessionType: 'in-person' | 'online';
  message: string;
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

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceSlug: '',
    preferredDate: '',
    preferredTime: '10:00',
    sessionType: 'online',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<AppointmentFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = () => {
    const nextErrors: Partial<AppointmentFormData> = {};

    if (!formData.fullName.trim()) nextErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) nextErrors.phone = 'Please enter your phone number';
    if (!formData.serviceSlug) nextErrors.serviceSlug = 'Please select a service';
    if (!formData.preferredDate) nextErrors.preferredDate = 'Please select a preferred date';
    if (!formData.preferredTime) nextErrors.preferredTime = 'Please select a preferred time';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const { error } = await supabase.from('appointments').insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service_slug: formData.serviceSlug,
          preferred_date: formData.preferredDate,
          preferred_time: formData.preferredTime,
          session_type: formData.sessionType,
          message: formData.message,
        },
      ]);

      if (error) {
        setSubmitError('Failed to book appointment. Please try again.');
        console.error('Supabase insert error:', error);
      } else {
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceSlug: '',
          preferredDate: '',
          preferredTime: '10:00',
          sessionType: 'online',
          message: '',
        });
      }
    } catch (err) {
      setSubmitError('An error occurred. Please try again later.');
      console.error('Submit error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof AppointmentFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value as any }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 90);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-16">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              <Calendar className="h-4 w-4" />
              <span>Schedule Your Session</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Book an
              <span className="block bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                Appointment
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose your preferred service, date, and time. Our team will confirm your appointment
              and send you all the details you need to get started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits of Booking */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Clock, title: 'Flexible Times', desc: 'Morning, afternoon, or evening sessions' },
              { icon: Users, title: 'Choose Format', desc: 'In-person or online sessions available' },
              { icon: CheckCircle, title: 'Quick Confirmation', desc: 'Get confirmed within 24 hours' },
            ].map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100"
          >
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-8">Schedule Your Appointment</h2>

            {isSubmitted && (
              <div className="mb-8 p-6 rounded-xl bg-green-50 border border-green-200 flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-800">Appointment request submitted successfully!</p>
                  <p className="text-sm text-green-700 mt-1">
                    Thank you for booking with us. We'll confirm your appointment within 24 hours via email.
                  </p>
                </div>
              </div>
            )}

            {submitError && (
              <div className="mb-8 p-6 rounded-xl bg-red-50 border border-red-200 flex items-start space-x-4">
                <AlertCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-800">Error</p>
                  <p className="text-sm text-red-700 mt-1">{submitError}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(event) => updateField('fullName', event.target.value)}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your full name"
                    />
                    {errors.fullName && <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(event) => updateField('email', event.target.value)}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(event) => updateField('phone', event.target.value)}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="+1 (000) 000-0000"
                    />
                    {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Service & Appointment Details */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Appointment Details</h3>

                <div>
                  <label htmlFor="serviceSlug" className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Your Service *
                  </label>
                  <select
                    id="serviceSlug"
                    value={formData.serviceSlug}
                    onChange={(event) => updateField('serviceSlug', event.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">-- Choose a service --</option>
                    {servicesData.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  {errors.serviceSlug && <p className="text-sm text-red-600 mt-1">{errors.serviceSlug}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(event) => updateField('preferredDate', event.target.value)}
                      min={getTodayDate()}
                      max={getMaxDate()}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    {errors.preferredDate && <p className="text-sm text-red-600 mt-1">{errors.preferredDate}</p>}
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <input
                      id="preferredTime"
                      type="time"
                      value={formData.preferredTime}
                      onChange={(event) => updateField('preferredTime', event.target.value)}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    {errors.preferredTime && <p className="text-sm text-red-600 mt-1">{errors.preferredTime}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Session Type *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sessionType"
                        value="online"
                        checked={formData.sessionType === 'online'}
                        onChange={(event) => updateField('sessionType', event.target.value)}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span className="ml-2 flex items-center space-x-2 text-gray-700">
                        <Video className="h-4 w-4" />
                        <span>Online</span>
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sessionType"
                        value="in-person"
                        checked={formData.sessionType === 'in-person'}
                        onChange={(event) => updateField('sessionType', event.target.value)}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span className="ml-2 flex items-center space-x-2 text-gray-700">
                        <MapPin className="h-4 w-4" />
                        <span>In-Person</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Optional Message */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Any specific concerns or topics? (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(event) => updateField('message', event.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                    placeholder="Tell us what you'd like to discuss in your session..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-primary-300 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? 'Booking...' : 'Book Appointment'}</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">Have Questions?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              If you'd prefer to discuss your needs before booking, reach out through our contact form or call us directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl border-2 border-primary-600 hover:bg-primary-50 transition-all duration-200"
              >
                <span>Contact Us</span>
              </Link>
              <a
                href="tel:+918008231699"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-primary-300 transition-all duration-200"
              >
                <Calendar className="h-5 w-5" />
                <span>Call Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
