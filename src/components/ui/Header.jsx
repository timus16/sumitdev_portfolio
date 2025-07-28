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
    { name: 'Portfolio', path: '/portfolio-showcase-galaxy', icon: 'Briefcase' },
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
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
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

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="font-cta"
              onClick={() => {
                window.location.href = 'mailto:sumitg7@zohomail.in?subject=Free SEO Audit Request';
              }}
            >
              Free SEO Audit
            </Button>
            <Button 
              variant="default" 
              size="sm"
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-cta"
              onClick={() => {
                const form = document.querySelector('#footer-contact-form');
                if (form) form.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-surface transition-all duration-normal"
            aria-label="Toggle menu"
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
          className={`lg:hidden transition-all duration-normal overflow-hidden ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 border-t border-border bg-background/95 backdrop-blur-brand' :'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 py-4 space-y-2">
            {[...navigationItems, ...moreItems].map((item) => (
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
      </div>
    </header>
  );
};

export default Header;