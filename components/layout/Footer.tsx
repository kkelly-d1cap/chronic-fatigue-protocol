import Link from 'next/link';
import { BatteryLogo } from '@/components/icons/BatteryLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    protocol: [
      { label: 'Overview', href: '/protocol' },
      { label: 'Diet', href: '/protocol/diet' },
      { label: 'Supplements', href: '/protocol/supplements' },
      { label: 'Sleep', href: '/protocol/sleep' },
      { label: 'Detox', href: '/protocol/detox' },
      { label: 'Brain Training', href: '/protocol/brain' },
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Resources', href: '/resources' },
      { label: 'Free Guide', href: '#newsletter' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <BatteryLogo variant="white" className="w-8 h-16" />
              <span className="text-xl font-bold text-white">
                Chronic Fatigue Protocol
              </span>
            </Link>
            <p className="text-neutral-400 leading-relaxed mb-6">
              A proven 5-pillar framework to rebuild your cells and heal your nervous system.
              Backed by Katie&apos;s personal recovery journey from CFS/ME.
            </p>
          </div>

          {/* Protocol Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Protocol</h3>
            <ul className="space-y-3">
              {footerLinks.protocol.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          <p>
            &copy; {currentYear} Chronic Fatigue Protocol. All rights reserved.
          </p>
          <p className="mt-2">
            This information is for educational purposes only and is not intended as medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
