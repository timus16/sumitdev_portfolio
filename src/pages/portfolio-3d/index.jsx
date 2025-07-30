import React from 'react';
import { Helmet } from 'react-helmet';
// You can use @react-three/fiber for 3D, but here is a placeholder for the 3D canvas

export default function Portfolio3D() {
  return (
    <>
      <Helmet>
        <title>3D Interactive Portfolio | SumitDev</title>
        <meta name="description" content="Explore SumitDev's portfolio in an interactive 3D experience. Modern UI, SEO-optimized, and visually stunning projects." />
        <meta property="og:title" content="3D Interactive Portfolio | SumitDev" />
        <meta property="og:description" content="Explore SumitDev's portfolio in an interactive 3D experience. Modern UI, SEO-optimized, and visually stunning projects." />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="min-h-screen bg-gradient-to-br from-background via-surface to-muted flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">3D Interactive Portfolio</h1>
        <p className="text-lg text-center mb-8 max-w-2xl">Navigate through a galaxy of projects. Click any project to open its modern, SEO-optimized page in a new window.</p>
        {/* 3D Canvas Placeholder */}
        <div className="w-full max-w-4xl h-[500px] bg-black rounded-2xl flex items-center justify-center text-white text-2xl">
          [3D Canvas Here: Coming Soon]
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <a href="/portfolio-3d/project-1" target="_blank" rel="noopener noreferrer" className="block bg-white/90 dark:bg-card/90 border border-border rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 text-center">
            <h2 className="text-2xl font-semibold text-primary mb-2">Project 1: Fintech App</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-2">A cross-platform fintech app with real-time 3D data visualization.</p>
            <span className="inline-block text-accent font-semibold group-hover:underline">View Project →</span>
          </a>
          <a href="/portfolio-3d/project-2" target="_blank" rel="noopener noreferrer" className="block bg-white/90 dark:bg-card/90 border border-border rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 text-center">
            <h2 className="text-2xl font-semibold text-primary mb-2">Project 2: E-commerce Galaxy</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-2">A 3D e-commerce experience for product discovery and engagement.</p>
            <span className="inline-block text-accent font-semibold group-hover:underline">View Project →</span>
          </a>
          <a href="/portfolio-3d/project-3" target="_blank" rel="noopener noreferrer" className="block bg-white/90 dark:bg-card/90 border border-border rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 text-center">
            <h2 className="text-2xl font-semibold text-primary mb-2">Project 3: Data Dashboard 3D</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-2">An interactive 3D dashboard for business analytics and KPIs.</p>
            <span className="inline-block text-accent font-semibold group-hover:underline">View Project →</span>
          </a>
        </div>
      </section>
    </>
  );
}
