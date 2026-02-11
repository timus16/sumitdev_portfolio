# SumitDev - WordPress & Full-Stack Developer Portfolio

A modern, animated portfolio website for a WordPress developer with expertise in multiple tech stacks including mobile development, web development, and no-code platforms.

## Features

- **Dark Theme with Neon Colors** - Sleek dark background with neon orange and green accents
- **Smooth Scroll Animations** - Interactive animations triggered by scroll position
- **Responsive Design** - Mobile-first approach works perfectly on all devices
- **Modern Components** - Built with React, Framer Motion, and Tailwind CSS
- **Performance Optimized** - Fast loading with Vite and modern tools

## Tech Stack

### Frontend
- React 18
- Framer Motion (Animations)
- Tailwind CSS (Styling)
- Vite (Build Tool)
- Lucide React (Icons)

### Skills Featured
- **WordPress:** Elementor, Divi, Gutenberg, ACF, Custom Plugins
- **Web:** React.js, Next.js, Flutter Web, JavaScript, TypeScript
- **Mobile:** Flutter, React Native, NativeScript, Lynx
- **No-Code:** Bubble.io, FlutterFlow, Framer, Webflow

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/
│   └── useInView.js
├── App.jsx
├── index.jsx
└── index.css
```

## Customization

### Colors
Modify the color scheme in `tailwind.config.js`:
- `neon-orange`: `#FF6B35`
- `neon-green`: `#00FF00`
- `dark-bg`: `#0A0E27`

### Content
Edit component files in `src/components/` to update:
- Skills and technologies
- Project portfolio
- Contact information
- Social media links

## Deployment

The site can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

```bash
# Build the project
npm run build

# Deploy the 'dist' folder to your hosting service
```

## License

MIT License - feel free to use this template for your own portfolio.

## Credits

Built with ❤️ by SumitDev
