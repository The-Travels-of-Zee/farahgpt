"use client";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import { ConfigContext } from "@/utils/configContext";
import templateConfig from "@/utils/config";
import React, { useContext } from "react";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import AppBanner from "@/components/AppBanner";
import Pricing from "@/components/Pricing";
import VideoMockup from "@/components/VideoMockup";

const Main = () => {
  const {
    // googlePlayLink,
    // appStoreLink,
    home: { header, features, partners, howItWorks },
  } = useContext(ConfigContext);
  return (
    <ConfigContext.Provider value={templateConfig}>
      <main>
        <Header header={header} partners={partners} />
        <Features features={features} />
        <VideoMockup videoSrc="/videos/test-video.mp4" />
        <HowItWorks howItWorks={howItWorks} />
        <Pricing />
        <Faq />
        <AppBanner />
      </main>
    </ConfigContext.Provider>
  );
};

export default Main;
