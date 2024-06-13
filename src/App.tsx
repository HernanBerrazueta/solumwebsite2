import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { StyleSheetManager } from "styled-components"; // Import StyleSheetManager
const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const ConsultancyPage = lazy(
  () => import("./pages/servicesPage/ConsultancyPage")
);
const DisputePage = lazy(() => import("./pages/servicesPage/DisputePage"));
const InsightsNewsPage = lazy(
  () => import("./pages/insightsPage/InsightsPage")
);
const InsightsPublicationsPage = lazy(
  () => import("./pages/insightsPage/InsightsPublications")
);
const AboutPage = lazy(() => import("./pages/aboutPage/Aboutpage"));
const ContactPage = lazy(() => import("./pages/contactPage/ContactPage"));
const Privacy = lazy(() => import("./pages/copyright/privacy/Privacy"));
const Cookies = lazy(() => import("./pages/copyright/cookies/Cookies"));
const EsgCommitment = lazy(() => import("./pages/copyright/esg/EsgCommitment"));
const DiversityAndInclusion = lazy(
  () => import("./pages/copyright/diversityAndInclusion/DiversityAndInclusion")
);
const DataProtection = lazy(
  () => import("./pages/copyright/dataProtection/DataProtection")
);

const App: React.FC = () => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "formTitle"}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/consultancy" element={<ConsultancyPage />} />
          <Route path="/dispute-services" element={<DisputePage />} />
          <Route path="/insights/news" element={<InsightsNewsPage />} />
          <Route
            path="/insights/publications"
            element={<InsightsPublicationsPage />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy_policy" element={<Privacy />} />
          <Route path="/data_protection" element={<DataProtection />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/esg_commitment" element={<EsgCommitment />} />
          <Route
            path="/diversity_inclusion"
            element={<DiversityAndInclusion />}
          />
        </Route>
      </Routes>
    </StyleSheetManager>
  );
};

export default App;
