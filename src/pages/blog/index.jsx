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
  },
  {
    slug: 'wordpress-seo-case-study',
    title: 'Case Study: 300% Traffic Growth with WordPress SEO (2025)',
    date: 'July 2025',
    summary: 'A Mumbai e-commerce client saw 300% organic growth after technical SEO, schema, and Core Web Vitals optimization. Learn the key takeaways.',
  },
  {
    slug: 'flutter-vs-native-performance',
    title: 'Flutter vs Native: Performance Deep Dive',
    date: '2025',
    summary: 'A technical comparison of Flutter and native mobile app performance, with real-world benchmarks and optimization tips.',
  },
  {
    slug: 'performance-optimization-guide',
    title: 'Web Performance Optimization Guide',
    date: '2025',
    summary: 'Comprehensive guide to optimizing web performance for modern JavaScript frameworks, including Core Web Vitals and advanced techniques.',
  },
  {
    slug: 'react-native-app-case-study',
    title: 'React Native App: Case Study',
    date: '2025',
    summary: 'How a React Native app achieved high performance and user engagement in a competitive market.',
  },
  {
    slug: 'shopify-conversion-boost',
    title: 'Shopify Conversion Boost: Real Results',
    date: '2025',
    summary: 'Case study on boosting Shopify store conversions through technical SEO, UX, and speed improvements.',
  },
];

export default function BlogIndex() {
  return (
    <>
      <Helmet>
        <title>Blog | SEO, Performance & Case Studies | SumitDev</title>
        <meta name="description" content="Read the latest blog posts on technical SEO, web performance, and real-world case studies from SumitDev, Mumbai's leading web developer." />
      </Helmet>
      <section className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <ul className="space-y-8">
          {blogPosts.map(post => (
            <li key={post.slug} className="border-b pb-6">
              <Link to={`/blog/${post.slug}`} className="text-2xl font-semibold text-primary hover:underline">
                {post.title}
              </Link>
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <p className="text-base text-gray-700 mb-2">{post.summary}</p>
              <Link to={`/blog/${post.slug}`} className="text-accent hover:underline text-sm">Read more →</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
