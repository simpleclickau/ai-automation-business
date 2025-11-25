# Articulate AI Website - Handoff Documentation

**Purpose:** Complete documentation for migrating the Articulate AI website to a separate repository  
**Date:** November 2024  
**Current Location:** `/home/ubuntu/articulate-ai-website/`  
**Manus Project ID:** articulate-ai-website  
**Latest Checkpoint:** fddcd8fd

---

## 🎯 Project Overview

**Website Name:** Articulate AI  
**Tagline:** "Voice Intelligence, Perfectly Articulated"  
**Purpose:** Marketing website for AI voice agent platform targeting Australian businesses

**Live Preview:** https://3000-iccrb096a5xfglghvu65s-1dfe0ade.manus-asia.computer  
**Manus Checkpoint:** manus-webdev://fddcd8fd

---

## 🎨 Brand Identity

### Brand Colors

```css
Primary Purple: #7C3AED
Secondary Amber: #F59E0B
Navy Text: #1A1A2E
Cyan Accent: #06B6D4
```

### Typography

- **Headings:** Montserrat (Bold, 600-800 weight)
- **Body Text:** Inter (Regular, 400-600 weight)
- **Google Fonts:** Already configured in `client/index.html`

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Design Aesthetic

- **Style:** Clean, modern, professional
- **Layout:** Geometric gradients, purple/amber color scheme
- **Feel:** Premium but accessible, tech-forward
- **Consistency:** Matches investor deck design (geometric shapes, gradient overlays)

---

## 📁 Website Structure

### Pages

1. **Home** (`/`) - Hero, features, benefits, CTA
2. **Features** (`/features`) - Detailed platform capabilities
3. **About** (`/about`) - Company mission, vision, team
4. **Investors** (`/investors`) - Business overview, metrics, contact
5. **Contact** (`/contact`) - Demo request and contact forms

### Components

- **Header** - Navigation with mobile menu (hamburger)
- **Footer** - Company info, links, social media placeholders
- **Forms** - Contact form, demo request form, investor inquiry form

---

## 🛠️ Technical Stack

### Framework & Tools

- **Template:** Manus web-static (React 19 + Tailwind 4)
- **Routing:** Wouter (client-side routing)
- **Styling:** Tailwind CSS 4 + custom CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Form Handling:** React Hook Form + Zod validation
- **Notifications:** Sonner (toast notifications)

### Project Structure

```
articulate-ai-website/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Investors.tsx
│   │   │   └── Contact.tsx
│   │   ├── App.tsx          # Routes and layout
│   │   ├── index.css        # Global styles + theme
│   │   └── main.tsx         # Entry point
│   └── index.html           # HTML template
├── todo.md                  # Task tracking
└── README.md                # Project documentation
```

---

## 🎨 Design System

### Theme Configuration (`client/src/index.css`)

