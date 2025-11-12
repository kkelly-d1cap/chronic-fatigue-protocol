'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface VideoSectionProps {
  videoId?: string; // YouTube video ID
}

export function VideoSection({ videoId = 'dQw4w9WgXcQ' }: VideoSectionProps) {
  return (
    <section className="py-24 bg-white">
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
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4"
          >
            Katie&apos;s Recovery Journey
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Watch how Katie went from bedridden to thriving using this exact protocol
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl
                       transition-all duration-300 hover:shadow-indigo-lg hover:scale-[1.02]
                       bg-gradient-to-br from-primary-600 to-accent-500 p-1"
          >
            <div className="relative pb-[56.25%] bg-neutral-900 rounded-xl overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Katie's Recovery Journey"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
