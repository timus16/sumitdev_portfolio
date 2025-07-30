import React from 'react';
import { Helmet } from 'react-helmet';

export default function Project3() {
  return (
    <>
      <Helmet>
        <title>3D Data Dashboard Case Study | SumitDev Portfolio</title>
        <meta name="description" content="Case study of an interactive 3D dashboard for business analytics and KPIs. Modern UI, SEO-optimized, and visually rich." />
        <meta property="og:title" content="3D Data Dashboard Case Study | SumitDev Portfolio" />
        <meta property="og:description" content="Case study of an interactive 3D dashboard for business analytics and KPIs. Modern UI, SEO-optimized, and visually rich." />
        <meta property="og:type" content="article" />
      </Helmet>
      <main className="min-h-screen bg-gradient-to-br from-background via-surface to-muted flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">3D Data Dashboard: Business Analytics</h1>
        <figure className="my-8">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="3D dashboard visualization" className="rounded-xl shadow-lg w-full max-w-2xl mx-auto" loading="lazy" />
          <figcaption className="text-xs text-gray-500 mt-2 text-center">AI-generated: 3D dashboard for business analytics</figcaption>
        </figure>
        <section className="prose max-w-2xl mx-auto">
          <h2>Project Overview</h2>
          <p>This interactive dashboard uses 3D visualizations to present business KPIs and analytics in a more engaging way. Built with React, Three.js, and modern SEO techniques.</p>
          <h3>Key Features</h3>
          <ul>
            <li>3D charts and KPI widgets</li>
            <li>Customizable dashboard layouts</li>
            <li>Real-time data integration</li>
            <li>SEO-optimized for analytics keywords</li>
          </ul>
          <h3>SEO Techniques Used</h3>
          <ul>
            <li>Semantic HTML for accessibility</li>
            <li>Open Graph meta tags</li>
            <li>Optimized images and fast loading</li>
            <li>Internal links to other dashboards</li>
          </ul>
          <h3>Results</h3>
          <ul>
            <li>+200% increase in dashboard usage</li>
            <li>+90% organic search traffic</li>
            <li>4.8⭐ user feedback</li>
          </ul>
        </section>
        <div className="mt-10 flex justify-center">
          <a href="/portfolio-3d" className="text-accent hover:underline">← Back to 3D Portfolio</a>
        </div>
      </main>
    </>
  );
}
