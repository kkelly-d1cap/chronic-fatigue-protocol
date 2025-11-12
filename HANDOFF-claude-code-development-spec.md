# Chronic Fatigue Protocol - Development Handoff Package

## 🎯 Project Overview

Building a modern marketing website for Katie's Chronic Fatigue Protocol - a proven 5-pillar framework for recovering from CFS/ME. The site will establish credibility, educate visitors, and convert them into email subscribers.

**Target Audience:** People suffering from Chronic Fatigue Syndrome, looking for evidence-based recovery protocols.

**Primary Goal:** Capture emails through "Free Quick Start Guide" lead magnet.

---

## 📋 Git Repository Setup

### Step 1: Create New Repository

```bash
# Create project directory
mkdir chronic-fatigue-protocol
cd chronic-fatigue-protocol

# Initialize git
git init

# Create initial commit
git add .
git commit -m "Initial commit: Project setup"

# Connect to remote (GitHub/GitLab)
git remote add origin [YOUR-REPO-URL]
git branch -M main
git push -u origin main
```

### Recommended Repository Name
- `chronic-fatigue-protocol`
- `cfp-website`
- `energy-recovery-protocol`

---

## 🛠 Tech Stack (CONFIRMED)

### Core Framework
- **Next.js 14+** (App Router)
- **React 18+**
- **TypeScript**

### Styling
- **Tailwind CSS v4** (latest)
- **CSS Variables** for theming
- **Framer Motion** for animations (optional but recommended for Radiant-style smoothness)

### Content & Forms
- **Markdown/MDX** for blog posts
- **React Hook Form** for newsletter signup
- **Zod** for form validation

### Deployment
- **Vercel** (recommended)
- Environment variables for email service integration

### Future Integrations (Phase 2)
- Email service (ConvertKit, Mailchimp, or similar)
- Analytics (Plausible or Google Analytics)
- CMS (Sanity or Contentful) if blog grows significantly

---

## 🎨 Design System

### Color Palette

```typescript
// tailwind.config.ts colors
const colors = {
  primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',  // Main indigo
    600: '#4f46e5',  // Primary brand
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  accent: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',  // Main cyan
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },
  success: {
    500: '#10b981',  // Emerald for success states
    600: '#059669',
  },
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  }
}
```

### Gradients

```css
/* Primary gradient (buttons, icons) */
background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%);

/* Accent gradient (highlights) */
background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);

/* Combined gradient (hero elements) */
background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%);
```

### Typography

```typescript
// Font: Inter (Google Fonts)
fontFamily: {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
}

// Font sizes
fontSize: {
  'xs': '0.75rem',      // 12px
  'sm': '0.875rem',     // 14px
  'base': '1rem',       // 16px
  'lg': '1.125rem',     // 18px
  'xl': '1.25rem',      // 20px
  '2xl': '1.5rem',      // 24px
  '3xl': '1.875rem',    // 30px
  '4xl': '2.25rem',     // 36px
  '5xl': '3rem',        // 48px
  '6xl': '3.75rem',     // 60px
  '7xl': '4.5rem',      // 72px
}

// Font weights
fontWeight: {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
}
```

### Spacing & Sizing

```typescript
// Border radius
borderRadius: {
  'sm': '0.5rem',    // 8px
  'md': '0.75rem',   // 12px
  'lg': '1rem',      // 16px
  'xl': '1.25rem',   // 20px
  '2xl': '1.5rem',   // 24px
  'full': '9999px',
}

// Shadows
boxShadow: {
  'sm': '0 2px 8px rgba(0, 0, 0, 0.05)',
  'md': '0 4px 12px rgba(0, 0, 0, 0.08)',
  'lg': '0 8px 20px rgba(0, 0, 0, 0.1)',
  'xl': '0 20px 40px rgba(0, 0, 0, 0.12)',
  'indigo': '0 4px 15px rgba(79, 70, 229, 0.3)',
  'indigo-lg': '0 8px 25px rgba(79, 70, 229, 0.4)',
}
```

---

## 🏗 Project Structure

