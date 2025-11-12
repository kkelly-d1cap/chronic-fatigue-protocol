'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerChildren } from '@/lib/animations';
import { Book, Podcast, FileText, Video, ExternalLink } from 'lucide-react';

interface Resource {
  title: string;
  author: string;
  description: string;
  link: string;
  category: 'book' | 'podcast' | 'article' | 'video';
  tags?: string[];
}

const resources: Resource[] = [
  // Books
  {
    title: 'The Autoimmune Solution',
    author: 'Amy Myers, MD',
    description: 'Comprehensive guide to preventing and reversing the full spectrum of inflammatory symptoms and diseases.',
    link: 'https://amzn.to/example',
    category: 'book',
    tags: ['Autoimmune', 'Diet', 'Inflammation'],
  },
  {
    title: 'Why We Sleep',
    author: 'Matthew Walker, PhD',
    description: 'Unlocking the power of sleep and dreams - essential reading for understanding sleep\'s role in recovery.',
    link: 'https://amzn.to/example',
    category: 'book',
    tags: ['Sleep', 'Recovery', 'Science'],
  },
  {
    title: 'The Body Keeps the Score',
    author: 'Bessel van der Kolk',
    description: 'Brain, mind, and body in the healing of trauma - crucial for understanding the nervous system connection.',
    link: 'https://amzn.to/example',
    category: 'book',
    tags: ['Trauma', 'Nervous System', 'Healing'],
  },
  {
    title: 'Brain Over Binge',
    author: 'Kathryn Hansen',
    description: 'Understanding the brain\'s role in behavior patterns and how to retrain it.',
    link: 'https://amzn.to/example',
    category: 'book',
    tags: ['Brain Training', 'Recovery', 'Mental Health'],
  },

  // Podcasts
  {
    title: 'The Energy Blueprint Podcast',
    author: 'Ari Whitten',
    description: 'Science-based strategies to overcome fatigue and optimize energy levels.',
    link: 'https://example.com',
    category: 'podcast',
    tags: ['Energy', 'Science', 'Recovery'],
  },
  {
    title: 'The Human Upgrade',
    author: 'Dave Asprey',
    description: 'Biohacking, health optimization, and strategies for peak performance.',
    link: 'https://example.com',
    category: 'podcast',
    tags: ['Biohacking', 'Health', 'Optimization'],
  },
  {
    title: 'Heal Thy Self',
    author: 'Dr. Mindy Pelz',
    description: 'Fasting, detox, and natural healing approaches for chronic illness.',
    link: 'https://example.com',
    category: 'podcast',
    tags: ['Fasting', 'Detox', 'Natural Healing'],
  },

  // Articles
  {
    title: 'Mitochondrial Dysfunction in CFS',
    author: 'Various Researchers',
    description: 'Peer-reviewed research on the role of mitochondria in chronic fatigue syndrome.',
    link: 'https://example.com',
    category: 'article',
    tags: ['Research', 'Mitochondria', 'Science'],
  },
  {
    title: 'The Vagus Nerve and Autonomic Dysfunction',
    author: 'Medical Journal',
    description: 'How vagus nerve dysfunction contributes to chronic fatigue and recovery strategies.',
    link: 'https://example.com',
    category: 'article',
    tags: ['Vagus Nerve', 'ANS', 'Recovery'],
  },

  // Videos
  {
    title: 'Understanding CFS/ME',
    author: 'Stanford Medicine',
    description: 'Educational video series on the latest research in chronic fatigue syndrome.',
    link: 'https://youtube.com/example',
    category: 'video',
    tags: ['Education', 'Research', 'Medical'],
  },
];

const categoryInfo = {
  book: {
    icon: Book,
    label: 'Books',
    color: 'from-primary-600 to-primary-800',
  },
  podcast: {
    icon: Podcast,
    label: 'Podcasts',
    color: 'from-accent-500 to-accent-600',
  },
  article: {
    icon: FileText,
    label: 'Articles',
    color: 'from-success-500 to-success-600',
  },
  video: {
    icon: Video,
    label: 'Videos',
    color: 'from-primary-600 to-accent-500',
  },
};

export default function ResourcesPage() {
  const categories = ['book', 'podcast', 'article', 'video'] as const;

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
              <Badge variant="default">Recommended Resources</Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6"
            >
              Resources for Your{' '}
              <span className="text-gradient">Recovery Journey</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto"
            >
              Curated books, podcasts, articles, and videos that have been instrumental
              in understanding and recovering from chronic fatigue. Each resource has been
              personally reviewed and recommended.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Resources by Category */}
      {categories.map((category) => {
        const categoryResources = resources.filter((r) => r.category === category);
        const { icon: Icon, label, color } = categoryInfo[category];

        return (
          <section key={category} className="py-16 bg-white odd:bg-gradient-to-br odd:from-slate-50 odd:to-slate-100">
            <div className="container mx-auto px-4">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerChildren}
              >
                {/* Category Header */}
                <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-12">
                  <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                    {label}
                  </h2>
                </motion.div>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryResources.map((resource, index) => (
                    <motion.div
                      key={resource.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <div
                        className="group bg-white border-2 border-neutral-200 rounded-2xl p-6
                                   transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                                   hover:border-transparent h-full flex flex-col"
                      >
                        {/* Title & Author */}
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-sm text-neutral-600 font-medium">
                            {resource.author}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-neutral-600 leading-relaxed mb-4 flex-1">
                          {resource.description}
                        </p>

                        {/* Tags */}
                        {resource.tags && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {resource.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Link */}
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary-600 font-semibold
                                     hover:gap-3 transition-all"
                        >
                          View Resource
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-accent-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Start Your Recovery?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/90 mb-8"
            >
              These resources are a great starting point. Get the complete protocol
              with step-by-step guidance in our free guide.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button size="lg" variant="outline" className="bg-white text-primary-600 hover:bg-white/90" asChild>
                <a href="#newsletter">Get Free Guide</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
