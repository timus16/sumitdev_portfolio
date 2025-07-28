import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectPlanet from './components/ProjectPlanet';
import ProjectDetails from './components/ProjectDetails';
import GalaxyControls from './components/GalaxyControls';
import ProjectGrid from './components/ProjectGrid';
import GalaxyBackground from './components/GalaxyBackground';

const PortfolioShowcaseGalaxy = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [viewMode, setViewMode] = useState('galaxy');
  const [filters, setFilters] = useState({ category: 'All', technology: 'All' });
  const [isLoading, setIsLoading] = useState(true);

  // Mock project data
  const allProjects = [
    {
      id: 1,
      title: "Mumbai Spice Restaurant",
      client: "Mumbai Spice",
      category: "Restaurant",
      year: "2024",
      icon: "UtensilsCrossed",
      primaryColor: "#FF6B35",
      secondaryColor: "#F7931E",
      featured: true,
      duration: "3 months",
      shortDescription: "Complete digital transformation for a traditional Mumbai restaurant, achieving 500% increase in organic traffic and online orders.",
      description: `Mumbai Spice, a traditional family restaurant in Bandra, needed a complete digital makeover to compete in the post-pandemic market. The challenge was to maintain their authentic brand while creating a modern, SEO-optimized online presence that would drive both dine-in and delivery orders.\n\nThe project involved comprehensive keyword research focusing on local Mumbai food searches, technical SEO optimization, and creating a user-friendly online ordering system integrated with their existing POS.`,
      images: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
      ],
      features: [
        "Online ordering system with real-time tracking",
        "Multi-language support (Hindi, Marathi, English)",
        "Local SEO optimization for Mumbai searches",
        "Mobile-first responsive design",
        "Integration with food delivery platforms",
        "Customer review management system"
      ],
      technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Google Maps API", "Payment Gateway"],
      keyMetrics: [
        { label: "Traffic Increase", value: "500%" },
        { label: "Online Orders", value: "300%" },
        { label: "Page Speed", value: "95/100" }
      ],
      results: {
        before: [
          { metric: "Organic Traffic", value: "200 visits/month" },
          { metric: "Online Orders", value: "5 orders/month" },
          { metric: "Page Load Speed", value: "4.2 seconds" },
          { metric: "Mobile Usability", value: "Poor" }
        ],
        after: [
          { metric: "Organic Traffic", value: "1,200 visits/month" },
          { metric: "Online Orders", value: "180 orders/month" },
          { metric: "Page Load Speed", value: "1.8 seconds" },
          { metric: "Mobile Usability", value: "Excellent" }
        ],
        achievements: [
          { label: "Revenue Growth", value: "400%" },
          { label: "Customer Retention", value: "85%" },
          { label: "Average Order Value", value: "₹850" }
        ],
        timeline: [
          { phase: "Discovery & Research", description: "Market analysis and competitor research", duration: "2 weeks" },
          { phase: "Design & Development", description: "UI/UX design and website development", duration: "6 weeks" },
          { phase: "SEO Implementation", description: "Technical SEO and content optimization", duration: "3 weeks" },
          { phase: "Testing & Launch", description: "Quality assurance and go-live", duration: "1 week" }
        ]
      },
      technical: {
        challenges: [
          {
            problem: "Slow Loading Times",
            description: "Original site took 4+ seconds to load, causing high bounce rates",
            solution: "Implemented advanced caching, image optimization, and CDN integration reducing load time to under 2 seconds"
          },
          {
            problem: "Poor Mobile Experience",
            description: "Site was not mobile-friendly, losing 70% of mobile traffic",
            solution: "Redesigned with mobile-first approach, achieving 95+ mobile usability score"
          }
        ],
        performance: [
          { metric: "Page Speed", improvement: "95/100", icon: "Zap" },
          { metric: "SEO Score", improvement: "98/100", icon: "TrendingUp" },
          { metric: "Accessibility", improvement: "94/100", icon: "Eye" },
          { metric: "Best Practices", improvement: "92/100", icon: "CheckCircle" }
        ],
        codeSnippet: `// Local SEO Schema Implementation
const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Mumbai Spice",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Linking Road",
    "addressLocality": "Bandra West",
    "addressRegion": "Mumbai",
    "postalCode": "400050"
  },
  "telephone": "+91-22-12345678",
  "servesCuisine": "Indian",
  "priceRange": "₹₹"
};`
      },
      testimonial: {
        clientName: "Rajesh Sharma",
        clientPosition: "Owner",
        company: "Mumbai Spice Restaurant",
        clientImage: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 5,
        quote: "Sumit transformed our business completely. We went from struggling to get customers to having a waiting list every evening. The online ordering system alone increased our revenue by 300%. His understanding of local Mumbai market is exceptional.",
        highlights: [
          "Exceptional understanding of local market dynamics",
          "Delivered results beyond expectations",
          "Excellent communication throughout the project",
          "Ongoing support and maintenance"
        ]
      },
      liveUrl: "https://mumbai-spice-demo.com",
      githubUrl: null
    },
    {
      id: 2,
      title: "TechStart E-commerce Platform",
      client: "TechStart Solutions",
      category: "E-commerce",
      year: "2024",
      icon: "ShoppingCart",
      primaryColor: "#6366F1",
      secondaryColor: "#8B5CF6",
      featured: true,
      duration: "4 months",
      shortDescription: "Built a scalable e-commerce platform with advanced SEO features, achieving 40% conversion rate improvement and first-page rankings.",
      description: `TechStart Solutions needed a robust e-commerce platform to sell their tech products online. The challenge was creating a fast, SEO-optimized platform that could handle high traffic while providing excellent user experience.\n\nThe solution involved building a custom e-commerce platform with advanced filtering, real-time inventory management, and comprehensive SEO optimization targeting competitive tech keywords.`,
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      features: [
        "Advanced product filtering and search",
        "Real-time inventory management",
        "Multi-payment gateway integration",
        "Automated SEO optimization",
        "Customer review system",
        "Analytics dashboard"
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
      keyMetrics: [
        { label: "Conversion Rate", value: "40%" },
        { label: "Page Speed", value: "98/100" },
        { label: "Revenue Growth", value: "250%" }
      ],
      results: {
        before: [
          { metric: "Conversion Rate", value: "1.2%" },
          { metric: "Average Session", value: "45 seconds" },
          { metric: "Cart Abandonment", value: "85%" },
          { metric: "Mobile Sales", value: "15%" }
        ],
        after: [
          { metric: "Conversion Rate", value: "4.8%" },
          { metric: "Average Session", value: "3.5 minutes" },
          { metric: "Cart Abandonment", value: "35%" },
          { metric: "Mobile Sales", value: "65%" }
        ],
        achievements: [
          { label: "Monthly Revenue", value: "₹25L" },
          { label: "Customer Satisfaction", value: "4.8/5" },
          { label: "Return Customers", value: "60%" }
        ],
        timeline: [
          { phase: "Planning & Architecture", description: "System design and technology selection", duration: "3 weeks" },
          { phase: "Development Phase 1", description: "Core platform and user authentication", duration: "6 weeks" },
          { phase: "Development Phase 2", description: "Payment integration and admin panel", duration: "4 weeks" },
          { phase: "Testing & Optimization", description: "Performance testing and SEO optimization", duration: "3 weeks" }
        ]
      },
      technical: {
        challenges: [
          {
            problem: "Scalability Issues",
            description: "Need to handle high traffic during sales events",
            solution: "Implemented microservices architecture with auto-scaling on AWS, handling 10x traffic spikes"
          },
          {
            problem: "SEO for Dynamic Content",
            description: "Product pages needed to rank for competitive keywords",
            solution: "Used Next.js SSR with dynamic meta generation and structured data for all products"
          }
        ],
        performance: [
          { metric: "Core Web Vitals", improvement: "Excellent", icon: "Zap" },
          { metric: "Lighthouse Score", improvement: "98/100", icon: "Award" },
          { metric: "Uptime", improvement: "99.9%", icon: "Shield" },
          { metric: "Response Time", improvement: "<200ms", icon: "Clock" }
        ],
        codeSnippet: `// Dynamic SEO optimization for product pages
export async function generateMetadata({ params }) {
  const product = await getProduct(params.id);
  
  return {
    title: \`\${product.name} - Best Price in India | TechStart\`,
    description: \`Buy \${product.name} at best price. \${product.features.join(', ')}. Free shipping across India.\`,
    keywords: product.seoKeywords,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.image]
    }
  };
}`
      },
      testimonial: {
        clientName: "Priya Patel",
        clientPosition: "Founder & CEO",
        company: "TechStart Solutions",
        clientImage: "https://randomuser.me/api/portraits/women/32.jpg",
        rating: 5,
        quote: "Working with Sumit was a game-changer for our business. The e-commerce platform he built not only looks amazing but performs exceptionally well. Our conversion rates improved by 40% within the first month of launch.",
        highlights: [
          "Deep technical expertise in modern web technologies",
          "Excellent project management and communication",
          "Delivered on time and within budget",
          "Provided comprehensive training and documentation"
        ]
      },
      liveUrl: "https://techstart-demo.com",
      githubUrl: "https://github.com/sumitdev/techstart-ecommerce"
    },
    {
      id: 3,
      title: "GrowthHack Startup Platform",
      client: "GrowthHack Inc",
      category: "Startup",
      year: "2023",
      icon: "Rocket",
      primaryColor: "#10B981",
      secondaryColor: "#059669",
      featured: false,
      duration: "6 months",
      shortDescription: "Comprehensive startup platform with advanced analytics, achieving first-page rankings for competitive SaaS keywords.",
      description: `GrowthHack Inc needed a comprehensive platform to showcase their SaaS products and generate leads. The challenge was competing in the highly competitive SaaS market while building a scalable platform for future growth.\n\nThe solution involved creating a modern, fast-loading platform with advanced SEO strategies, content marketing integration, and lead generation optimization.`,
      images: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      features: [
        "Advanced analytics dashboard",
        "Lead generation optimization",
        "Content management system",
        "A/B testing framework",
        "Integration with marketing tools",
        "Multi-tenant architecture"
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "Vercel"],
      keyMetrics: [
        { label: "Lead Generation", value: "300%" },
        { label: "Organic Traffic", value: "450%" },
        { label: "Conversion Rate", value: "6.2%" }
      ],
      results: {
        before: [
          { metric: "Monthly Leads", value: "50 leads" },
          { metric: "Organic Traffic", value: "500 visits/month" },
          { metric: "Conversion Rate", value: "1.8%" },
          { metric: "Customer Acquisition Cost", value: "₹5,000" }
        ],
        after: [
          { metric: "Monthly Leads", value: "200 leads" },
          { metric: "Organic Traffic", value: "2,750 visits/month" },
          { metric: "Conversion Rate", value: "6.2%" },
          { metric: "Customer Acquisition Cost", value: "₹1,200" }
        ],
        achievements: [
          { label: "MRR Growth", value: "400%" },
          { label: "Customer Retention", value: "92%" },
          { label: "NPS Score", value: "68" }
        ],
        timeline: [
          { phase: "Market Research", description: "Competitor analysis and keyword research", duration: "4 weeks" },
          { phase: "MVP Development", description: "Core platform features", duration: "8 weeks" },
          { phase: "Advanced Features", description: "Analytics and automation", duration: "6 weeks" },
          { phase: "SEO & Marketing", description: "Content strategy and optimization", duration: "6 weeks" }
        ]
      },
      technical: {
        challenges: [
          {
            problem: "Complex Data Visualization",
            description: "Need to display complex analytics in user-friendly format",
            solution: "Built custom React components with D3.js for interactive charts and real-time data updates"
          },
          {
            problem: "Multi-tenant Architecture",
            description: "Platform needed to serve multiple clients with isolated data",
            solution: "Implemented row-level security with PostgreSQL and tenant-aware middleware"
          }
        ],
        performance: [
          { metric: "Database Queries", improvement: "<50ms", icon: "Database" },
          { metric: "API Response", improvement: "<100ms", icon: "Zap" },
          { metric: "Bundle Size", improvement: "45% smaller", icon: "Package" },
          { metric: "Memory Usage", improvement: "30% less", icon: "Cpu" }
        ],
        codeSnippet: `// Multi-tenant middleware implementation
export function withTenant(handler) {
  return async (req, res) => {
    const tenantId = req.headers['x-tenant-id'];
    
    if (!tenantId) {
      return res.status(400).json({ error: 'Tenant ID required' });
    }
    
    // Set tenant context for database queries
    req.tenant = await getTenant(tenantId);
    
    return handler(req, res);
  };
}`
      },
      testimonial: {
        clientName: "Arjun Mehta",
        clientPosition: "CTO",
        company: "GrowthHack Inc",
        clientImage: "https://randomuser.me/api/portraits/men/28.jpg",
        rating: 5,
        quote: "Sumit's technical expertise and SEO knowledge helped us achieve first-page rankings for highly competitive keywords. The platform he built scales beautifully and has been instrumental in our 400% growth.",
        highlights: [
          "Strong technical architecture and scalability focus",
          "Excellent SEO results in competitive market",
          "Proactive communication and problem-solving",
          "Delivered complex features on schedule"
        ]
      },
      liveUrl: "https://growthhack-demo.com",
      githubUrl: "https://github.com/sumitdev/growthhack-platform"
    },
    {
      id: 4,
      title: "Corporate Solutions Hub",
      client: "Enterprise Corp",
      category: "Corporate",
      year: "2023",
      icon: "Building2",
      primaryColor: "#1E40AF",
      secondaryColor: "#3B82F6",
      featured: false,
      duration: "5 months",
      shortDescription: "Enterprise-grade corporate website with advanced security features and multi-language support for global operations.",
      description: `Enterprise Corp required a sophisticated corporate website to represent their global operations. The challenge was creating a professional, secure platform that could handle multiple languages and complex content management needs.\n\nThe solution involved building a robust CMS with advanced security features, multi-language support, and integration with their existing enterprise systems.`,
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
      ],
      features: [
        "Multi-language content management",
        "Advanced security implementation",
        "Enterprise system integration",
        "Document management system",
        "Employee portal",
        "Investor relations section"
      ],
      technologies: ["WordPress", "Custom PHP", "MySQL", "LDAP", "SSL", "CDN"],
      keyMetrics: [
        { label: "Security Score", value: "A+" },
        { label: "Uptime", value: "99.9%" },
        { label: "Page Speed", value: "94/100" }
      ],
      results: {
        before: [
          { metric: "Security Rating", value: "C" },
          { metric: "Page Load Time", value: "3.8 seconds" },
          { metric: "Mobile Score", value: "62/100" },
          { metric: "SEO Score", value: "45/100" }
        ],
        after: [
          { metric: "Security Rating", value: "A+" },
          { metric: "Page Load Time", value: "1.2 seconds" },
          { metric: "Mobile Score", value: "94/100" },
          { metric: "SEO Score", value: "96/100" }
        ],
        achievements: [
          { label: "Security Compliance", value: "100%" },
          { label: "Global Reach", value: "15 countries" },
          { label: "User Satisfaction", value: "4.7/5" }
        ],
        timeline: [
          { phase: "Security Audit", description: "Comprehensive security assessment", duration: "2 weeks" },
          { phase: "Architecture Design", description: "System architecture and planning", duration: "3 weeks" },
          { phase: "Development", description: "Core development and integrations", duration: "12 weeks" },
          { phase: "Testing & Deployment", description: "Security testing and go-live", duration: "3 weeks" }
        ]
      },
      technical: {
        challenges: [
          {
            problem: "Enterprise Security Requirements",
            description: "Needed to meet strict corporate security standards",
            solution: "Implemented multi-layer security with WAF, SSL, and regular security audits achieving A+ rating"
          },
          {
            problem: "Legacy System Integration",
            description: "Integration with existing LDAP and ERP systems",
            solution: "Built custom APIs and middleware for seamless integration with minimal disruption"
          }
        ],
        performance: [
          { metric: "Security Rating", improvement: "A+", icon: "Shield" },
          { metric: "Compliance", improvement: "100%", icon: "CheckCircle" },
          { metric: "Uptime", improvement: "99.9%", icon: "Activity" },
          { metric: "Response Time", improvement: "1.2s", icon: "Clock" }
        ],
        codeSnippet: `// Enterprise security middleware
class SecurityMiddleware {
  static authenticate(req, res, next) {
    const token = req.headers.authorization;
    
    if (!this.validateToken(token)) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    // Log security event
    SecurityLogger.log('auth_success', req.ip, req.user);
    
    next();
  }
  
  static validateToken(token) {
    // JWT validation with enterprise standards
    return jwt.verify(token, process.env.JWT_SECRET);
  }
}`
      },
      testimonial: {
        clientName: "Sarah Johnson",
        clientPosition: "IT Director",
        company: "Enterprise Corp",
        clientImage: "https://randomuser.me/api/portraits/women/45.jpg",
        rating: 5,
        quote: "Sumit delivered a world-class corporate website that exceeded our security and performance requirements. His attention to detail and understanding of enterprise needs is exceptional.",
        highlights: [
          "Exceptional security implementation",
          "Seamless integration with existing systems",
          "Professional project management",
          "Comprehensive documentation and training"
        ]
      },
      liveUrl: "https://enterprise-corp-demo.com",
      githubUrl: null
    },
    {
      id: 5,
      title: "Local Business Directory",
      client: "Mumbai Business Hub",
      category: "Local Business",
      year: "2023",
      icon: "MapPin",
      primaryColor: "#DC2626",
      secondaryColor: "#EF4444",
      featured: false,
      duration: "3 months",
      shortDescription: "Comprehensive local business directory with advanced search and mapping features, boosting local SEO for 200+ businesses.",
      description: `Mumbai Business Hub needed a comprehensive directory platform to connect local businesses with customers. The challenge was creating a user-friendly platform with powerful search capabilities and local SEO optimization.\n\nThe solution involved building a feature-rich directory with advanced filtering, mapping integration, and comprehensive SEO optimization for local search visibility.`,
      images: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
      ],
      features: [
        "Advanced business search and filtering",
        "Interactive map integration",
        "Business profile management",
        "Review and rating system",
        "Local SEO optimization",
        "Mobile-responsive design"
      ],
      technologies: ["WordPress", "Custom PHP", "Google Maps API", "MySQL", "AJAX"],
      keyMetrics: [
        { label: "Listed Businesses", value: "200+" },
        { label: "Monthly Searches", value: "15K" },
        { label: "User Engagement", value: "4.2 min" }
      ],
      results: {
        before: [
          { metric: "Listed Businesses", value: "0" },
          { metric: "Monthly Visitors", value: "0" },
          { metric: "Search Visibility", value: "0%" },
          { metric: "Business Inquiries", value: "0" }
        ],
        after: [
          { metric: "Listed Businesses", value: "200+" },
          { metric: "Monthly Visitors", value: "25,000" },
          { metric: "Search Visibility", value: "85%" },
          { metric: "Business Inquiries", value: "500/month" }
        ],
        achievements: [
          { label: "Platform Growth", value: "200+ businesses" },
          { label: "User Satisfaction", value: "4.6/5" },
          { label: "Revenue Generated", value: "₹12L/month" }
        ],
        timeline: [
          { phase: "Market Research", description: "Local business analysis and requirements", duration: "2 weeks" },
          { phase: "Platform Development", description: "Core directory features", duration: "8 weeks" },
          { phase: "SEO Implementation", description: "Local SEO and content optimization", duration: "2 weeks" },
          { phase: "Launch & Marketing", description: "Platform launch and business onboarding", duration: "2 weeks" }
        ]
      },
      technical: {
        challenges: [
          {
            problem: "Complex Search Functionality",
            description: "Users needed to find businesses by multiple criteria",
            solution: "Implemented advanced search with AJAX filtering, geolocation, and category-based results"
          },
          {
            problem: "Local SEO Optimization",
            description: "Each business needed individual SEO optimization",
            solution: "Created dynamic SEO templates with local schema markup for all business listings"
          }
        ],
        performance: [
          { metric: "Search Speed", improvement: "<500ms", icon: "Search" },
          { metric: "Map Loading", improvement: "<2s", icon: "Map" },
          { metric: "Mobile Score", improvement: "92/100", icon: "Smartphone" },
          { metric: "Local SEO", improvement: "95/100", icon: "MapPin" }
        ],
        codeSnippet: `// Local business schema implementation
function generateBusinessSchema($business) {
  return [
    '@context' => 'https://schema.org',
    '@type' => 'LocalBusiness',
    'name' => $business->name,
    'address' => [
      '@type' => 'PostalAddress',
      'streetAddress' => $business->address,
      'addressLocality' => $business->city,
      'addressRegion' => $business->state,
      'postalCode' => $business->pincode
    ],
    'telephone' => $business->phone,
    'url' => $business->website,
    'aggregateRating' => [
      '@type' => 'AggregateRating',
      'ratingValue' => $business->rating,
      'reviewCount' => $business->review_count
    ]
  ];
}`
      },
      testimonial: {
        clientName: "Vikram Singh",
        clientPosition: "Director",
        company: "Mumbai Business Hub",
        clientImage: "https://randomuser.me/api/portraits/men/38.jpg",
        rating: 5,
        quote: "The directory platform Sumit created has become the go-to resource for local businesses in Mumbai. The SEO optimization helped our listed businesses get more visibility and customers.",
        highlights: [
          "Excellent understanding of local business needs",
          "Powerful search and filtering capabilities",
          "Strong local SEO implementation",
          "Great ongoing support and updates"
        ]
      },
      liveUrl: "https://mumbai-business-hub-demo.com",
      githubUrl: null
    }
  ];

  // Filter projects based on current filters
  const filteredProjects = allProjects.filter(project => {
    const categoryMatch = filters.category === 'All' || project.category === filters.category;
    const techMatch = filters.technology === 'All' || project.technologies.includes(filters.technology);
    return categoryMatch && techMatch;
  });

  // Generate orbital positions for projects
  const generateOrbitalPositions = (projects) => {
    return projects.map((_, index) => {
      const angle = (index * 360) / projects.length;
      const radius = 35; // Percentage from center
      const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
      const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
      return { x, y };
    });
  };

  const orbitalPositions = generateOrbitalPositions(filteredProjects);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    if (project) {
      setShowDetails(true);
    }
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <motion.div
            className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-text-secondary"
          >
            Initializing Galaxy...
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Portfolio Showcase Galaxy - SumitDev | Interactive Project Explorer</title>
        <meta name="description" content="Explore Sumit's portfolio in an immersive 3D galaxy interface. Discover case studies, technical achievements, and client success stories with interactive project planets." />
        <meta name="keywords" content="portfolio, web development, SEO projects, Mumbai developer, React projects, WordPress development" />
        <meta property="og:title" content="Portfolio Showcase Galaxy - SumitDev" />
        <meta property="og:description" content="Interactive 3D portfolio showcasing web development projects with measurable results" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        <Header />
        
        {/* Galaxy Background */}
        <GalaxyBackground selectedProject={selectedProject} />
        
        {/* Main Content */}
        <main className="relative z-10 pt-16">
          {/* Hero Section */}
          <section className="relative py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="container mx-auto px-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                Portfolio <span className="text-gradient-primary">Galaxy</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Navigate through an interactive universe of projects where each planet represents a unique success story. 
                Explore detailed case studies, technical achievements, and measurable business results.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  iconName="Rocket"
                  iconPosition="left"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Start Exploration
                </Button>
                <Button
                  variant="outline"
                  iconName="Download"
                  iconPosition="left"
                >
                  Download Portfolio PDF
                </Button>
              </div>
            </motion.div>
          </section>

          {/* Portfolio Content */}
          <section className="relative min-h-screen">
            {viewMode === 'galaxy' ? (
              <div className="relative w-full h-screen">
                {/* Project Planets */}
                <AnimatePresence>
                  {filteredProjects.map((project, index) => (
                    <ProjectPlanet
                      key={project.id}
                      project={project}
                      isActive={selectedProject?.id === project.id}
                      onSelect={handleProjectSelect}
                      position={orbitalPositions[index]}
                      index={index}
                    />
                  ))}
                </AnimatePresence>

                {/* Center Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-dramatic"
                    animate={{
                      rotate: 360,
                      scale: selectedProject ? 1.2 : 1
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 0.5 }
                    }}
                  >
                    <Icon name="Code" size={40} className="text-white" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center"
                  >
                    <p className="text-sm font-medium text-text-primary">SumitDev</p>
                    <p className="text-xs text-text-secondary">Portfolio Hub</p>
                  </motion.div>
                </div>
              </div>
            ) : (
              <ProjectGrid
                projects={filteredProjects}
                onProjectSelect={handleProjectSelect}
              />
            )}
          </section>
        </main>

        {/* Galaxy Controls */}
        <GalaxyControls
          selectedProject={selectedProject}
          projects={filteredProjects}
          onProjectSelect={handleProjectSelect}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          filters={filters}
          onFilterChange={setFilters}
        />

        {/* Project Details Modal */}
        <AnimatePresence>
          {showDetails && selectedProject && (
            <ProjectDetails
              project={selectedProject}
              onClose={handleCloseDetails}
            />
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <section className="relative z-10 py-20 bg-surface/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Portfolio Impact
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Measurable results across all projects demonstrate the power of combining technical expertise with strategic SEO implementation.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Projects Completed", value: "25+", icon: "CheckCircle" },
                { label: "Average Traffic Increase", value: "350%", icon: "TrendingUp" },
                { label: "Client Satisfaction", value: "4.9/5", icon: "Star" },
                { label: "Years Experience", value: "5+", icon: "Calendar" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-card rounded-xl border border-border shadow-subtle"
                >
                  <Icon name={stat.icon} size={32} className="mx-auto mb-3 text-secondary" />
                  <div className="text-2xl font-bold text-text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PortfolioShowcaseGalaxy;