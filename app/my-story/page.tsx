'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { NewsletterCTA } from '@/components/home/NewsletterCTA';
import { fadeInUp, staggerChildren } from '@/lib/animations';
import { Heart, CheckCircle } from 'lucide-react';

export default function MyStoryPage() {
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
              <Badge variant="default">My Journey</Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6"
            >
              <span className="text-gradient">Overcoming</span> Chronic Fatigue
              <br />& Dysautonomia
            </motion.h1>

            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" fill="white" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-neutral-900">Katie</p>
                <p className="text-lg text-neutral-600">Health Enthusiast</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="space-y-8"
            >
              {/* Photo and Intro Text */}
              <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 items-start">
                {/* Photo - circular and smaller */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl border-4 border-white ring-2 ring-primary-200">
                    <Image
                      src="/kk-photo-tiedye.jpg"
                      alt="Katie in tie dye - looking healthy despite living with chronic fatigue"
                      fill
                      className="object-cover"
                      sizes="160px"
                      priority
                    />
                  </div>
                </div>

                {/* Intro Text */}
                <div className="flex-1 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
                  <p className="text-xl text-neutral-700 leading-relaxed">
                    Hi Everyone! I&apos;m Katie, don&apos;t let this picture fool you. I know things look quite peachy in the sun and tie dye. What
                    this picture doesn&apos;t show is the constant daily struggle with Chronic Fatigue &
                    Autonomic Nervous System Dysfunction. If you have landed here you can probably
                    relate to the common phrase,{' '}
                    <strong className="text-primary-600">&quot;Well you don&apos;t look sick&quot;</strong>.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  That&apos;s the thing with chronic mysterious illnesses—you don&apos;t fit the
                  traditional picture of &quot;looking sick&quot;. To the general public there&apos;s no outward
                  appearance, there&apos;s no tidy diagnosis, therefore it can&apos;t be that bad. But to you,
                  you are trapped in a prison of your body&apos;s own revolt.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold text-neutral-900 mb-8"
              >
                A Bit of Background
              </motion.h2>

              <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  To prove I&apos;m not a lightweight: I was a{' '}
                  <strong className="text-primary-600">Division I athlete</strong> in college, went
                  on to become a <strong className="text-primary-600">lawyer</strong>, and have a
                  career in <strong className="text-primary-600">finance</strong>. I&apos;m used to
                  high pressure situations and persevering at all costs (which may be part of the
                  problem, but more on that later).
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Reality */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold text-neutral-900 mb-8"
              >
                What Those Photos Don&apos;t Show
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-lg text-neutral-700 leading-relaxed mb-8">
                I was quite unwell when those photos were taken. Here&apos;s what they don&apos;t show:
              </motion.p>

              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  'Going from running 5 miles one day to being unable to walk 200 steps. This is not an exaggeration—I could not walk 200 steps without needing to sit down.',
                  'Having to go to the emergency room because I had broken out into a sweat, racing heart, and dizziness.',
                  'Having to find escalators to get out of the subway because I couldn\'t walk up a flight of stairs.',
                  'Having to carry around salt and emergency snacks to spare the embarrassment of potentially passing out in public.',
                  'Planning out food down to the minute, hoping to get from point A to B.',
                  'All the people telling me it was just stress and I needed to relax.',
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start bg-neutral-50 rounded-xl p-6">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✕</span>
                    </div>
                    <p className="text-neutral-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Turning Point */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold text-neutral-900 mb-8"
              >
                Finding Answers
              </motion.h2>

              <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  <strong className="text-primary-600">That is how sick I was.</strong> And the
                  keyword is <strong className="text-primary-600 text-2xl">WAS</strong>.
                </p>

                <p className="text-lg text-neutral-700 leading-relaxed">
                  I had been to many doctors and specialists and no one could figure out what was
                  wrong with me. I live in Boston—home to some of the best medical facilities in
                  the world—and no one could tell me what was going on.
                </p>

                <p className="text-lg text-neutral-700 leading-relaxed">
                  After reading hundreds of books and medical journals, I was able to piece the
                  puzzle together. I am here to share my story and everything I have learned to
                  help anyone who is suffering from Chronic Fatigue, ME, Long Covid, and
                  Unexplained Illnesses.{' '}
                  <strong className="text-primary-600">
                    Even if it helps just one person, even for one hour.
                  </strong>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recovery & Hope */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl p-12 shadow-2xl text-white"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-4xl font-bold mb-6">
                  Day by Day, Things Get Better
                </h2>

                <p className="text-xl leading-relaxed mb-8 text-white/90">
                  It&apos;s scary being unwell—you can feel so isolated. This is here to show you
                  that <strong>you are not alone</strong>.
                </p>

                <p className="text-2xl font-semibold italic">
                  With strength and perseverance,
                  <br />
                  Katie
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-12">
                <Button size="lg" variant="outline" asChild>
                  <a href="/start-here">Start Your Journey</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <NewsletterCTA />
    </main>
  );
}
