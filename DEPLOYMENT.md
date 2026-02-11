# Deployment Guide

## How to Deploy Your Portfolio

### Option 1: Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel
   ```
   Follow the prompts to connect your GitHub account and deploy.

### Option 2: Deploy to Netlify

1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Go to Netlify**:
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

### Option 3: Deploy to GitHub Pages

1. **Update package.json**:
   ```json
   "homepage": "https://timus16.github.io/sumitdev_portfolio"
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to package.json**:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

### Option 4: Traditional Hosting (Shared/VPS)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your hosting server via FTP/SFTP

3. **Point your domain** to the directory containing the `dist` folder

## Environment Variables

Create a `.env.local` file if you need environment variables:
```
VITE_APP_TITLE=SumitDev
VITE_APP_DESCRIPTION=WordPress & Full-Stack Developer
```

## Post-Deployment

- Test all links and forms
- Verify scroll animations work properly
- Check mobile responsiveness
- Test on different browsers
- Monitor performance with Lighthouse

## Continuous Deployment

For automatic deployments on every git push:
1. Connect your GitHub repository to your hosting provider
2. Enable automatic builds on push
3. Your site will update automatically when you commit changes

## Current Status

- ✅ Build: Optimized and production-ready
- ✅ Size: ~267KB JavaScript (85KB gzipped)
- ✅ Performance: Optimized with Vite
- ✅ Responsive: Mobile-first design
- ✅ Animations: Smooth scroll effects with Framer Motion
