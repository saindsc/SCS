'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Heart,
  Brain,
  Users,
  Award,
  BookOpen,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  GraduationCap,
  Briefcase,
  Lightbulb,
  MessageCircle,
  Calendar,
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

const missionValues = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'We treat every client with empathy, respect, and genuine care for their wellbeing.',
    color: 'from-red-500 to-pink-600',
  },
  {
    icon: Brain,
    title: 'Evidence-Based Practice',
    description: 'Our methods are grounded in cutting-edge psychological research and proven techniques.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Shield,
    title: 'Confidentiality First',
    description: 'Your privacy and trust are paramount. Complete confidentiality in every session.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Zap,
    title: 'Positive Change',
    description: 'We empower clients to create lasting, meaningful improvements in their lives.',
    color: 'from-yellow-500 to-orange-600',
  },
];

const approach = [
  {
    title: 'Personalized Treatment',
    description: 'We create customized therapy plans tailored to your unique needs and goals.',
    icon: Lightbulb,
  },
  {
    title: 'Collaborative Process',
    description: 'You\'re a partner in your healing journey, not just a patient.',
    icon: Users,
  },
  {
    title: 'Evidence Based Methods',
    description: 'We use proven therapeutic modalities like CBT, DBT, and EMDR.',
    icon: BookOpen,
  },
  {
    title: 'Holistic Wellness',
    description: 'We address mental, emotional, and physical aspects of well-being.',
    icon: Heart,
  },
];

const credentials = [
  { 
    category: 'Education & Degrees', 
    items: [
      'Ph.D. in Psychology (Pursuing, 2023-Present)',
      'PGDM in Family & Marriage Counseling (2022-2023)',
      'PGDM in Early Childhood Intervention (2024-2025)',
      'M.A. in Psychology (2017-2019)'
    ] 
  },
  { 
    category: 'Clinical Certifications', 
    items: [
      'Cognitive Behavioral Therapy (CBT)',
      'Gestalt Therapy',
      'Anxiety Disorders',
      'Breaking Bad News Training',
      'Face Reading & Dream Analysis',
      'Advanced Counseling Skills'
    ] 
  },
  { 
    category: 'Professional Credentials & Leadership', 
    items: [
      'Registered Psychological Counselor, ART Bank',
      'General Secretary, Telangana Psychologists Association (2025-Present)',
      'Vice-President, TPA (2023-2025)',
      'Inspiring Women Psychologist Award (2025)',
      'Best Psychologist Award (2023)'
    ] 
  },
];

