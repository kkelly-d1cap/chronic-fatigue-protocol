'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { fadeInUp } from '@/lib/animations';
import { ArrowRight, Clock } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const posts: BlogPost[] = [
  {
    slug: 'understanding-mitochondrial-dysfunction',
    title: 'Understanding Mitochondrial Dysfunction in CFS',
    excerpt:
      'Learn why your cells aren\'t producing enough energy and what you can do about it.',
    date: 'Nov 10, 2024',
    readTime: '8 min read',
    category: 'Science',
  },
  {
    slug: 'best-supplements-for-chronic-fatigue',
    title: 'The 10 Best Supplements for Chronic Fatigue',
    excerpt:
      'Evidence-based supplements that support mitochondrial function and energy production.',
    date: 'Nov 5, 2024',
    readTime: '12 min read',
    category: 'Supplements',
  },
  {
    slug: 'sleep-optimization-guide',
    title: 'Complete Sleep Optimization Guide for CFS',
    excerpt:
      'Master the art of restorative sleep with these science-backed techniques.',
    date: 'Oct 28, 2024',
    readTime: '10 min read',
    category: 'Sleep',
  },
];

export function BlogPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4"
          >
            Latest from the Blog
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Evidence-based insights and practical tips for your recovery journey
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div
                  className="group bg-white rounded-2xl overflow-hidden shadow-md
                             transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
                             h-full flex flex-col"
                >
                  {/* Gradient placeholder image */}
                  <div
                    className="h-48 bg-gradient-to-br from-primary-600 to-accent-500
                               relative overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20
                                 group-hover:to-black/10 transition-all"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1
                                   rounded-full text-xs font-semibold text-primary-600"
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3
                      className="text-xl font-bold text-neutral-900 mb-3
                                 group-hover:text-primary-600 transition-colors"
                    >
                      {post.title}
                    </h3>

                    <p className="text-neutral-600 leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/blog">
            <Button variant="outline" size="lg">
              View All Articles
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
