'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How long does it take to see results?',
    answer:
      'Most people start noticing improvements within 2-4 weeks of following the protocol. However, full recovery typically takes 6-12 months depending on severity and consistency. Remember, CFS developed over time, and healing takes time too.',
  },
  {
    question: 'Is this protocol backed by science?',
    answer:
      'Yes! The protocol is based on peer-reviewed research on mitochondrial dysfunction, autonomic nervous system dysregulation, and neuroplasticity. Each pillar addresses specific biological mechanisms identified in CFS/ME research.',
  },
  {
    question: 'Do I need to follow all 5 pillars?',
    answer:
      'While you can start with one or two pillars, the protocol is most effective when all five are implemented together. They work synergistically - for example, sleep improvements enhance detox, while diet supports mitochondrial function.',
  },
  {
    question: 'Will my doctor approve of this protocol?',
    answer:
      'The protocol complements medical treatment and uses evidence-based approaches. We recommend discussing it with your healthcare provider, especially before starting new supplements. Many doctors are supportive once they understand the research basis.',
  },
  {
    question: 'Can I do this if I\'m severely affected?',
    answer:
      'Absolutely. The protocol is designed to be adapted to your current energy levels. Start with small, manageable changes and pace yourself. The Quick Start Guide includes modifications for different severity levels.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer:
      'The Quick Start Guide is completely free! If you later choose to purchase additional resources or coaching, they come with a 30-day satisfaction guarantee.',
  },
];

function FAQItem({ faq, index }: { faq: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-neutral-200 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between gap-4 text-left
                   hover:text-primary-600 transition-colors group"
      >
        <span className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-neutral-500 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-neutral-600 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
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
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Everything you need to know about the protocol
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
