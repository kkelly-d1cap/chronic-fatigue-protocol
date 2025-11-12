'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { fadeInUp, staggerChildren } from '@/lib/animations';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 pt-32 pb-24">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px]
                      bg-gradient-to-br from-primary-600 to-accent-500
                      rounded-full blur-3xl opacity-20 animate-float"
        />
        <div
          className="absolute bottom-[-150px] left-[-50px] w-[400px] h-[400px]
                      bg-gradient-to-br from-accent-500 to-primary-600
                      rounded-full blur-3xl opacity-20"
          style={{ animationDelay: '3s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
            <Badge variant="default">
              Proven Framework
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6"
          >
            Reclaim Your Energy from{' '}
            <span className="text-gradient">Chronic Fatigue</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-neutral-600 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            A 5-pillar protocol to rebuild your cells and heal your nervous system,
            backed by Katie&apos;s personal recovery journey from CFS.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="text-lg px-10">
              Get Free Guide
            </Button>
            <Button size="lg" variant="outline" className="text-lg gap-2">
              <Play className="w-5 h-5" />
              Watch Katie&apos;s Story
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 pt-12 border-t border-neutral-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-1">
                  Evidence-Based
                </p>
                <p className="text-neutral-600 text-sm">Backed by research</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-1">
                  10,000+ Following
                </p>
                <p className="text-neutral-600 text-sm">Growing community</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-1">
                  Proven Results
                </p>
                <p className="text-neutral-600 text-sm">Real recoveries</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