```css
:root {
  --primary: #7C3AED;        /* Purple */
  --secondary: #F59E0B;      /* Amber */
  --accent: #06B6D4;         /* Cyan */
  --background: #FFFFFF;
  --foreground: #1A1A2E;     /* Navy */
  
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### Color Usage Guidelines

- **Primary Purple (#7C3AED):** CTAs, headings, brand elements
- **Secondary Amber (#F59E0B):** Accents, highlights, hover states
- **Navy (#1A1A2E):** Body text, headings
- **Cyan (#06B6D4):** Accent elements, gradients
- **White (#FFFFFF):** Background, cards

### Typography Scale

- **Hero Heading:** 4xl-6xl (48-64px)
- **Section Heading:** 3xl-4xl (36-48px)
- **Subsection Heading:** 2xl-3xl (24-36px)
- **Body Text:** base-lg (16-18px)
- **Small Text:** sm (14px)

---

## 📄 Page Content

### Home Page

**Hero Section:**
- Headline: "Voice Intelligence That Speaks Your Language"
- Subheadline: "Transform customer interactions with AI voice agents that sound natural, respond intelligently, and deliver exceptional experiences."
- CTA: "Request a Demo" (links to /contact)

**Features Section:**
- 4 key features with icons
- Natural Conversations, 24/7 Availability, Seamless Integration, Australian Data Sovereignty

**Benefits Section:**
- 3 main benefits
- Reduce Costs, Improve Customer Satisfaction, Scale Effortlessly

**Statistics Section:**
- 95% Customer Satisfaction
- 24/7 Availability
- 60% Cost Reduction
- <100ms Response Time

**CTA Section:**
- "Ready to Transform Your Customer Experience?"
- Button: "Get Started Today"

### Features Page

**Main Features:**
1. Natural Voice Conversations
2. Intelligent Call Routing
3. Real-time Analytics
4. Custom Integration

**Each feature includes:**
- Icon
- Title
- Description
- Benefits list

### About Page

**Sections:**
- Mission Statement
- Vision
- Core Values (3 values)
- Team Overview (placeholder)

### Investors Page

**Sections:**
- Market Opportunity
- Business Model
- Key Metrics
- Competitive Advantages
- Team
- Contact CTA
- Link to investor deck (GitHub)

### Contact Page

**Forms:**
- Demo Request Form (name, email, company, phone, message)
- General Contact Information
- Form validation with Zod
- Toast notifications on submit

---

## 🎯 Key Features Implemented

### Navigation

- **Desktop:** Horizontal nav with links to all pages
- **Mobile:** Hamburger menu with slide-out navigation
- **Active State:** Current page highlighted
- **Smooth Scroll:** Enabled for anchor links

### Forms

- **Validation:** Zod schema validation
- **Error Handling:** Inline error messages
- **Loading States:** Button disabled during submission
- **Success Feedback:** Toast notifications
- **Fields:** Name, email, company, phone, message

### Responsive Design

- **Mobile:** < 768px (hamburger menu, stacked layout)
- **Tablet:** 768px - 1024px (adjusted spacing)
- **Desktop:** > 1024px (full layout)

### Accessibility

- **Keyboard Navigation:** Full keyboard support
- **ARIA Labels:** Proper labeling for screen readers
- **Focus States:** Visible focus indicators
- **Semantic HTML:** Proper heading hierarchy

---

## 🚀 Deployment Information

### Current Deployment

- **Platform:** Manus (development)
- **URL:** https://3000-iccrb096a5xfglghvu65s-1dfe0ade.manus-asia.computer
- **Port:** 3000
- **Status:** Running

### Environment Variables

```bash
VITE_APP_TITLE=Articulate AI - Voice Intelligence Platform
VITE_APP_LOGO=/logo.svg  # (placeholder, not yet added)
```

### Build Commands

```bash
# Development
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## ✅ Completed Tasks

From `todo.md`:

- [x] Implement Articulate AI brand colors
- [x] Configure Montserrat and Inter fonts
- [x] Create geometric gradient design aesthetic
- [x] Homepage with hero section and value proposition
- [x] Services/Features page
- [x] About page with company mission
- [x] Investors section with business overview
- [x] Contact page with demo request form
- [x] Navigation header with all page links
- [x] Footer with company information
- [x] Hero section with compelling headline and CTA
- [x] Problem/solution overview
- [x] Key features showcase (4 main features)
- [x] Benefits section
- [x] Social proof / statistics
- [x] Call-to-action section
- [x] Market opportunity overview
- [x] Business model summary
- [x] Traction metrics
- [x] Team introduction
- [x] Contact form for investor inquiries
- [x] Demo request form with validation
- [x] Contact form with validation
- [x] Investor inquiry form
- [x] Form submission handling (toast notifications)
- [x] Loading states for form submissions
- [x] Mobile-responsive navigation (hamburger menu)
- [x] Tablet breakpoint optimizations
- [x] Desktop layout optimizations
- [x] Set up routing for all pages
- [x] Configure theme (light mode with brand colors)
- [x] Add smooth scroll behavior
- [x] Implement animations/transitions

---

## 📋 Remaining Tasks

From `todo.md`:

- [ ] Add meta descriptions and SEO tags
- [ ] Add favicon and meta tags
- [ ] Test cross-browser compatibility
- [ ] Add actual logo (currently placeholder)
- [ ] Optimize images for performance
- [ ] Add analytics integration
- [ ] Set up contact form backend (currently frontend only)
- [ ] Add social media links (currently placeholders)
- [ ] Create 404 page
- [ ] Add loading states for page transitions
- [ ] Implement actual form submission (currently shows toast only)
- [ ] Add testimonials/case studies section
- [ ] Create blog section (optional)
- [ ] Add pricing page (optional)

---

## 🔧 Setup Instructions for New Repository

### Step 1: Create New Repository

```bash
# Create new repository in simpleclickau organization
gh repo create simpleclickau/articulate-ai-website --private --description="Articulate AI marketing website"
```

### Step 2: Copy Website Files

```bash
# Copy entire website directory
cp -r /home/ubuntu/articulate-ai-website /home/ubuntu/articulate-ai-website-new

# Navigate to new directory
cd /home/ubuntu/articulate-ai-website-new

# Initialize git
git init
git add .
git commit -m "Initial commit: Articulate AI website

- Complete marketing website with 5 pages
- Responsive design with mobile navigation
- Contact and demo request forms
- Brand identity: Purple (#7C3AED) + Amber (#F59E0B)
- Built with React 19 + Tailwind 4"

# Add remote and push
git remote add origin https://github.com/simpleclickau/articulate-ai-website.git
git push -u origin master
```

