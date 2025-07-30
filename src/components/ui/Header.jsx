import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/3d-interactive-homepage', icon: 'Home' },
    { name: 'Experience', path: '/experience-journey-timeline', icon: 'Clock' },
    { name: 'Skills', path: '/skills-expertise-hub', icon: 'Code' },
    {
      name: 'Portfolio',
      icon: 'Briefcase',
      dropdown: [
        { name: 'Showcase Galaxy', path: '/portfolio-showcase-galaxy', icon: 'Star' },
        { name: '3D Portfolio', path: '/portfolio-3d', icon: 'Globe' },
        { name: 'Fintech App', path: '/portfolio-3d/project-1', icon: 'Activity' },
        { name: 'E-commerce Galaxy', path: '/portfolio-3d/project-2', icon: 'ShoppingCart' },
        { name: 'Data Dashboard 3D', path: '/portfolio-3d/project-3', icon: 'BarChart2' },
      ]
    },
    { name: 'Blog', path: '/blog', icon: 'BookOpen' },
    { name: 'Results', path: '/seo-results-dashboard', icon: 'TrendingUp' }
  ];

  const moreItems = [
    { name: 'Services', path: '/services-collaboration-hub', icon: 'Users' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[49] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}
      <header
        className={`fixed top-0 left-0 right-0 z-fixed transition-all duration-normal ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-brand shadow-subtle border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full">
          <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo */}
          <Link 
            to="/3d-interactive-homepage" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-floating group-hover:shadow-dramatic transition-all duration-normal">
                <span className="text-white font-bold text-lg font-headline">S</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-slow"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold font-headline text-primary group-hover:text-gradient-primary transition-all duration-normal">
                SumitDev
              </h1>
              <p className="text-xs text-text-secondary font-body -mt-1">
                SEO-Driven Development
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium font-body text-text-primary hover:bg-surface hover:text-primary transition-all duration-normal">
                    <Icon name={item.icon} size={18} />
                    <span>{item.name}</span>
                    <Icon name="ChevronDown" size={16} className="group-hover:rotate-180 transition-transform duration-normal" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-floating opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-normal z-dropdown">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={`flex items-center space-x-3 px-4 py-3 text-sm font-body transition-all duration-normal first:rounded-t-lg last:rounded-b-lg ${
                          isActivePath(sub.path)
                            ? 'bg-primary text-primary-foreground'
                            : 'text-text-primary hover:bg-surface'
                        }`}
                      >
                        <Icon name={sub.icon} size={16} />
                        <span>{sub.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium font-body transition-all duration-normal ${
                    isActivePath(item.path)
                      ? 'bg-primary text-primary-foreground shadow-subtle'
                      : 'text-text-primary hover:bg-surface hover:text-primary'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.name}</span>
                </Link>
              )
            ))}
            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium font-body text-text-primary hover:bg-surface hover:text-primary transition-all duration-normal">
                <Icon name="MoreHorizontal" size={18} />
                <span>More</span>
                <Icon name="ChevronDown" size={16} className="group-hover:rotate-180 transition-transform duration-normal" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-floating opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-normal z-dropdown">
                {moreItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-body transition-all duration-normal first:rounded-t-lg last:rounded-b-lg ${
                      isActivePath(item.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-text-primary hover:bg-surface'
                    }`}
                  >
                    <Icon name={item.icon} size={16} />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA Button & Social Icon */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://x.com/sumit23679"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SumitDev on X (Twitter)"
              className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
            >
              <Icon name="Twitter" size={22} />
            </a>
            <Button 
              variant="outline" 
              size="sm"
              className="font-cta"
              onClick={() => {
                window.open('https://wa.me/9137021658?text=Hi%20Sumit%2C%20I%20am%20interested%20in%20a%20Free%20SEO%20Audit%20for%20my%20website!', '_blank');
              }}
            >
              Free SEO Audit (WhatsApp)
            </Button>
            <Button 
              variant="default" 
              size="sm"
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-cta"
              onClick={() => {
                window.open('https://wa.me/9137021658?text=Hi%20Sumit%2C%20I%20want%20to%20start%20a%20project%20with%20you!', '_blank');
              }}
            >
              Start Project (WhatsApp)
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-surface transition-all duration-normal"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="transition-transform duration-normal"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden fixed top-16 left-0 right-0 z-[50] transition-all duration-300 overflow-hidden ${
            isMenuOpen
              ? 'max-h-[80vh] opacity-100 border-t border-border bg-background/95 backdrop-blur-brand translate-y-0'
              : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
          }`}
          style={{ willChange: 'opacity, transform' }}
        >
          <nav className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="group">
                  <button className="flex items-center space-x-2 px-4 py-3 rounded-lg font-medium font-body text-text-primary hover:bg-surface hover:text-primary w-full">
                    <Icon name={item.icon} size={20} />
                    <span>{item.name}</span>
                    <Icon name="ChevronDown" size={16} className="group-hover:rotate-180 transition-transform duration-normal" />
                  </button>
                  <div className="pl-6 mt-1 space-y-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={closeMenu}
                        className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-sm font-body transition-all duration-normal ${
                          isActivePath(sub.path)
                            ? 'bg-primary text-primary-foreground'
                            : 'text-text-primary hover:bg-surface'
                        }`}
                      >
                        <Icon name={sub.icon} size={16} />
                        <span>{sub.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium font-body transition-all duration-normal ${
                    isActivePath(item.path)
                      ? 'bg-primary text-primary-foreground shadow-subtle'
                      : 'text-text-primary hover:bg-surface'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.name}</span>
                </Link>
              )
            ))}
            {/* Mobile CTAs */}
            <div className="pt-4 space-y-3 border-t border-border">
              <Button
                variant="outline"
                fullWidth
                className="font-cta"
                onClick={closeMenu}
              >
                Free SEO Audit
              </Button>
              <Button
                variant="default"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-cta"
                onClick={closeMenu}
              >
                Start Project
              </Button>
            </div>
          </nav>
        </div>
        {/* Close the w-full wrapper div here */}
      </div>
    </header>
  </>
  );
};

export default Header;