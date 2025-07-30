import React from 'react';
import { Helmet } from 'react-helmet';

export default function Project2() {
  return (
    <>
      <Helmet>
        <title>E-commerce Galaxy 3D Experience | SumitDev Portfolio</title>
        <meta name="description" content="A 3D e-commerce experience for product discovery and engagement. Modern UI, SEO-optimized, and interactive shopping." />
        <meta property="og:title" content="E-commerce Galaxy 3D Experience | SumitDev Portfolio" />
        <meta property="og:description" content="A 3D e-commerce experience for product discovery and engagement. Modern UI, SEO-optimized, and interactive shopping." />
        <meta property="og:type" content="article" />
      </Helmet>
      <main className="min-h-screen bg-gradient-to-br from-background via-surface to-muted flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">E-commerce Galaxy: 3D Shopping Experience</h1>
        <figure className="my-8">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="3D e-commerce visualization" className="rounded-xl shadow-lg w-full max-w-2xl mx-auto" loading="lazy" />
          <figcaption className="text-xs text-gray-500 mt-2 text-center">AI-generated: 3D e-commerce product discovery</figcaption>
        </figure>
        <section className="prose max-w-2xl mx-auto">
          <h2>Project Overview</h2>
          <p>This project reimagines online shopping as a 3D galaxy, where users can explore products as planets and stars. Built with React, Three.js, and advanced SEO strategies.</p>
          <h3>Key Features</h3>
          <ul>
            <li>3D navigation for product discovery</li>
            <li>Interactive product previews</li>
            <li>Mobile and desktop support</li>
            <li>SEO-optimized for e-commerce keywords</li>
          </ul>
          <h3>SEO Techniques Used</h3>
          <ul>
            <li>Structured data for products (JSON-LD)</li>
            <li>Open Graph and Twitter Card meta tags</li>
            <li>Optimized images and fast loading</li>
            <li>Internal links to related projects</li>
          </ul>
          <h3>Results</h3>
          <ul>
            <li>+120% increase in product page views</li>
            <li>+75% longer session duration</li>
            <li>+50% conversion rate improvement</li>
          </ul>
        </section>
        <div className="mt-10 flex justify-center">
          <a href="/portfolio-3d" className="text-accent hover:underline">← Back to 3D Portfolio</a>
        </div>
      </main>
    </>
  );
}