### Step 3: Update README

Create a comprehensive README.md with:
- Project overview
- Setup instructions
- Development workflow
- Deployment guide
- Brand guidelines
- Contributing guidelines

### Step 4: Add Additional Files

- `.github/workflows/` - CI/CD pipelines
- `CONTRIBUTING.md` - Contribution guidelines
- `CHANGELOG.md` - Version history
- `LICENSE` - License information

---

## 📝 Handoff Checklist

For the new Manus task, ensure you have:

- [ ] This handoff document
- [ ] Complete website files from `/home/ubuntu/articulate-ai-website/`
- [ ] Brand assets (colors, fonts, design guidelines)
- [ ] Content for all pages
- [ ] List of completed and remaining tasks
- [ ] Technical stack documentation
- [ ] Setup and deployment instructions
- [ ] Manus checkpoint reference: `manus-webdev://fddcd8fd`

---

## 🎨 Design Assets

### Color Palette (CSS Variables)

```css
--primary: #7C3AED;
--primary-foreground: #FFFFFF;
--secondary: #F59E0B;
--secondary-foreground: #1A1A2E;
--accent: #06B6D4;
--accent-foreground: #FFFFFF;
--background: #FFFFFF;
--foreground: #1A1A2E;
--muted: #F3F4F6;
--muted-foreground: #6B7280;
```

### Gradient Combinations

```css
/* Primary Gradient */
background: linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%);

/* Accent Gradient */
background: linear-gradient(90deg, #7C3AED 0%, #F59E0B 100%);

/* Hero Gradient */
background: linear-gradient(135deg, #7C3AED 0%, #9333EA 40%, #06B6D4 100%);
```

---

## 🔗 Important Links

- **Current Website:** https://3000-iccrb096a5xfglghvu65s-1dfe0ade.manus-asia.computer
- **Manus Checkpoint:** manus-webdev://fddcd8fd
- **Business Research Repo:** https://github.com/simpleclickau/ai-automation-business
- **Main Development Repo:** https://github.com/simpleclickau/articulate-ai
- **Investor Deck:** manus-slides://PUvnk6Kt9o1cHSzHuhRB1Q

---

## 💡 Notes for Next Agent

### What Works Well

- Clean, professional design matching investor deck
- Responsive navigation with mobile menu
- Form validation and user feedback
- Consistent brand identity throughout
- Good accessibility practices

### What Needs Improvement

- Add actual logo (currently placeholder)
- Implement backend for form submissions
- Add SEO meta tags and descriptions
- Optimize images for performance
- Add analytics tracking
- Test cross-browser compatibility
- Add favicon

### Design Decisions Made

1. **Light theme** - Chose light background for professional, accessible feel
2. **Purple + Amber** - Brand colors provide premium yet approachable aesthetic
3. **Montserrat + Inter** - Font pairing balances boldness (headings) with readability (body)
4. **Geometric gradients** - Consistent with investor deck, creates visual interest
5. **Mobile-first** - Responsive design prioritizes mobile experience

### Technical Decisions Made

1. **Static site** - No backend needed for MVP, forms show toast notifications
2. **Client-side routing** - Wouter for fast navigation without page reloads
3. **Tailwind CSS** - Utility-first approach for rapid development and consistency
4. **shadcn/ui** - Pre-built components for forms, buttons, toasts
5. **React Hook Form + Zod** - Robust form handling and validation

---

## 🚀 Quick Start for New Task

```bash
# 1. Access the Manus checkpoint
# Use checkpoint: manus-webdev://fddcd8fd

# 2. Or copy files manually
cp -r /home/ubuntu/articulate-ai-website /path/to/new/location

# 3. Install dependencies
cd articulate-ai-website
pnpm install

# 4. Start development server
pnpm dev

# 5. Make changes and commit
git add .
git commit -m "Your changes"
git push
```

---

## 📞 Questions or Issues?

If you encounter any issues or have questions:

1. Review this handoff document thoroughly
2. Check the `todo.md` file for task status
3. Review the investor deck for brand consistency
4. Check the business research repo for context
5. Test the live preview URL to see current state

---

**This document contains everything needed to continue development of the Articulate AI website in a new repository or Manus task. All design decisions, technical choices, and implementation details are documented for seamless handoff.**

---

**Version:** 1.0  
**Last Updated:** November 2024  
**Prepared By:** Manus AI Agent  
**For:** SimpleClick Australia - Articulate AI Project

