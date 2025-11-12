# Quick Start Guide - Git Setup & First Steps

## 🚀 Getting Started (5 minutes)

### Step 1: Create GitHub Repository

**Option A: Via GitHub Website**
1. Go to https://github.com/new
2. Repository name: `chronic-fatigue-protocol`
3. Description: "Marketing website for Katie's Chronic Fatigue Protocol"
4. Set to Private (or Public if you prefer)
5. ✅ Add README
6. ✅ Add .gitignore (select: Node)
7. Choose License: MIT (recommended)
8. Click "Create repository"

**Option B: Via GitHub CLI**
```bash
gh repo create chronic-fatigue-protocol --private --description "Marketing website for Katie's Chronic Fatigue Protocol" --gitignore Node --license mit
```

---

### Step 2: Initialize Next.js Project

```bash
# Create Next.js app
npx create-next-app@latest chronic-fatigue-protocol

# When prompted, select:
✓ TypeScript? Yes
✓ ESLint? Yes
✓ Tailwind CSS? Yes
✓ `src/` directory? No
✓ App Router? Yes
✓ Customize default import alias? No

# Navigate to project
cd chronic-fatigue-protocol
```

---

### Step 3: Connect to GitHub

```bash
# Initialize git (if not already done)
git init

# Add remote
git remote add origin https://github.com/YOUR-USERNAME/chronic-fatigue-protocol.git

# Verify
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

---

### Step 4: Install Additional Dependencies

```bash
# Animation and form handling
npm install framer-motion react-hook-form @hookform/resolvers zod lucide-react

# Verify installation
npm list
```

---

### Step 5: Open in Claude Code

```bash
# Make sure you're in the project directory
pwd  # Should show: /path/to/chronic-fatigue-protocol

# Open Claude Code (if installed)
claude-code

# Or open in your editor and use Claude Code from there
code .  # For VS Code
```

---

## 📁 What to Share with Claude Code

### Copy this prompt to Claude Code:

```
I need to build a Next.js website for Chronic Fatigue Protocol. 

I have a complete development handoff document with:
- Full design system (colors, typography, spacing)
- Component specifications with code examples
- Complete SVG icons (battery logo + medical icons)
- Animation specifications
- Content for homepage
- File structure

The document is in: HANDOFF-claude-code-development-spec.md

Please read this document and let me know:
1. If you need any clarifications
2. If all specifications are clear
3. What you'll build first

Reference mockup: FINAL-homepage-production-ready.html
```

---

## 📋 Files to Share with Claude Code

Upload these files to Claude Code's context:

1. **HANDOFF-claude-code-development-spec.md** ⭐ (Main spec)
2. **FINAL-homepage-production-ready.html** (Visual reference)
3. **integrated-brand-design.html** (Logo & brand)
4. **refined-battery-proportions.html** (Battery logo details)
5. **professional-icon-options.html** (Icon reference)

---

## 🎯 Development Phases

### Phase 1: Foundation (Week 1)
Claude Code should build:
- Project setup with Tailwind config
- Color system implementation
- Battery logo component
- Icon components (using Lucide)

**Test:** Logo renders correctly in different sizes

---

### Phase 2: Layout (Week 1-2)
Claude Code should build:
- Navigation component (with scroll effect)
- Footer component
- Mobile menu

**Test:** Navigation works on all screen sizes

---

### Phase 3: Homepage Sections (Week 2-4)
Claude Code should build (in order):
1. Hero section (with animations)
2. Video section
3. Trust bar
4. Pillars grid
5. How it works
6. Blog preview
7. Newsletter CTA
8. FAQ section

**Test:** Each section matches mockup, animations work

---

### Phase 4: Additional Pages (Week 5)
Claude Code should build:
- Protocol overview page
- 5 individual pillar pages
- Blog listing page
- Blog post template
- Resources page

---

### Phase 5: Polish (Week 6)
- Mobile responsiveness
- Performance optimization
- SEO metadata
- Deployment to Vercel

---

## 🐛 Common Issues & Solutions

### Issue 1: Tailwind classes not working
```bash
# Make sure Tailwind is configured in app/layout.tsx
import './globals.css'

# In globals.css, you should have:
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Issue 2: Framer Motion animations not smooth
```typescript
// Add this to your motion component
transition={{ ease: "easeOut", duration: 0.3 }}
```

### Issue 3: SVG gradients not showing
```typescript
// Each gradient needs unique ID
<linearGradient id={`unique-id-${Math.random()}`}>
```

### Issue 4: Images not optimizing
```typescript
// Use Next.js Image component
import Image from 'next/image'
<Image src="/path" width={500} height={300} alt="..." />
```

---

## ✅ Verification Checklist

After Claude Code completes each phase:

**Foundation:**
- [ ] Tailwind colors match design system
- [ ] Battery logo renders correctly
- [ ] Icons display properly
- [ ] Fonts load (Inter from Google Fonts)

**Layout:**
- [ ] Navigation sticky and has backdrop blur
- [ ] Logo clickable and links to homepage
- [ ] Mobile menu works
- [ ] Footer has all links

**Homepage:**
- [ ] Hero animations play on load
- [ ] Pillar cards have hover effects
- [ ] Newsletter form validates email
- [ ] All sections match mockup

**Performance:**
- [ ] Lighthouse score 90+
- [ ] No console errors
- [ ] Fast load time (<3s)
- [ ] Mobile responsive

---

## 🚀 Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

**Or use Vercel Dashboard:**
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Vercel auto-detects Next.js
4. Click "Deploy"
5. Done! ✨

---

## 📞 Need Help?

**Common Commands:**
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Check build size
npm run build && npm run start

# Lint code
npm run lint

# Check TypeScript
npx tsc --noEmit
```

**Useful Resources:**
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

---

## 🎨 Design Token Quick Reference

```typescript
// Primary gradient
bg-gradient-to-br from-primary-600 to-primary-800

// Accent gradient  
bg-gradient-to-br from-accent-500 to-accent-600

// Combined gradient (hero, icons)
bg-gradient-to-br from-primary-600 to-accent-500

// Text gradient
bg-gradient-to-br from-primary-600 to-accent-500 bg-clip-text text-transparent

// Shadow with color
shadow-lg shadow-primary-600/30
```

---

**Ready to build?** Share the handoff document with Claude Code and let's go! 🚀
