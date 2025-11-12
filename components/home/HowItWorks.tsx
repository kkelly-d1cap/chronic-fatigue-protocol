'use client';

import { motion } from 'framer-motion';
import { Activity, Brain } from 'lucide-react';
import { fadeInUp, staggerChildren } from '@/lib/animations';

export function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4"
          >
            Why This Protocol Works
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            CFS requires addressing two core systems simultaneously
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Feature 1: Mitochondrial Dysfunction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mb-6">
              <Activity className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Mitochondrial Dysfunction
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Your cells aren&apos;t producing enough energy. The protocol rebuilds
              mitochondrial function through targeted nutrition, supplements, and lifestyle
              changes that address cellular health at its root.
            </p>
          </motion.div>

          {/* Feature 2: Autonomic Nervous System */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Autonomic Nervous System
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Your body is stuck in fight-or-flight mode. Brain retraining techniques help
              calm the stress response and restore balance to your autonomic nervous system.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
