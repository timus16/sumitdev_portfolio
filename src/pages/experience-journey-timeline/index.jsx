import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import TimelineNode from './components/TimelineNode';
import SkillConstellation from './components/SkillConstellation';
import TimelineBackground from './components/TimelineBackground';
import CertificationBadges from './components/CertificationBadges';
import TimelineNavigation from './components/TimelineNavigation';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ExperienceJourneyTimeline = () => {
  const [activeExperience, setActiveExperience] = useState(null);
  const [expandedNodes, setExpandedNodes] = useState(new Set());
  const [activeSkills, setActiveSkills] = useState([]);
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"]
  });

  // Mock data for experiences
  const experiences = [
    {
      id: 'exp-1',
      role: 'Senior WordPress Developer',
      company: 'TechCorp Solutions',
      duration: 'Jan 2023 - Present',
      location: 'Mumbai, Maharashtra',
      icon: 'Code',
      description: `Leading WordPress development projects with focus on performance optimization and SEO implementation. Specialized in creating custom themes and plugins while ensuring technical SEO best practices.`,
      achievements: [
        {
          metric: '400% Traffic Increase',
          description: 'Mumbai restaurant chain organic traffic growth',
          impact: 'Achieved through comprehensive technical SEO audit and implementation of structured data, page speed optimization, and content strategy.'
        },
        {
          metric: '8s to 2s Load Time',
          description: 'E-commerce site performance optimization',
          impact: 'Implemented lazy loading, image optimization, caching strategies, and code minification resulting in 75% improvement in Core Web Vitals.'
        },
        {
          metric: '15+ Client Projects',
          description: 'Successfully delivered WordPress solutions',
          impact: 'Ranging from small business websites to complex e-commerce platforms with custom functionality and integrations.'
        },
        {
          metric: '95+ PageSpeed Score',
          description: 'Average performance score achieved',
          impact: 'Consistent high performance across all delivered projects through optimization techniques and best practices.'
        }
      ],
      skills: ['WordPress', 'PHP', 'JavaScript', 'Technical SEO', 'MySQL', 'HTML5', 'CSS3', 'Google Analytics', 'Page Speed Optimization', 'Schema Markup'],
      projects: [
        {
          name: 'Mumbai Spice Restaurant Chain',
          description: 'Multi-location restaurant website with online ordering',
          image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
          result: '400% organic traffic increase',
          liveUrl: 'https://example.com'
        },
        {
          name: 'Fashion Forward E-commerce',
          description: 'Custom WooCommerce store with advanced filtering',
          image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
          result: '75% faster load times',
          liveUrl: 'https://example.com'
        }
      ],
      testimonial: {
        content: `Sumit transformed our website performance completely. Our organic traffic increased by 400% within 6 months, and our customers love the fast loading times.`,
        author: 'Rajesh Sharma',
        position: 'Owner, Mumbai Spice Chain'
      },
      caseStudyUrl: '/assets/case-studies/mumbai-spice-case-study.pdf'
    },
    {
      id: 'exp-2',
      role: 'Full Stack Web Developer',
      company: 'Digital Innovations Ltd',
      duration: 'Mar 2021 - Dec 2022',
      location: 'Mumbai, Maharashtra',
      icon: 'Globe',
      description: `Developed responsive web applications using modern technologies. Focused on creating user-friendly interfaces while implementing robust backend solutions and SEO optimization strategies.`,
      achievements: [
        {
          metric: '25+ Websites Delivered',
          description: 'Successfully completed diverse web projects',
          impact: 'Delivered projects ranging from corporate websites to e-commerce platforms, all optimized for search engines and user experience.'
        },
        {
          metric: '50% Faster Development',
          description: 'Improved development workflow efficiency',
          impact: 'Implemented reusable component libraries and automated deployment processes, reducing project delivery time significantly.'
        },
        {
          metric: '98% Client Satisfaction',
          description: 'Maintained high client satisfaction rate',
          impact: 'Achieved through clear communication, timely delivery, and post-launch support resulting in repeat business and referrals.'
        }
      ],
      skills: ['React', 'Node.js', 'WordPress', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'SEO', 'Google Analytics', 'Git'],
      projects: [
        {
          name: 'Corporate Solutions Platform',
          description: 'B2B service platform with client portal',
          image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
          result: '60% increase in lead generation',
          liveUrl: 'https://example.com'
        }
      ],
      testimonial: {
        content: `Working with Sumit was a game-changer for our digital presence. His technical expertise and attention to SEO details helped us rank #1 for our target keywords.`,
        author: 'Priya Patel',
        position: 'Marketing Director, Digital Innovations'
      },
      caseStudyUrl: '/assets/case-studies/digital-innovations-case-study.pdf'
    },
    {
      id: 'exp-3',
      role: 'WordPress Developer',
      company: 'WebCraft Agency',
      duration: 'Jun 2019 - Feb 2021',
      location: 'Mumbai, Maharashtra',
      icon: 'Wordpress',
      description: `Specialized in WordPress theme development and customization. Built custom plugins and implemented SEO best practices to improve website visibility and performance.`,
      achievements: [
        {
          metric: '40+ Custom Themes',
          description: 'Developed responsive WordPress themes',
          impact: 'Created pixel-perfect, mobile-responsive themes with focus on performance and SEO optimization for various industries.'
        },
        {
          metric: '10+ Custom Plugins',
          description: 'Built specialized WordPress plugins',
          impact: 'Developed custom functionality plugins for client-specific requirements, improving website functionality and user experience.'
        },
        {
          metric: '200% SEO Improvement',
          description: 'Average organic ranking improvement',
          impact: 'Implemented technical SEO strategies including schema markup, site speed optimization, and content structure improvements.'
        }
      ],
      skills: ['WordPress', 'PHP', 'JavaScript', 'jQuery', 'CSS3', 'HTML5', 'MySQL', 'SEO', 'Photoshop', 'Git'],
      projects: [
        {
          name: 'Healthcare Clinic Network',
          description: 'Multi-location healthcare website with appointment booking',
          image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
          result: '300% increase in online appointments',
          liveUrl: 'https://example.com'
        }
      ],
      testimonial: {
        content: `Sumit's WordPress expertise helped us create a professional online presence that significantly increased our patient bookings and improved our local search visibility.`,
        author: 'Dr. Amit Verma',position: 'Director, HealthCare Plus'
      },
      caseStudyUrl: '/assets/case-studies/healthcare-case-study.pdf'
    },
    {
      id: 'exp-4',role: 'Junior Web Developer',company: 'StartUp Hub',duration: 'Jan 2018 - May 2019',location: 'Mumbai, Maharashtra',icon: 'Rocket',
      description: `Started my professional journey focusing on front-end development and basic SEO implementation. Learned industry best practices while contributing to various startup projects.`,
      achievements: [
        {
          metric: '15+ Landing Pages',description: 'Created high-converting landing pages',impact: 'Designed and developed responsive landing pages with focus on conversion optimization and basic SEO principles.'
        },
        {
          metric: '5+ Startup Projects',description: 'Contributed to early-stage startup websites',impact: 'Helped startups establish their online presence with modern, responsive websites optimized for search engines.'
        },
        {
          metric: '100% Learning Growth',description: 'Rapid skill development and certification',impact: 'Completed multiple online certifications in web development, SEO, and digital marketing while working on real projects.'
        }
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'WordPress', 'Basic SEO', 'Photoshop', 'Git'],
      projects: [
        {
          name: 'Tech Startup Portfolio',description: 'Modern startup website with interactive elements',image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',result: '150% increase in investor inquiries',liveUrl: 'https://example.com'
        }
      ],
      testimonial: {
        content: `Sumit showed exceptional learning ability and dedication. His fresh perspective and eagerness to implement SEO best practices made him a valuable team member.`,
        author: 'Neha Singh',position: 'CTO, StartUp Hub'
      },
      caseStudyUrl: '/assets/case-studies/startup-case-study.pdf'
    }
  ];

  // Mock certifications data
  const certifications = [
    {
      id: 'cert-1',
      name: 'Google Analytics Certified',
      issuer: 'Google',
      type: 'Analytics',
      year: '2023',
      issueDate: 'March 2023',
      expiryDate: 'March 2025',
      verified: true,
      credentialId: 'GA-2023-SM-001',
      skills: ['Google Analytics', 'Data Analysis', 'Conversion Tracking'],
      verificationUrl: 'https://skillshop.exceedlms.com/student/path/508845',
      certificateUrl: '/assets/certificates/google-analytics.pdf'
    },
    {
      id: 'cert-2',
      name: 'WordPress Developer Certification',
      issuer: 'WordPress.org',
      type: 'WordPress',
      year: '2022',
      issueDate: 'August 2022',
      verified: true,
      credentialId: 'WP-DEV-2022-001',
      skills: ['WordPress', 'PHP', 'Custom Themes', 'Plugin Development'],
      verificationUrl: 'https://wordpress.org/certification',
      certificateUrl: '/assets/certificates/wordpress-dev.pdf'
    },
    {
      id: 'cert-3',
      name: 'Technical SEO Specialist',
      issuer: 'SEMrush Academy',
      type: 'SEO',
      year: '2023',
      issueDate: 'January 2023',
      verified: true,
      credentialId: 'SEO-TECH-2023-SM',
      skills: ['Technical SEO', 'Site Audits', 'Schema Markup', 'Core Web Vitals'],
      verificationUrl: 'https://www.semrush.com/academy/certificates',
      certificateUrl: '/assets/certificates/technical-seo.pdf'
    },
    {
      id: 'cert-4',
      name: 'Google PageSpeed Insights',
      issuer: 'Google',
      type: 'Performance',
      year: '2022',
      issueDate: 'November 2022',
      verified: true,
      credentialId: 'PSI-2022-SM-003',
      skills: ['Page Speed', 'Core Web Vitals', 'Performance Optimization'],
      verificationUrl: 'https://developers.google.com/speed/pagespeed/insights/',
      certificateUrl: '/assets/certificates/pagespeed.pdf'
    }
  ];

  // Update active skills based on visible experiences
  useEffect(() => {
    if (activeExperience) {
      const experience = experiences.find(exp => exp.id === activeExperience);
      if (experience) {
        setActiveSkills(experience.skills);
      }
    }
  }, [activeExperience]);

  // Handle experience node interactions
  const handleNodeClick = (experienceId) => {
    setActiveExperience(experienceId);
  };

  const handleToggleExpand = (experienceId) => {
    setExpandedNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(experienceId)) {
        newSet.delete(experienceId);
      } else {
        newSet.add(experienceId);
      }
      return newSet;
    });
  };

  const handleCertificationClick = (certification) => {
    if (certification.verificationUrl) {
      window.open(certification.verificationUrl, '_blank');
    }
  };

  const handleNavigateToExperience = (experienceId) => {
    setActiveExperience(experienceId);
    const element = document.getElementById(`experience-${experienceId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Get all unique skills for constellation
  const allSkills = [...new Set(experiences.flatMap(exp => exp.skills))];

  return (
    <>
      <Helmet>
        <title>Experience Journey Timeline - SumitDev Portfolio</title>
        <meta name="description" content="Explore Sumit Gupta's professional journey through an immersive 3D timeline showcasing career progression, achievements, and technical growth in web development and SEO." />
        <meta name="keywords" content="Sumit Gupta, web developer, SEO expert, WordPress developer, career timeline, professional experience, Mumbai developer" />
        <meta property="og:title" content="Experience Journey Timeline - SumitDev Portfolio" />
        <meta property="og:description" content="Interactive 3D timeline showcasing professional growth from junior developer to senior WordPress and SEO specialist." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sumitdev.com/experience-journey-timeline" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <TimelineBackground />
        
        {/* Main Content */}
        <main className="relative z-10 pt-20">
          {/* Hero Section */}
          <section className="relative py-16 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Icon name="MapPin" size={16} />
                  Professional Journey
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold font-headline text-primary mb-6">
                  Experience
                  <span className="block text-gradient-primary">Timeline</span>
                </h1>
                
                <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
                  Journey through my professional evolution from junior developer to senior WordPress and SEO specialist. Each milestone represents growth, learning, and measurable impact.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg">
                    <Icon name="Calendar" size={16} className="text-accent" />
                    <span className="text-sm font-medium">6+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg">
                    <Icon name="Award" size={16} className="text-success" />
                    <span className="text-sm font-medium">50+ Projects Delivered</span>
                  </div>
                  <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg">
                    <Icon name="TrendingUp" size={16} className="text-secondary" />
                    <span className="text-sm font-medium">400% Max Traffic Growth</span>
                  </div>
                </div>

                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                  onClick={() => window.open('/assets/resume.pdf', '_blank')}
                  className="mr-4"
                >
                  Download Resume
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => window.location.href = 'mailto:sumit@example.com'}
                >
                  Let's Connect
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Timeline Section */}
          <section ref={timelineRef} className="relative py-16 px-4">
            <div className="max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-accent to-secondary transform -translate-x-1/2 hidden md:block"></div>
              
              {/* Mobile Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-accent to-secondary md:hidden"></div>

              {/* Experience Nodes */}
              <div className="space-y-0">
                {experiences.map((experience, index) => (
                  <div key={experience.id} id={`experience-${experience.id}`}>
                    <TimelineNode
                      experience={experience}
                      index={index}
                      isActive={activeExperience === experience.id}
                      onNodeClick={handleNodeClick}
                      isExpanded={expandedNodes.has(experience.id)}
                      onToggleExpand={handleToggleExpand}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="relative py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold font-headline text-primary mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
                  Let's discuss how my experience can help grow your business. From WordPress development to SEO optimization, I'm here to deliver results.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() => window.location.href = '/services-collaboration-hub'}
                  >
                    View Services
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    onClick={() => window.location.href = 'mailto:sumit@example.com?subject=Project Discussion'}
                  >
                    Schedule Call
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Fixed UI Elements */}
        <SkillConstellation 
          activeSkills={activeSkills} 
          allSkills={allSkills} 
        />
        
        <CertificationBadges 
          certifications={certifications}
          onCertificationClick={handleCertificationClick}
        />
        
        <TimelineNavigation
          experiences={experiences}
          activeExperience={activeExperience}
          onNavigateToExperience={handleNavigateToExperience}
          scrollProgress={scrollYProgress.get()}
        />
      </div>
    </>
  );
};

export default ExperienceJourneyTimeline;