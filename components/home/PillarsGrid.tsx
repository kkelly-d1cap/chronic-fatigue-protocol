'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PillarIcon } from '@/components/icons/PillarIcons';
import { fadeInUp, staggerChildren } from '@/lib/animations';

interface Pillar {
  id: string;
  icon: 'diet' | 'supplements' | 'sleep' | 'detox' | 'brain';
  title: string;
  description: string;
  href: string;
}

const pillars: Pillar[] = [
  {
    id: 'diet',
    icon: 'diet',
    title: 'Diet',
    description: 'Nourish your cells with targeted nutrition to rebuild energy production',
    href: '/protocol/diet',
  },
  {
    id: 'supplements',
    icon: 'supplements',
    title: 'Supplements',
    description: 'Support mitochondrial function with evidence-based supplements',
    href: '/protocol/supplements',
  },
  {
    id: 'sleep',
    icon: 'sleep',
    title: 'Sleep',
    description: 'Optimize sleep quality to allow your brain and body to heal properly',
    href: '/protocol/sleep',
  },
  {
    id: 'detox',
    icon: 'detox',
    title: 'Detox',
    description: 'Reduce environmental burden and support natural detoxification',
    href: '/protocol/detox',
  },
  {
    id: 'brain',
    icon: 'brain',
    title: 'Brain Training',
    description: 'Heal your autonomic nervous system and break the cycle',
    href: '/protocol/brain',
  },
];

export function PillarsGrid() {
  return (
    <section className="py-24 bg-white">
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
            The 5 Pillars of Recovery
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            A comprehensive framework addressing both cellular energy production
            and nervous system healing
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link href={pillar.href}>
                <div
                  className="group relative bg-white border-2 border-neutral-200 rounded-2xl p-8
                             transition-all duration-300 hover:shadow-2xl hover:-translate-y-3
                             hover:border-transparent h-full cursor-pointer"
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-accent-500/5
                               rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <div
                      className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-500
                                 rounded-2xl flex items-center justify-center mx-auto mb-6
                                 shadow-indigo transition-all duration-300
                                 group-hover:scale-110 group-hover:rotate-6"
                    >
                      <PillarIcon type={pillar.icon} className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center">
                      {pillar.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-center text-sm">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
