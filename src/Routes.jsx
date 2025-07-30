import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ErrorBoundary from "./components/ErrorBoundary";
// Add your imports here
import WebToolsIndex from "./pages/web-tools";
import CodePlayground from "./pages/web-tools/code-playground";
import ColorPicker from "./pages/web-tools/color-picker";
import BoxShadowGenerator from "./pages/web-tools/box-shadow-generator";
import JSONFormatter from "./pages/web-tools/json-formatter";
import RegexTester from "./pages/web-tools/regex-tester";
import ImageCompressor from "./pages/web-tools/image-compressor";
import ResponsiveTester from "./pages/web-tools/responsive-tester";
import QRCodeGenerator from "./pages/web-tools/qr-code-generator";
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
        {/* Web Tools Section */}
        <Route path="/web-tools" element={<WebToolsIndex />} />
        <Route path="/web-tools/code-playground" element={<CodePlayground />} />
        <Route path="/web-tools/color-picker" element={<ColorPicker />} />
        <Route path="/web-tools/box-shadow-generator" element={<BoxShadowGenerator />} />
        <Route path="/web-tools/json-formatter" element={<JSONFormatter />} />
        <Route path="/web-tools/regex-tester" element={<RegexTester />} />
        <Route path="/web-tools/image-compressor" element={<ImageCompressor />} />
        <Route path="/web-tools/responsive-tester" element={<ResponsiveTester />} />
        <Route path="/web-tools/qr-code-generator" element={<QRCodeGenerator />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;