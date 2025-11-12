'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { NewsletterCTA } from '@/components/home/NewsletterCTA';
import { fadeInUp, staggerChildren } from '@/lib/animations';
import { CheckCircle, Heart, Brain, Activity, Moon, Droplets } from 'lucide-react';

export default function StartHerePage() {
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
              <Badge variant="default">Your Path to Recovery Starts Here</Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6"
            >
              What is the{' '}
              <span className="text-gradient">Chronic Fatigue Protocol</span>?
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-neutral-600 leading-relaxed mb-8"
            >
              The Chronic Fatigue Protocol (CFP) is a proven step-by-step methodology that
              helps people with chronic fatigue, and other unexplained illnesses, regain their
              vitality through diet, supplementation, sleep, detoxification, and brain training.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What is CFP */}
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
              <motion.div variants={fadeInUp} className="prose prose-lg max-w-none">
                <p className="text-xl text-neutral-700 leading-relaxed mb-6">
                  The CFP is a system with principles to rebuild your cellular energy and heal
                  your nervous system. The approach will help you regain your energy so you can
                  reclaim your life. Whether you are officially suffering from Chronic Fatigue
                  Syndrome, Long Covid, an unexplained illness, or are simply burned out—these
                  principles will get you back up and running.
                </p>

                <p className="text-xl text-neutral-700 leading-relaxed mb-6">
                  You landed here because you are frustrated and scared. The goal is to no longer
                  have to give up many of the things you love, getting through the day is a
                  struggle, and you don&apos;t want to rely on others for support. You have been unwell
                  for a while and are scared you are never going to start to feel better.{' '}
                  <strong className="text-primary-600">We will change that.</strong>
                </p>

                <p className="text-xl text-neutral-700 leading-relaxed">
                  CFP gives you the tools and information you need to start to feel better.
                  However, this is not a quick fix approach because there is no quick fix—but
                  there is a path to healing. The CFP is a roadmap so you can make progress
                  step-by-step. Little steps each day result in large progress over time. These
                  small incremental steps will have you making huge progress in terms of your
                  energy and quality of life.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is CFS */}
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
                className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8"
              >
                What Is Chronic Fatigue Syndrome?
              </motion.h2>

              <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Chronic fatigue syndrome (ME/CFS) is a complex and debilitating disease of
                  unknown etiology. ME/CFS is characterized by persistent or relapsing unexplained
                  fatigue of at least 6-months duration that is not alleviated by rest and results
                  in a substantial reduction in previous levels of occupational, educational,
                  social, and personal activities. In ME/CFS patients, fatigue is just one of
                  multiple incapacitating symptoms that include cognitive impairment,
                  post-exertional malaise, unrefreshing sleep, headaches, muscle aches, joint
                  pain, sore throats, lymphadenopathy, hypersensitivity to noise, light, or
                  certain food items, and autonomic disturbances. The Institute of Medicine
                  proposed a new definition for ME/CFS and a new name: &quot;systemic exertion
                  intolerance disease&quot; (SEID).
                </p>
              </motion.div>

              {/* Symptoms */}
              <motion.h3
                variants={fadeInUp}
                className="text-3xl font-bold text-neutral-900 mb-6"
              >
                Common Symptoms
              </motion.h3>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  {
                    icon: Activity,
                    title: 'Fatigue',
                    description: 'Persistent fatigue not relieved by rest',
                  },
                  {
                    icon: Heart,
                    title: 'Post-Exertional Malaise',
                    description:
                      'Crash 12-72 hours after physical, emotional, or mental exertion (hallmark symptom)',
                  },
                  {
                    icon: Moon,
                    title: 'Sleep Issues',
                    description:
                      'Unrefreshing, disturbed sleep, difficulty falling asleep or staying asleep',
                  },
                  {
                    icon: Brain,
                    title: 'Cognitive Impairment',
                    description: 'Brain fog, difficulty concentrating, memory problems',
                  },
                  {
                    icon: Activity,
                    title: 'Autonomic Dysfunction',
                    description:
                      'POTS, dizziness, lightheaded, extreme pallor, palpitations',
                  },
                  {
                    icon: Droplets,
                    title: 'Immune Problems',
                    description:
                      'Recurrent flu, sore throat, sensitive to food and odors or chemicals',
                  },
                ].map((symptom, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border border-neutral-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <symptom.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 mb-2">{symptom.title}</h4>
                        <p className="text-sm text-neutral-600">{symptom.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Healing Approach */}
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
                className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 text-center"
              >
                The Healing Approach
              </motion.h2>

              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 mb-12">
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  This approach takes two main problems into consideration and proposes a
                  solution. The first is that there is a{' '}
                  <strong className="text-primary-600">Mitochondrial energy production problem</strong>.
                  The second is dysfunction with the{' '}
                  <strong className="text-primary-600">Autonomic Nervous System</strong>. These
                  problems share the root of inflammation.
                </p>

                <p className="text-lg text-neutral-700 leading-relaxed">
                  The root cause dysfunctions are addressed to heal the body and regain energy and
                  your life back. The Chronic Fatigue Protocol uses{' '}
                  <strong className="text-primary-600">Five pillars</strong> to support healing to
                  tackle inflammation, mitochondrial energy, and the autonomic nervous system.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Jump on Board */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
              >
                Jump on Board
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-neutral-700 leading-relaxed mb-8"
              >
                Our goal is to provide you with enough information and tools that give you some
                optimism. Optimism that you can get your life back and you do not have to accept
                the way you feel as finite. The protocol is going to take work but you can get
                your life back.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="#newsletter">Get Free Guide</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/protocol">View the Protocol</a>
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