const timeline = [
  { year: '2015-2017', event: 'Completed M.A. in Psychology with distinction' },
  { year: '2017-2019', event: 'Sports Psychology specialist at KOOH Sports, Hyderabad' },
  { year: '2019-Present', event: 'Lead Psychologist at Fertility Center' },
  { year: '2022-2023', event: 'Advanced certifications in CBT, Gestalt Therapy, and Anxiety Disorders' },
  { year: '2023-Present', event: 'Pursuing Ph.D. in Psychology & Leadership roles in TPA' },
  { year: '2025', event: 'Awarded Inspiring Women Psychologist Award' },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              <Heart className="h-4 w-4" />
              <span>Our Story & Mission</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Dedicated to Your
              <span className="block bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                Mental Wellness Journey
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Saheeli Counselling is dedicated to providing specialized, compassionate, 
              evidence-based mental health care with expertise in fertility Counselling and family wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
                  Our Founding Story
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full" />
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Saheeli Counselling is founded on the vision of providing specialized mental health support 
                with deep expertise in fertility Counselling, family counseling, and wellness. Our approach 
                combines compassionate care with evidence-based therapeutic practices.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                With over 6 years of dedicated experience in reproductive psychology and mental health, 
                our founder brings extensive clinical training in CBT, Gestalt therapy, and specialized 
                anxiety management. She has worked extensively with individuals and couples navigating 
                fertility challenges, family dynamics, and life transitions.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Through careful assessment, evidence-based treatment, and collaborative partnership with 
                each client, we create meaningful pathways to wellness and personal growth.
              </p>

              <div className="space-y-3 pt-4">
                <h3 className="font-semibold text-gray-900">Our Promise to You:</h3>
                <ul className="space-y-2">
                  {['Professional expertise with genuine care', 'Confidential, judgment-free environment', 'Evidence-based treatment approaches', 'Your success is our success'].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right - Decorative */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-primary-400 to-purple-400 rounded-3xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-white/10 rounded-3xl" />
                <div className="relative space-y-6 text-white">
                  <div className="flex items-center space-x-4 p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Users className="h-8 w-8" />
                    <div>
                      <div className="text-3xl font-bold">1000+</div>
                      <div className="text-sm">Happy Clients</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Award className="h-8 w-8" />
                    <div>
                      <div className="text-3xl font-bold">8+</div>
                      <div className="text-sm">Years of Excellence</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Star className="h-8 w-8" />
                    <div>
                      <div className="text-3xl font-bold">4.8/5</div>
                      <div className="text-sm">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Core principles that guide every decision we make and every client we serve
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {missionValues.map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Therapeutic Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we create the conditions for real, lasting change
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            {approach.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-primary-300 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Our Founder Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl shadow-2xl overflow-hidden h-96">
                <Image
                  src="/images/SCS_pic.jpeg"
                  alt="S. Sunayana, Founder and Lead Psychologist"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </motion.div>

            {/* Right - About Founder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
                  About Our Founder
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full" />
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                S. Sunayana is a dedicated psychologist with specialized expertise in fertility Counselling 
                and reproductive mental health. With over 6 years of focused clinical experience in Fertility 
                Hospital, she has supported hundreds of individuals and couples through their fertility journeys, 
                anxiety management, and family transitions.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Her clinical approach blends evidence-based therapies—including CBT, Gestalt therapy, and 
                anxiety-focused interventions—with deep compassion for her clients. She holds a Master's degree 
                in Psychology and is pursuing her Ph.D. while maintaining an active role as General Secretary of 
                the Telangana Psychologists Association.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Her awards, including the 2025 Inspiring Women Psychologist Award, reflect her commitment to 
                advancing mental health care and supporting vulnerable populations. At Saheeli Counselling, she 
                brings this wealth of experience to create personalized, evidence-based care for every client.
              </p>

              <div className="space-y-3 pt-4">
                <h3 className="font-semibold text-gray-900">Areas of Specialization:</h3>
                <ul className="space-y-2">
                  {['Fertility counselling & reproductive mental health', 'Couples & family counseling', 'Anxiety disorders & stress management', 'Depression & life transitions', 'Individual & group therapy'].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trust through expertise and commitment to highest standards
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {credentials.map((group, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-primary-100 hover:border-primary-300 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                  <Briefcase className="h-6 w-6 text-primary-600" />
                  <span>{group.category}</span>
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our commitment to mental health excellence
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 to-purple-600 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="relative pl-8 md:pl-32"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 top-6 w-12 h-12 bg-white border-4 border-primary-600 rounded-full flex items-center justify-center shadow-lg hidden md:flex">
                    <div className="w-4 h-4 bg-primary-600 rounded-full" />
                  </div>

                  {/* Content Card */}
                  <div className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-primary-600 hover:shadow-xl transition-shadow">
                    <div className="font-serif text-3xl font-bold text-primary-600 mb-2">
                      {item.year}
                    </div>
                    <p className="text-lg text-gray-700">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
                Why Saheeli Counselling?
              </h2>
              <div className="space-y-4">
                {[
                  'Expert, compassionate therapists with extensive training',
                  'Personalized treatment plans tailored to your unique needs',
                  'Proven track record of client success and satisfaction',
                  'Multiple therapy modalities to suit different needs',
                  'Flexible scheduling and both in-person & online options',
                  'Insurance accepted to make care accessible',
                ].map((reason, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white text-lg">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="space-y-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all"
                >
                  <Heart className="h-12 w-12 text-red-300 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Client-Centered</h3>
                  <p className="text-white/80">Your needs are at the heart of everything we do</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all"
                >
                  <Brain className="h-12 w-12 text-blue-300 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Evidence-Based</h3>
                  <p className="text-white/80">We use the most effective, scientifically-proven methods</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all"
                >
                  <Shield className="h-12 w-12 text-green-300 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Professional</h3>
                  <p className="text-white/80">Fully licensed, trained, and committed to ethics</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-600">
              Take the first step towards better mental health with our compassionate team of professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center space-x-2 px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-xl hover:shadow-primary-300 transition-all duration-200 group"
              >
                <Calendar className="h-6 w-6" />
                <span>Book Your Appointment</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 font-bold rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-200"
              >
                <MessageCircle className="h-6 w-6 mr-2" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
