# Chronic Fatigue Protocol Website

A modern Next.js website for Katie's Chronic Fatigue Protocol - a proven 5-pillar framework for recovering from CFS/ME.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Hook Form + Zod** - Form validation
- **Lucide Icons** - Icon library

## 🎨 Design System

- **Colors:** Indigo (#4f46e5) + Cyan (#06b6d4) gradient system
- **Logo:** Modern Slim Battery (1:2 ratio)
- **Typography:** Inter font family
- **Animations:** Radiant-style (smooth, 60fps)

## 📄 Pages

- `/` - Homepage with hero, pillars, newsletter CTA, FAQ
- `/start-here` - Comprehensive overview of the protocol
- `/my-story` - Katie's personal recovery journey
- `/protocol` - Protocol overview (coming soon)
- `/blog` - Blog listing (coming soon)
- `/resources` - Resources page (coming soon)

## 🚢 Deploying to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub:
   ```bash
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your GitHub repository

5. Vercel will auto-detect Next.js settings

6. Click "Deploy"

7. Your site will be live in ~2 minutes! 🎉

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## 🔧 Environment Variables

If you need to add environment variables (e.g., for newsletter API):

1. Create `.env.local` for local development
2. Add variables in Vercel Dashboard → Settings → Environment Variables

Example:
```env
NEXT_PUBLIC_NEWSLETTER_API=your_api_key_here
```

## 📊 Build Stats

- Homepage: 174 kB First Load JS
- Start Here: 167 kB
- My Story: 166 kB
- Lighthouse Performance: 90+
- All pages statically pre-rendered

## 🎯 What's Built

### Phase 1: Foundation ✅
- Next.js setup with TypeScript
- Tailwind CSS design system
- Battery Logo component
- Navigation with scroll effects
- Footer (minimalist design)
- UI Components (Button, Card, Input, Badge)

### Phase 2: Homepage ✅
- Hero section with animations
- Video section (YouTube embed)
- 5 Pillars grid with hover effects
- How It Works section
- Blog preview
- Newsletter CTA with validation
- FAQ accordion

### Phase 3: Core Pages ✅
- Start Here page
- My Story page

### Coming Soon
- Protocol overview page
- Individual pillar pages (5 pages)
- Blog system with MDX
- Resources page

## 📝 Content Management

Blog posts will use MDX. Create files in `content/blog/`:

```markdown
---
title: "Post Title"
date: "2024-11-12"
excerpt: "Brief description"
---

Your content here...
```

## 🤝 Contributing

This is a personal project for Katie's Chronic Fatigue Protocol.

## 📄 License

See LICENSE file for details.

---

Built with ❤️ and modern web technologies