```
chronic-fatigue-protocol/
├── app/
│   ├── layout.tsx                 # Root layout with Inter font
│   ├── page.tsx                   # Homepage
│   ├── protocol/
│   │   ├── page.tsx              # Protocol overview
│   │   └── [pillar]/page.tsx     # Individual pillar pages
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Individual blog posts
│   ├── resources/page.tsx        # Resources page
│   └── api/
│       └── newsletter/route.ts   # Newsletter signup endpoint
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── VideoSection.tsx
│   │   ├── TrustBar.tsx
│   │   ├── PillarsGrid.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── BlogPreview.tsx
│   │   ├── NewsletterCTA.tsx
│   │   └── FAQ.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Badge.tsx
│   └── icons/
│       ├── BatteryLogo.tsx
│       └── PillarIcons.tsx       # Diet, Supplements, Sleep, Detox, Brain
├── lib/
│   ├── animations.ts             # Framer Motion variants
│   └── utils.ts                  # Helper functions
├── public/
│   ├── images/
│   └── fonts/
├── content/
│   └── blog/                     # MDX blog posts
├── styles/
│   └── globals.css
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎭 Component Specifications

### 1. Navigation Component

**File:** `components/layout/Navigation.tsx`

**Features:**
- Sticky positioning with backdrop blur
- Box shadow appears on scroll
- Modern slim battery logo (SVG)
- Logo text with gradient
- Responsive (mobile menu for <768px)
- CTA button with gradient

**Key Styles:**
```typescript
className="fixed top-0 z-50 w-full"
className="bg-white/80 backdrop-blur-md border-b border-gray-200"
// On scroll: add shadow-md
```

**Props:**
```typescript
interface NavigationProps {
  // No props needed initially
}
```

---

### 2. Battery Logo Component

**File:** `components/icons/BatteryLogo.tsx`

**Specifications:**
- Modern Slim proportion (1:2 ratio)
- SVG viewBox: "0 0 90 180"
- Gradient: indigo (#4f46e5) → cyan (#06b6d4)
- Three parts: outline, terminal, fill, energy wave
- Responsive sizing via className prop

**Component:**
```typescript
interface BatteryLogoProps {
  className?: string;
  variant?: 'gradient' | 'white' | 'dark';
}

// Default: gradient on light backgrounds
// White: for dark/gradient backgrounds
// Dark: rarely used
```

**Complete SVG (from mockup):**
```svg
<svg viewBox="0 0 90 180" fill="none">
  <defs>
    <linearGradient id="batteryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4f46e5"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
  </defs>
  <!-- Battery body -->
  <rect x="10" y="25" width="70" height="130" rx="10" 
        stroke="url(#batteryGrad)" stroke-width="5" fill="none"/>
  <!-- Terminal -->
  <rect x="30" y="15" width="30" height="10" rx="4" 
        fill="url(#batteryGrad)"/>
  <!-- Fill level -->
  <rect x="17" y="95" width="56" height="53" rx="5" 
        fill="url(#batteryGrad)" opacity="0.25"/>
  <!-- Energy wave -->
  <path d="M 25 60 Q 37 50 45 60 T 65 60" 
        stroke="url(#batteryGrad)" stroke-width="4" 
        fill="none" stroke-linecap="round"/>
</svg>
```

---

### 3. Pillar Icons Component

**File:** `components/icons/PillarIcons.tsx`

**Icons Needed:**
1. **Diet** - Shopping basket with food
2. **Supplements** - Capsule/pill grid
3. **Sleep** - Crescent moon
4. **Detox** - Water drops
5. **Brain** - Brain outline

**Style:**
- Medical line icons (stroke-based, not filled)
- White stroke on gradient background
- stroke-width: 2
- stroke-linecap: round
- stroke-linejoin: round

**Implementation:**
```typescript
interface PillarIconProps {
  type: 'diet' | 'supplements' | 'sleep' | 'detox' | 'brain';
  className?: string;
}

export function PillarIcon({ type, className }: PillarIconProps) {
  const icons = {
    diet: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    // ... other icons
  };
  return icons[type];
}
```

**Source:** Use Lucide Icons library
```bash
npm install lucide-react
```

---

### 4. Hero Section

**File:** `components/home/Hero.tsx`

**Layout:**
- Full-width section
- Gradient background with animated orbs
- Centered content (max-w-4xl)
- Badge → Headline → Description → CTA buttons

**Animations:**
- Staggered fade-in (badge, h1, p, buttons)
- Floating gradient orbs in background
- Using Framer Motion

**CTA Buttons:**
1. Primary: "Get Free Guide" (gradient)
2. Secondary: "Watch Katie's Story" (white with border)

**Code Structure:**
```typescript
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] right-[-100px] w-[400px] h-[400px] 
                        bg-gradient-to-br from-primary-600 to-accent-500 
                        rounded-full blur-3xl opacity-30 animate-float"/>
        {/* Second orb */}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <motion.div variants={staggerChildren}>
          <Badge />
          <Heading />
          <Description />
          <CTAButtons />
        </motion.div>
      </div>
    </section>
  );
}
```

---

### 5. Pillar Cards

**File:** `components/home/PillarsGrid.tsx`

**Grid:**
- 5 cards (responsive: 5 cols → 3 cols → 1 col)
- Equal height cards

**Card Hover Effects:**
- Lift up (translateY: -12px)
- Add shadow
- Icon scales and rotates slightly
- Border color fades out

**Card Structure:**
```typescript
interface Pillar {
  id: string;
  icon: 'diet' | 'supplements' | 'sleep' | 'detox' | 'brain';
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    id: 'diet',
    icon: 'diet',
    title: 'Diet',
    description: 'Nourish your cells with targeted nutrition to rebuild energy production',
  },
  // ... other pillars
];
```

**Card Component:**
```tsx
<div className="group relative bg-white border border-gray-200 rounded-2xl p-10 
                transition-all duration-400 hover:shadow-2xl hover:-translate-y-3 
                hover:border-transparent">
  {/* Gradient overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-accent-500/5 
                  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"/>
  
  {/* Icon with gradient background */}
  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-500 
                  rounded-2xl flex items-center justify-center mx-auto mb-6 
                  shadow-indigo transition-all duration-400
                  group-hover:scale-110 group-hover:rotate-6">
    <PillarIcon type={pillar.icon} className="w-10 h-10 stroke-white" />
  </div>
  
  <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
