import React from 'react';
import { Helmet } from 'react-helmet';

export default function Project1() {
  return (
    <>
      <Helmet>
        <title>Fintech App 3D Case Study | SumitDev Portfolio</title>
        <meta name="description" content="Case study of a cross-platform fintech app with real-time 3D data visualization. Modern UI, SEO-optimized, and interactive experience." />
        <meta property="og:title" content="Fintech App 3D Case Study | SumitDev Portfolio" />
        <meta property="og:description" content="Case study of a cross-platform fintech app with real-time 3D data visualization. Modern UI, SEO-optimized, and interactive experience." />
        <meta property="og:type" content="article" />
      </Helmet>
      <main className="min-h-screen bg-gradient-to-br from-background via-surface to-muted flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Fintech App: Real-Time 3D Data Visualization</h1>
        <figure className="my-8">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80" alt="3D data visualization" className="rounded-xl shadow-lg w-full max-w-2xl mx-auto" loading="lazy" />
          <figcaption className="text-xs text-gray-500 mt-2 text-center">AI-generated: 3D data visualization in a fintech dashboard</figcaption>
        </figure>
        <section className="prose max-w-2xl mx-auto">
          <h2>Project Overview</h2>
          <p>This fintech app leverages 3D data visualization to help users understand complex financial trends in real time. Built with React, Three.js, and modern UI/UX best practices.</p>
          <h3>Key Features</h3>
          <ul>
            <li>Interactive 3D charts and graphs</li>
            <li>Real-time data streaming</li>
            <li>Mobile-first responsive design</li>
            <li>SEO-optimized content and meta tags</li>
          </ul>
          <h3>SEO Techniques Used</h3>
          <ul>
            <li>Semantic HTML and ARIA labels for accessibility</li>
            <li>Open Graph and Twitter Card meta tags</li>
            <li>Optimized images with alt text and lazy loading</li>
            <li>Internal linking to other portfolio projects</li>
          </ul>
          <h3>Results</h3>
          <ul>
            <li>+180% user engagement with interactive 3D features</li>
            <li>+60% organic traffic from SEO improvements</li>
            <li>4.9⭐ user rating on app stores</li>
          </ul>
        </section>
        <div className="mt-10 flex justify-center">
          <a href="/portfolio-3d" className="text-accent hover:underline">← Back to 3D Portfolio</a>
        </div>
      </main>
    </>
  );
}
