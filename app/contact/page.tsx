'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Calendar,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
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

const contactDetails = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (234) 567-890',
    subtitle: 'Mon - Sat during office hours',
    href: 'tel:+1234567890',
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@scspsychology.com',
    subtitle: 'We reply within 24 hours',
    href: 'mailto:info@scspsychology.com',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: '123 Wellness Street, Mental Health District',
    subtitle: 'City, State 12345',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM',
    subtitle: 'Sat: 10:00 AM - 4:00 PM',
    href: '#',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = () => {
    const nextErrors: Partial<ContactFormData> = {};

    if (!formData.fullName.trim()) nextErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) nextErrors.phone = 'Please enter your phone number';
    if (!formData.subject.trim()) nextErrors.subject = 'Please enter a subject';
    if (!formData.message.trim()) {
      nextErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 20) {
      nextErrors.message = 'Message should be at least 20 characters';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const { error } = await supabase.from('contact_messages').insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
      ]);

      if (error) {
        setSubmitError('Failed to send message. Please try again.');
        console.error('Supabase insert error:', error);
      } else {
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
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

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="overflow-hidden bg-white">
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
              <MessageSquare className="h-4 w-4" />
              <span>We’re Here to Help</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Contact
              <span className="block bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                Saheeli Counselling
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Reach out to ask a question, discuss your needs, or schedule your first consultation.
              Our team responds quickly and confidentially.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactDetails.map((detail) => (
              <motion.a
                key={detail.title}
                variants={fadeInUp}
                href={detail.href}
                target={detail.href.startsWith('http') ? '_blank' : undefined}
                rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-6 rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg mb-4">
                  <detail.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{detail.title}</h3>
                <p className="text-sm font-medium text-primary-700 mb-1">{detail.value}</p>
                <p className="text-sm text-gray-500">{detail.subtitle}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 bg-white rounded-3xl shadow-xl border border-gray-100"
            >
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Send a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill in your details and we’ll get back to you shortly.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800">Message sent successfully</p>
                    <p className="text-sm text-green-700">
                      Thanks for reaching out. Our team will contact you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-800">Error</p>
                    <p className="text-sm text-red-700">{submitError}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
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
                      Email Address
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
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
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

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(event) => updateField('subject', event.target.value)}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="How can we help?"
                    />
                    {errors.subject && <p className="text-sm text-red-600 mt-1">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(event) => updateField('message', event.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                    placeholder="Share a little about what support you're looking for..."
                  />
                  {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-primary-300 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-3">Need Immediate Support?</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you need urgent mental health support, please call us directly during office hours.
                  For emergencies, contact your local emergency services immediately.
                </p>

                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center space-x-2 text-primary-700 font-semibold hover:text-primary-800"
                >
                  <Phone className="h-5 w-5" />
                  <span>+1 (234) 567-890</span>
                </a>
              </div>

              <div className="p-8 bg-gradient-to-br from-primary-600 to-purple-700 rounded-3xl text-white shadow-xl">
                <h3 className="font-serif text-3xl font-bold mb-3">Prefer to Book Directly?</h3>
                <p className="text-white/90 mb-6">
                  Skip the wait and book your first session through our appointment page.
                </p>

                <Link
                  href="/book-appointment"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Appointment</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
