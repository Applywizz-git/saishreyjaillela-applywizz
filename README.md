# Sai Shreya Jillella - Premium Portfolio

A modern, responsive portfolio showcasing data analytics expertise with premium animations and 3D effects.

## 🚀 Features

- **Premium Design System** - Custom color palette (no blue/purple/violet)
- **Cinematic Preloader** - 3D letter animations with bloom effects
- **Custom Skill Meters** - Honeycomb, Shard, and Glyph visualizations
- **3D Background** - Subtle particle system with parallax
- **Smart Animations** - Framer Motion with reduced motion support
- **Accessible** - WCAG AA compliant with proper ARIA labels
- **Performance Optimized** - Code splitting and lazy loading
- **Responsive** - Mobile-first design

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom Design System
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber + Drei
- **UI Components**: Headless UI
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 📦 Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd portfolio

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎨 Customization

### Update Content
Edit `src/data/content.ts` to update:
- Personal information
- Experience and skills
- Projects and certifications
- Contact details

### Replace Email Service
The portfolio uses a mock email service. To integrate a real service:

1. Install your preferred email SDK (EmailJS, SendGrid, etc.)
2. Update `src/lib/email.ts` with real implementation
3. Add required environment variables

### Theme Customization
- Colors: Edit `src/index.css` HSL values
- Animations: Modify `tailwind.config.ts` keyframes
- Components: Customize in `src/components/`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Custom Domain
To connect a custom domain:
1. Update canonical URL in `index.html`
2. Configure DNS settings
3. Update Open Graph URLs

## 📊 Performance

- **Lighthouse Score**: 90+ across all categories
- **Core Web Vitals**: 
  - CLS < 0.02
  - LCP < 2.5s
  - FID < 100ms

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance

## 🎯 Key Components

- **Preloader**: Cinematic loading with 3D letters
- **ThreeBackground**: Low-impact particle system
- **Skill Meters**: Three unique visualization types
- **Header**: Smart hide/show with scroll detection
- **Contact Form**: Float labels with validation

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ by Sai Shreya Jillella**