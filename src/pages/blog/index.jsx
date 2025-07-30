import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// Blog post metadata (add new posts here)
const blogPosts = [
  {
    slug: 'technical-seo-audit-success',
    title: 'How Technical SEO Audits Drive Results (2025)',
    date: 'June 2025',
    summary: 'Technical SEO audits remain the foundation for sustainable search growth. See how a SaaS startup achieved +180% organic sessions and a 98/100 mobile usability score.',
    image: '/public/assets/images/seo-audit.jpg',
    tags: ['Technical SEO', 'Audit', 'Growth'],
  },
  {
    slug: 'wordpress-seo-case-study',
    title: 'Case Study: 300% Traffic Growth with WordPress SEO (2025)',
    date: 'July 2025',
    summary: 'A Mumbai e-commerce client saw 300% organic growth after technical SEO, schema, and Core Web Vitals optimization. Learn the key takeaways.',
    image: '/public/assets/images/wordpress-seo.jpg',
    tags: ['WordPress', 'SEO', 'Case Study'],
  },
  {
    slug: 'flutter-vs-native-performance',
    title: 'Flutter vs Native: Performance Deep Dive',
    date: '2025',
    summary: 'A technical comparison of Flutter and native mobile app performance, with real-world benchmarks and optimization tips.',
    image: '/public/assets/images/flutter-vs-native.jpg',
    tags: ['Flutter', 'Mobile', 'Performance'],
  },
  {
    slug: 'performance-optimization-guide',
    title: 'Web Performance Optimization Guide',
    date: '2025',
    summary: 'Comprehensive guide to optimizing web performance for modern JavaScript frameworks, including Core Web Vitals and advanced techniques.',
    image: '/public/assets/images/performance-guide.jpg',
    tags: ['Performance', 'Web Vitals', 'Optimization'],
  },
  {
    slug: 'react-native-app-case-study',
    title: 'React Native App: Case Study',
    date: '2025',
    summary: 'How a React Native app achieved high performance and user engagement in a competitive market.',
    image: '/public/assets/images/react-native-case.jpg',
    tags: ['React Native', 'Mobile', 'Case Study'],
  },
  {
    slug: 'shopify-conversion-boost',
    title: 'Shopify Conversion Boost: Real Results',
    date: '2025',
    summary: 'Case study on boosting Shopify store conversions through technical SEO, UX, and speed improvements.',
    image: '/public/assets/images/shopify-boost.jpg',
    tags: ['Shopify', 'Conversion', 'UX'],
  },
];

import { motion } from 'framer-motion';

export default function BlogIndex() {
  return (
    <>
      <Helmet>
        <title>Blog | SEO, Performance & Case Studies | SumitDev</title>
        <meta name="description" content="Read the latest blog posts on technical SEO, web performance, and real-world case studies from SumitDev, Mumbai's leading web developer. Featuring modern SEO techniques, schema, and interactive content." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog | SEO, Performance & Case Studies | SumitDev" />
        <meta property="og:description" content="Explore interactive, SEO-optimized blog posts and case studies on web performance, technical SEO, and digital growth." />
      </Helmet>
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog & Case Studies</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map(post => (
            <motion.div
              key={post.slug}
              className="group bg-white/90 dark:bg-card/90 border border-border rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
              whileHover={{ scale: 1.03, y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-semibold">{tag}</span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-semibold text-primary group-hover:text-accent transition-colors mb-1">{post.title}</h2>
                  <div className="text-xs text-gray-500 mb-2">{post.date}</div>
                  <p className="text-base text-gray-700 dark:text-gray-200 mb-4 flex-1">{post.summary}</p>
                  <span className="inline-block mt-auto text-accent font-semibold group-hover:underline">Read more →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
