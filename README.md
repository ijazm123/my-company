# CloudTech - Cloud Infrastructure & DevOps Solutions

A modern, state-of-the-art website for a cloud services startup built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradient accents
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Optimized with Next.js and Tailwind CSS
- **SEO Ready**: Meta tags and proper semantic HTML
- **Services Showcase**: AWS, Azure, DevOps, and Cybersecurity
- **Client Testimonials**: Build trust with case studies
- **Call-to-Action**: Lead capture and consultation booking

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with navigation and footer
│   ├── globals.css        # Global styles and Tailwind
│   └── page.tsx           # Home page
├── components/
│   ├── Navigation.tsx     # Header navigation
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services showcase
│   ├── Features.tsx       # Key features
│   ├── Testimonials.tsx   # Client testimonials
│   ├── CTA.tsx            # Call-to-action section
│   └── Footer.tsx         # Footer
└── lib/                   # Utilities and helpers
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## 📝 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

## 🎨 Customization

### Update Company Information
Edit `src/components/` files to update:
- Company name and logo
- Service descriptions
- Team members and testimonials
- Contact information

### Modify Colors
Update `tailwind.config.ts`:
```typescript
colors: {
  primary: '#0066cc',
  secondary: '#ff6b35',
}
```

## 📊 Performance Optimizations

- Image optimization with Next.js `Image` component
- Code splitting and lazy loading
- CSS-in-JS with Tailwind for minimal bundles
- Static generation where possible

## 🚀 Deployment Options

### Vercel (Recommended - Free for Next.js)
```bash
npm install -g vercel
vercel
```

### AWS S3 + CloudFront
```bash
npm run build
# Deploy 'out' folder to S3
```

### Azure App Service
```bash
npm run build
# Deploy to Azure
```

## 📞 Next Steps

1. **Replace placeholders** with your actual company info
2. **Add real content**: Case studies, team bios, testimonials
3. **Set up forms**: Integrate contact form with email service
4. **Analytics**: Add Google Analytics or Vercel Analytics
5. **SSL Certificate**: Ensure HTTPS on your domain

## 🔧 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm
- **Linting**: ESLint

## 📄 License

MIT License - Feel free to use this template for your business.

---

**Questions?** Check the [Next.js Documentation](https://nextjs.org/docs) or reach out to the team!
