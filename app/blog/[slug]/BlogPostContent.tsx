'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, Share2, ArrowRight, Tag } from 'lucide-react';
import { blogCategories } from '@/lib/blog-data';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  category: string;
  image: string;
  tags: string[];
}

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const isLocalImage = (value: string) => value.startsWith('/');
const BLOG_AUTHOR_NAME = 'S. Sunayana';
const BLOG_AUTHOR_ROLE = 'Psychologist';

const renderContent = (content: string) => {
  return content.split('\n').map((line, index) => {
    line = line.trim();

    if (!line) return <div key={index} className="h-4" />;

    // Headers
    if (line.startsWith('## ')) {
      return (
        <h2 key={index} className="font-serif text-3xl font-bold text-gray-900 mt-12 mb-6">
          {line.substring(3)}
        </h2>
      );
    }
    if (line.startsWith('### ')) {
      return (
        <h3 key={index} className="font-serif text-2xl font-bold text-gray-900 mt-8 mb-4">
          {line.substring(4)}
        </h3>
      );
    }

    // Bold text
    if (line.startsWith('**') && line.endsWith('**')) {
      return (
        <p key={index} className="text-lg font-bold text-gray-900 mt-6 mb-3">
          {line.substring(2, line.length - 2)}
        </p>
      );
    }

    // List items
    if (line.startsWith('- ')) {
      return (
        <li key={index} className="text-lg text-gray-700 leading-relaxed ml-6 mb-2">
          {line.substring(2)}
        </li>
      );
    }

    // Numbered lists
    const numberedMatch = line.match(/^\d+\.\s(.+)$/);
    if (numberedMatch) {
      return (
        <li key={index} className="text-lg text-gray-700 leading-relaxed ml-6 mb-2 list-decimal">
          {numberedMatch[1]}
        </li>
      );
    }

    // Regular paragraphs
    return (
      <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
        {line}
      </p>
    );
  });
};

export default function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  const handleShare = async () => {
    const shareUrl = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: shareUrl,
        });
        return;
      }

      await navigator.clipboard.writeText(shareUrl);
      window.alert('Link copied to clipboard');
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        return;
      }
      window.alert('Unable to share this article right now.');
    }
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary-500 to-purple-600 pt-32 pb-16">
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-white/90 hover:text-white transition-colors group"
            >
              <span className="font-medium inline-flex items-center space-x-2">
                <span>&larr;</span>
                <span>Back to Blog</span>
              </span>
            </Link>

            {/* Category Badge */}
            <div>
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                {blogCategories.find(c => c.id === post.category)?.name}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center space-x-4 pt-4">
              <User className="h-12 w-12 text-white/80" />
              <div>
                <div className="text-lg font-semibold text-white">{BLOG_AUTHOR_NAME}</div>
                <div className="text-white/80">{BLOG_AUTHOR_ROLE}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image/Icon */}
      <section className="relative mt-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden bg-gradient-to-br from-primary-400 to-purple-400 rounded-3xl shadow-2xl h-96 flex items-center justify-center text-9xl"
          >
            {isLocalImage(post.image) ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            ) : (
              post.image
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            {/* Excerpt */}
            <p className="text-2xl text-gray-600 font-medium leading-relaxed mb-12 pb-8 border-b-2 border-gray-200">
              {post.excerpt}
            </p>

            {/* Main Content */}
            <div className="space-y-6">
              {renderContent(post.content)}
            </div>
          </motion.div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center flex-wrap gap-3">
                <Tag className="h-5 w-5 text-gray-400" />
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Found this helpful?</h3>
                <p className="text-gray-600">Share this article with someone who might benefit</p>
              </div>
              <button
                type="button"
                onClick={handleShare}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-primary-300 transition-all duration-200"
              >
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100"
          >
            <div className="flex items-start space-x-6">
              <User className="h-16 w-16 text-primary-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">About {BLOG_AUTHOR_NAME}</h3>
                <p className="text-primary-600 font-semibold mb-4">{BLOG_AUTHOR_ROLE}</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {BLOG_AUTHOR_NAME} is an experienced mental health professional at Saheeli Counselling,
                  dedicated to helping clients achieve lasting wellness and personal growth through
                  evidence-based therapeutic approaches.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                >
                  <span>Meet Our Team</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
                Related Articles
              </h2>
              <p className="text-xl text-gray-600">
                Continue exploring topics that matter to you
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -8 }}
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="h-full group cursor-pointer">
                      <div className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100">
                        <div className="relative overflow-hidden h-40 bg-gradient-to-br from-primary-400 to-purple-400 flex items-center justify-center text-5xl">
                          {isLocalImage(relatedPost.image) ? (
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                          ) : (
                            relatedPost.image
                          )}
                        </div>
                        <div className="p-6 space-y-3">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-purple-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-white/90">
              Our compassionate team is here to support your mental health journey.
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
                href="/blog"
                className="inline-flex items-center justify-center px-10 py-5 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-200"
              >
                Read More Articles
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