</div>
```

---

### 6. Newsletter CTA

**File:** `components/home/NewsletterCTA.tsx`

**Features:**
- Full-width gradient background
- Animated shimmer effect
- Email input + submit button
- Form validation with React Hook Form + Zod

**Form Handling:**
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Please enter a valid email'),
});

export function NewsletterCTA() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: { email: string }) => {
    // Call API route
    await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

  return (
    <section className="relative overflow-hidden 
                        bg-gradient-to-br from-primary-600 to-accent-500">
      {/* Shimmer animation */}
      <div className="absolute inset-0 animate-shimmer"/>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Form fields */}
        </form>
      </div>
    </section>
  );
}
```

---

## 🎬 Animations

### Scroll Reveal

```typescript
// lib/animations.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

### Usage with Framer Motion

```tsx
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/lib/animations';

<motion.div variants={staggerChildren}>
  <motion.div variants={fadeInUp}>
    <Badge />
  </motion.div>
  <motion.h1 variants={fadeInUp}>
    Headline
  </motion.h1>
</motion.div>
```

### Navigation Scroll Effect

```typescript
// Add shadow on scroll
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## 📝 Content

### Homepage Copy

**Hero:**
- Badge: "Proven Framework"
- H1: "Reclaim Your Energy from Chronic Fatigue"
- Description: "A 5-pillar protocol to rebuild your cells and heal your nervous system, backed by Katie's personal recovery journey from CFS."
- CTA1: "Get Free Guide"
- CTA2: "Watch Katie's Story"

**Trust Bar:**
- "Evidence-Based" / "Backed by research"
- "10,000+ Following" / "Growing community"
- "Proven Results" / "Real recoveries"

**5 Pillars:**
1. **Diet** - "Nourish your cells with targeted nutrition to rebuild energy production"
2. **Supplements** - "Support mitochondrial function with evidence-based supplements"
3. **Sleep** - "Optimize sleep quality to allow your brain and body to heal properly"
4. **Detox** - "Reduce environmental burden and support natural detoxification"
5. **Brain Training** - "Heal your autonomic nervous system and break the cycle"

**How It Works:**
- H2: "Why This Protocol Works"
- Subhead: "CFS requires addressing two core systems simultaneously"

**Feature 1: Mitochondrial Dysfunction**
"Your cells aren't producing enough energy. The protocol rebuilds mitochondrial function through targeted nutrition, supplements, and lifestyle changes that address cellular health at its root."

**Feature 2: Autonomic Nervous System**
"Your body is stuck in fight-or-flight mode. Brain retraining techniques help calm the stress response and restore balance to your autonomic nervous system."

**Newsletter CTA:**
- H2: "Get Your Free Quick Start Guide"
- Description: "Download Katie's 5-Pillar Quick Start Guide with actionable checklists and the exact products that helped her recover"

---

## 🔧 Implementation Checklist

### Phase 1: Setup & Core (Week 1-2)

- [ ] Initialize Next.js project with TypeScript
- [ ] Configure Tailwind CSS v4
- [ ] Set up project structure
- [ ] Install dependencies (Framer Motion, React Hook Form, Zod, Lucide Icons)
- [ ] Create color system in tailwind.config
- [ ] Set up Inter font in root layout
- [ ] Create Battery Logo component
- [ ] Create Pillar Icons (using Lucide)

### Phase 2: Layout Components (Week 2-3)

