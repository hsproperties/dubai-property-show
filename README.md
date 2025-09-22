# Dubai Property Show (DPS) Website

A modern, luxury real estate showcase website built with React, Tailwind CSS, and Framer Motion.

## � About DPS

Dubai Property Show is the Central Nervous System of Dubai Real Estate - One Platform. Every Deal. Zero Friction. This website showcases Dubai's premier real estate developers and properties in a sophisticated, animated interface designed for luxury property investors and exhibitors.

## ✨ Features

- **Modern Design**: Sleek, luxury-focused UI with glassmorphism effects
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Animated**: Smooth animations using Framer Motion throughout the site
- **Fast**: Optimized for performance with React best practices
- **SEO-Ready**: Complete meta tags and OpenGraph integration

## �️ Tech Stack

- **Frontend**: React 18 (JavaScript)
- **Styling**: Tailwind CSS 3.3
- **Animations**: Framer Motion 10.16
- **Routing**: React Router DOM 6.15
- **Icons**: Lucide React
- **Build Tool**: Create React App

## � Quick Start

### Prerequisites

- Node.js 16+ and npm
- Git

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd dubai-property-show
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Build for production**
```bash
npm run build
```

The site will be available at `http://localhost:3000`

## � Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.js    # Main navigation header
│   ├── Footer.js        # Site footer
│   ├── ScrollToTop.js   # Auto-scroll to top on route change
│   └── Counter.js       # Animated counter component
├── pages/              # Main page components
│   ├── HomePage.js     # Landing page
│   ├── AboutPage.js    # About DPS
│   ├── PropertiesPage.js # Property listings
│   ├── ExhibitorsPage.js # Exhibitor directory
│   └── ContactPage.js  # Contact form & info
├── App.js              # Main app component
├── index.js           # App entry point
└── index.css          # Global styles & Tailwind imports
```

## � Design System

### Colors
- **Primary Blue**: #3b82f6 (blue-500)
- **Dark Blue**: #1e40af (blue-800)
- **Light Blue**: #93c5fd (blue-300)
- **Gold Accent**: #f59e0b (amber-500)
- **Text**: #1f2937 (gray-800)

### Typography
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (body text)

### Components
- **Luxury Cards**: White cards with luxury shadows
- **Glass Morphism**: Semi-transparent cards with backdrop blur
- **Gradient Text**: Blue to purple gradient text effects
- **Animated Counters**: Numbers that count up when in view

## � Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route to `src/App.js`
3. Update navigation in `src/components/Navigation.js`

### Modifying Animations

All animations use Framer Motion. Common patterns:

```javascript
// Fade in up animation
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Stagger children
const staggerChildren = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
};
```

### Styling Guidelines

- Use Tailwind utility classes
- Leverage custom CSS classes defined in `index.css`:
  - `.luxury-card` - Premium card styling
  - `.glass-card` - Glassmorphism effect
  - `.gradient-text` - Gradient text effect
  - `.btn-primary` - Primary button styling

## � Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## � Key Features

### Homepage
- Animated hero section with floating elements
- Animated statistics counters
- Mission, vision, and values showcase
- Benefits grid with hover effects

### Properties Page
- Search and filter functionality
- Grid layout with property cards
- Favorite system
- Responsive design

### Exhibitors Page
- Developer showcase with ratings
- Category filtering
- Interactive FAQ section
- Contact information

### Contact Page
- Multi-step contact form
- Interactive location map placeholder
- Quick action buttons
- Social media integration

## � SEO Optimization

- Complete meta tags in `public/index.html`
- OpenGraph tags for social sharing
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## � Performance

- Code splitting with React.lazy (can be added)
- Optimized images (placeholder system ready)
- Minimal bundle size
- Smooth 60fps animations

## � Deployment

### Netlify/Vercel
```bash
npm run build
# Upload dist folder or connect Git repo
```

### Traditional Hosting
```bash
npm run build
# Upload contents of build/ folder to web server
```

## � Support

For technical support or customization requests:

- **Email**: info@dps-expo.com
- **Website**: www.dubaipropertyshow.com

## � License

© 2025 Dubai Property Show. All rights reserved.

---

**Built with ❤️ for Dubai's premier real estate showcase**
