import { Hero } from '@/components/home/Hero';
import { VideoSection } from '@/components/home/VideoSection';
import { PillarsGrid } from '@/components/home/PillarsGrid';
import { HowItWorks } from '@/components/home/HowItWorks';
import { BlogPreview } from '@/components/home/BlogPreview';
import { NewsletterCTA } from '@/components/home/NewsletterCTA';
import { FAQ } from '@/components/home/FAQ';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <VideoSection />
      <PillarsGrid />
      <HowItWorks />
      <BlogPreview />
      <NewsletterCTA />
      <FAQ />
    </main>
  );
}
