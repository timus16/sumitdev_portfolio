import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ErrorBoundary from "./components/ErrorBoundary";
// Add your imports here
import ThreeDInteractiveHomepage from "./pages/3d-interactive-homepage";
import ExperienceJourneyTimeline from "./pages/experience-journey-timeline";
import PortfolioShowcaseGalaxy from "./pages/portfolio-showcase-galaxy";
import SkillsExpertiseHub from "./pages/skills-expertise-hub";
import SeoResultsDashboard from "./pages/seo-results-dashboard";
import ServicesCollaborationHub from "./pages/services-collaboration-hub";
import NotFound from "./pages/NotFound";
// Blog/Case Study Pages
import WordPressSEOCaseStudy from "./pages/blog/wordpress-seo-case-study";
import TechnicalSEOAuditSuccess from "./pages/blog/technical-seo-audit-success";
import PerformanceOptimizationGuide from "./pages/blog/performance-optimization-guide";
import ReactNativeAppCaseStudy from "./pages/blog/react-native-app-case-study";
import FlutterVsNativePerformance from "./pages/blog/flutter-vs-native-performance";
import ShopifyConversionBoost from "./pages/blog/shopify-conversion-boost";
import BlogIndex from "./pages/blog";

// 3D Portfolio Section
import Portfolio3D from "./pages/portfolio-3d";
import Project1 from "./pages/portfolio-3d/project-1";
import Project2 from "./pages/portfolio-3d/project-2";
import Project3 from "./pages/portfolio-3d/project-3";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<ThreeDInteractiveHomepage />} />
        <Route path="/3d-interactive-homepage" element={<ThreeDInteractiveHomepage />} />
        <Route path="/experience-journey-timeline" element={<ExperienceJourneyTimeline />} />
        <Route path="/portfolio-showcase-galaxy" element={<PortfolioShowcaseGalaxy />} />
        <Route path="/skills-expertise-hub" element={<SkillsExpertiseHub />} />
        <Route path="/seo-results-dashboard" element={<SeoResultsDashboard />} />
        <Route path="/services-collaboration-hub" element={<ServicesCollaborationHub />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/wordpress-seo-case-study" element={<WordPressSEOCaseStudy />} />
        <Route path="/blog/technical-seo-audit-success" element={<TechnicalSEOAuditSuccess />} />
        <Route path="/blog/performance-optimization-guide" element={<PerformanceOptimizationGuide />} />
        <Route path="/blog/react-native-app-case-study" element={<ReactNativeAppCaseStudy />} />
        <Route path="/blog/flutter-vs-native-performance" element={<FlutterVsNativePerformance />} />
        <Route path="/blog/shopify-conversion-boost" element={<ShopifyConversionBoost />} />

        {/* 3D Portfolio Section */}
        <Route path="/portfolio-3d" element={<Portfolio3D />} />
        <Route path="/portfolio-3d/project-1" element={<Project1 />} />
        <Route path="/portfolio-3d/project-2" element={<Project2 />} />
        <Route path="/portfolio-3d/project-3" element={<Project3 />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;