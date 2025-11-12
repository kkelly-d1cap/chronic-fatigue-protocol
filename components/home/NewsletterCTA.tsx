'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { fadeInUp } from '@/lib/animations';
import { CheckCircle } from 'lucide-react';

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

type FormData = z.infer<typeof schema>;

export function NewsletterCTA() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Newsletter signup:', data);
      setSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Newsletter signup error:', error);
    }
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-accent-500 py-24"
    >
      {/* Shimmer effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s linear infinite',
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
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
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get Your Free Quick Start Guide
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/90 mb-10"
          >
            Download Katie&apos;s 5-Pillar Quick Start Guide with actionable checklists
            and the exact products that helped her recover
          </motion.p>

          <motion.div variants={fadeInUp}>
            {submitted ? (
              <div className="bg-white rounded-2xl p-8 flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6 text-success-500" />
                <p className="text-lg font-semibold text-neutral-900">
                  Success! Check your email for the guide.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      {...register('name')}
                      placeholder="Your name"
                      error={errors.name?.message}
                      disabled={isSubmitting}
                      className="h-14"
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      {...register('email')}
                      type="email"
                      placeholder="Your email"
                      error={errors.email?.message}
                      disabled={isSubmitting}
                      className="h-14"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="md:w-auto h-14"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Free Guide'}
                  </Button>
                </div>
                <p className="text-sm text-neutral-500 mt-4">
                  No spam. Unsubscribe anytime. Your privacy is protected.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
}
