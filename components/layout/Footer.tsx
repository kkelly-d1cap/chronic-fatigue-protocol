import Link from 'next/link';
import { BatteryLogo } from '@/components/icons/BatteryLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { label: 'Start Here', href: '/start-here' },
    { label: 'My Story', href: '/my-story' },
    { label: 'Protocol', href: '/protocol' },
    { label: 'Blog', href: '/blog' },
    { label: 'Resources', href: '/resources' },
  ];

  const legalLinks = [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ];

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="container mx-auto px-4 py-12">
        {/* Logo and Tagline */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
            <BatteryLogo className="w-6 h-12 transition-transform group-hover:scale-110" />
            <span className="text-lg font-bold text-gradient">
              Chronic Fatigue Protocol
            </span>
          </Link>
          <p className="text-sm text-neutral-600 max-w-2xl mx-auto">
            A proven 5-pillar framework to rebuild your cells and heal your nervous system.
          </p>
        </div>

        {/* Main Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 hover:text-primary-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-xs">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-500 hover:text-neutral-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright & Disclaimer */}
        <div className="text-center text-xs text-neutral-500 space-y-1">
          <p>&copy; {currentYear} Chronic Fatigue Protocol. All rights reserved.</p>
          <p>This information is for educational purposes only and is not intended as medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
