# NexusGuard Website - Setup & Deployment Guide

## Overview
Your professional Next.js website for NexusGuard - a Cloud DevOps & Cybersecurity solutions company. Features a dark cybersecurity-themed design with glassmorphism effects, animated elements, and a single-page landing experience.

## Website Structure

### Pages
- **Homepage** (`/src/app/page.tsx`) - Single-page landing with Hero, Services, Features, Pricing, Testimonials, CTA, and Contact sections
- **About** (`/src/app/about/page.tsx`) - Team bios with certifications and value cards
- **Contact** (`/src/app/contact/page.tsx`) - Standalone contact form (also embedded on homepage)
- **Case Studies** (`/src/app/case-studies/page.tsx`) - Expandable case study cards

### Components
- **Navigation** - Glassmorphism navbar with scroll detection, anchor links (#services, #features, #pricing, #testimonials, #contact), mobile hamburger menu
- **Hero** - Animated stat counters (IntersectionObserver), floating Font Awesome icons, radial gradient backgrounds, hero grid pattern
- **Services** - 6 service cards (Cloud Infrastructure, DevOps Automation, Network Engineering, Cybersecurity, Data Protection, Observability & Monitoring) with FA icons and hover animations
- **Features** - Live SOC dashboard with real-time threat count/latency updates, 4 feature items (Zero-Trust, AI Threat Detection, Global Edge, Compliance)
- **Pricing** - 3-tier pricing cards (Starter $499/mo, Professional $1,499/mo featured, Enterprise custom) with feature lists
- **ContactSection** - Inline contact form with service dropdown, submit animation (idle→sending→sent), contact info sidebar
- **Testimonials** - Client testimonials with star ratings and avatar initials
- **CTA** - Rotating gradient background animation, "Get Free Security Audit" button
- **Footer** - 4-column grid (Brand+socials, Services, Company, Resources) with social icons (Twitter, LinkedIn, GitHub, Discord)

## Customization Guide

### 1. Update Company Information
Edit these files with your actual company details:

**File: `src/app/layout.tsx`**
```tsx
// Update metadata
metadata: {
  title: 'NexusGuard - Cloud DevOps & Cybersecurity Solutions',
  description: 'Your company description...',
}
```

**File: `src/components/Navigation.tsx`**
- Update company logo/name in the navbar (currently "NexusGuard" with shield icon)

**File: `src/components/Footer.tsx`**
- Update contact email: `info@nexusguard.io` → your email
- Update phone number → your phone
- Add your social media profile links (Twitter, LinkedIn, GitHub, Discord)

### 2. Add Team Information
Edit `src/app/about/page.tsx` and update the `team` array with your actual team members:

```tsx
{
  name: 'Your Name',
  role: 'Your Role',
  expertise: 'Your Focus Area',
  bio: 'Your bio description...',
  certifications: ['Cert 1', 'Cert 2', 'Cert 3'],
}
```

### 3. Update Services
Edit `src/components/Services.tsx` to customize:
- Service titles and descriptions (currently 6 services: Cloud Infrastructure, DevOps Automation, Network Engineering, Cybersecurity, Data Protection, Observability & Monitoring)
- Feature lists for each service
- Font Awesome icons (e.g., `fa-cloud`, `fa-shield-halved`)

### 4. Update Pricing
Edit `src/components/Pricing.tsx` to customize:
- Plan names, prices, and feature lists
- Currently: Starter ($499/mo), Professional ($1,499/mo), Enterprise (Custom)
- The middle plan is highlighted with "MOST POPULAR" badge

### 5. Update Testimonials
Edit `src/components/Testimonials.tsx`:
```tsx
{
  name: 'Client Name',
  company: 'Client Company',
  text: 'Their testimonial...',
  role: 'Client Title',
}
```

## Running the Website

### Development Server
```bash
npm run dev
```
Visit: http://localhost:3000

### Production Build
```bash
npm run build
npm start
```

## Technology Stack
- **Framework**: Next.js 14+ (React)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## SEO Optimization

### Meta Tags
✅ Title and description already optimized  
✅ Keywords included for AWS, Azure, DevOps, Cybersecurity

### Additional SEO Tips
1. Add `robots.txt` in `public/` folder
2. Create `sitemap.xml` for search engines
3. Add structured data (JSON-LD) for rich snippets
4. Write blog content for organic traffic
5. Optimize images with proper alt text

## Contact Form Setup

The contact form currently logs to console. To make it functional:

### Option 1: Use SendGrid
```bash
npm install @sendgrid/mail
```

### Option 2: Use AWS SES
```bash
npm install aws-sdk
```

### Option 3: Use Formspree (Easiest)
1. Go to https://formspree.io
2. Create a new form
3. Replace form action in `src/app/contact/page.tsx`

## Deployment Options

### 1. Vercel (Recommended - Free tier available)
```bash
npm i -g vercel
vercel
```

### 2. Netlify
- Connect your GitHub repo to Netlify
- Auto-deploy on push

### 3. AWS Amplify
- AWS-native deployment option
- Great for your team's expertise

### 4. DigitalOcean / Linode
- VPS-based deployment
- Full control over infrastructure

## Performance Tips

✅ Images should be optimized (use Next.js Image component)  
✅ Minify CSS and JavaScript (automatic with Next.js)  
✅ Enable caching headers on Vercel  
✅ Use CDN for global distribution  

## Security Considerations

🔒 Keep environment variables in `.env.local`  
🔒 Use HTTPS (automatic on Vercel/Netlify)  
🔒 Validate form inputs server-side  
🔒 Rate limit contact form submissions  
🔒 Keep dependencies updated (`npm audit fix`)  

## Next Steps

1. **Add real team members** - Update About page with actual team info
2. **Setup contact form** - Connect to email service (Formspree recommended for quick setup)
3. **Add portfolio/case studies** - Create case studies page with real client work
4. **Setup analytics** - Add Google Analytics or Posthog
5. **Domain & SSL** - Register domain and configure SSL
6. **Deploy** - Push to production using Vercel/Netlify
7. **Create blog** - Add blog section for content marketing
8. **Monitor** - Setup monitoring and error tracking

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vercel Deployment**: https://vercel.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs/

---

**Last Updated**: May 2026  
**Status**: Ready for customization and deployment
