import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import ThreeDInteractiveHomepage from "pages/3d-interactive-homepage";
import ExperienceJourneyTimeline from "pages/experience-journey-timeline";
import PortfolioShowcaseGalaxy from "pages/portfolio-showcase-galaxy";
import SkillsExpertiseHub from "pages/skills-expertise-hub";
import SeoResultsDashboard from "pages/seo-results-dashboard";
import ServicesCollaborationHub from "pages/services-collaboration-hub";
import NotFound from "pages/NotFound";

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
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;