- [ ] Build Navigation component
  - [ ] Desktop navigation
  - [ ] Mobile menu
  - [ ] Scroll-based shadow
  - [ ] Backdrop blur effect
- [ ] Build Footer component
  - [ ] 4-column layout
  - [ ] Social links (if provided)
  - [ ] Legal links

### Phase 3: Homepage Sections (Week 3-4)

- [ ] Hero Section
  - [ ] Animated background orbs
  - [ ] Staggered content animations
  - [ ] CTA buttons
- [ ] Video Section
  - [ ] YouTube embed
  - [ ] Hover effect
- [ ] Trust Bar
  - [ ] 3-column grid
  - [ ] Icon boxes
- [ ] Pillars Grid
  - [ ] 5 cards with icons
  - [ ] Hover animations
  - [ ] Responsive layout
- [ ] How It Works
  - [ ] 2-column feature cards
  - [ ] Icon containers
- [ ] Blog Preview
  - [ ] 3-column grid
  - [ ] Card hover effects
  - [ ] Gradient image placeholders
- [ ] Newsletter CTA
  - [ ] Form with validation
  - [ ] Shimmer animation
  - [ ] API route setup
- [ ] FAQ Section
  - [ ] Accordion items
  - [ ] Hover effects

### Phase 4: Additional Pages (Week 5)

- [ ] Protocol overview page
- [ ] Individual pillar pages (5 pages)
- [ ] Blog listing page
- [ ] Blog post template
- [ ] Resources page

### Phase 5: Polish & Deploy (Week 6)

- [ ] Mobile responsiveness testing
- [ ] Performance optimization
- [ ] SEO metadata
- [ ] Deploy to Vercel
- [ ] Connect custom domain
- [ ] Set up email service integration

---

## 🚀 Quick Start Commands

```bash
# Create Next.js project
npx create-next-app@latest chronic-fatigue-protocol --typescript --tailwind --app

# Navigate to project
cd chronic-fatigue-protocol

# Install additional dependencies
npm install framer-motion react-hook-form @hookform/resolvers zod lucide-react

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel
```

---

## 📦 Package.json Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "react-hook-form": "^7.48.0",
    "@hookform/resolvers": "^3.3.0",
    "zod": "^3.22.0",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^4.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

---

## 🎨 Design Assets

All mockups and design decisions are available in these files:

1. **FINAL-homepage-production-ready.html** - Complete homepage mockup with all finalized design elements
2. **integrated-brand-design.html** - Logo variations and brand guidelines
3. **refined-battery-proportions.html** - Modern Slim battery logo specifications
4. **professional-icon-options.html** - Medical icon styles (Option 1 confirmed)

---

## ⚠️ Important Notes

### Content Strategy
- Homepage is complete and specified
- Protocol pages need detailed content from Katie
- Blog posts will be created ongoing
- FAQ can be expanded based on user questions

### Performance
- Optimize images (use Next.js Image component)
- Lazy load non-critical sections
- Use dynamic imports for heavy components
- Target Lighthouse score: 90+

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Focus states on interactive elements
- Color contrast ratios: WCAG AA compliant

### SEO
- Meta titles and descriptions
- Open Graph tags
- JSON-LD structured data
- XML sitemap
- robots.txt

---

## 📞 Questions for Katie (Before Starting)

1. **Email Service:** Which email platform? (ConvertKit, Mailchimp, etc.)
2. **Analytics:** Google Analytics or Plausible?
3. **Domain:** What domain will this be hosted on?
4. **YouTube:** What's the actual video ID for Katie's story?
5. **Content:** Do we have content ready for the 5 pillar pages?
6. **Blog:** How many initial blog posts are ready?
7. **Social Media:** Links for footer?

---

## 🎯 Success Metrics

**Technical:**
- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse Accessibility: 95+
- [ ] Mobile responsive: all breakpoints
- [ ] Cross-browser compatible: Chrome, Safari, Firefox, Edge

**Business:**
- [ ] Newsletter signup form functional
- [ ] Email delivery working
- [ ] Lead magnet downloadable
- [ ] Analytics tracking properly

---

## 📚 Additional Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Lucide Icons:** https://lucide.dev/
- **React Hook Form:** https://react-hook-form.com/

---

## ✅ Handoff Checklist

Before you start coding, confirm:

- [ ] Repository created and initialized
- [ ] All mockups reviewed
- [ ] Design system understood
- [ ] Component structure clear
- [ ] Content available
- [ ] Questions answered
- [ ] Email service chosen
- [ ] Domain ready

---

**Last Updated:** November 11, 2025
**Version:** 1.0 - Production Ready
**Designer:** Claude (Sonnet 4.5)
**Developer:** Claude Code Agent

Good luck with the build! 🚀
