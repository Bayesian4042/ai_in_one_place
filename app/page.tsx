"use client";

import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { BrandLogos } from "@/components/brand-logos";
import { ApiCta } from "@/components/api-cta";
import { BenefitsSection } from "@/components/benefits-section";
import { PrebuiltTools } from "@/components/prebuilt-tools";
import { AdditionalFeatures } from "@/components/additional-features";
import { SubscriptionComparison } from "@/components/subscription-comparison";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { BlogSection } from "@/components/blog-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { SiteFooter } from "@/components/site-footer";
import Head from 'next/head';
import React from "react";

export default function HomePage() {
  // Basic reveal effect (can be enhanced with Intersection Observer or Framer Motion)
  React.useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        } else {
          // Optional: remove class if you want animation to repeat on scroll out/in
          // entry.target.classList.remove('revealed');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));

    return () => revealElements.forEach(el => observer.unobserve(el));
  }, []);


  return (
    <>
     {/* Metadata can also be defined in layout.tsx using generateMetadata */}
      <Head>
        <title>All your AI models in one place - Try OpenGig Playground</title>
        <meta name="description" content="Your all in one AI companion. Generate Images, videos, codes, docs, debug your web apps all with OpenGig's interface." />
        <link rel="icon" href="https://d2iyl9s54la9ej.cloudfront.net/opengig.png" />
        {/* Add other meta tags (OG, etc.) here */}
      </Head>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-grow">
          {/* Add reveal-up class to sections for animation */}
          <div className="reveal-up"><HeroSection /></div>
          <div className="reveal-up"><BrandLogos /></div>
          <div className="reveal-up"><ApiCta /></div>
          <div className="reveal-up"><BenefitsSection /></div>
          <div className="reveal-up"><PrebuiltTools /></div>
          <div className="reveal-up"><AdditionalFeatures /></div>
          <div className="reveal-up"><SubscriptionComparison /></div>
          <div className="reveal-up"><TestimonialsSection /></div>
          <div className="reveal-up"><PricingSection /></div>
          <div className="reveal-up"><BlogSection /></div>
          <div className="reveal-up"><FaqSection /></div>
          <div className="reveal-up"><CtaSection /></div>
          <div className="reveal-up"><NewsletterSignup /></div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}

// Add this to your global CSS (e.g., app/globals.css)
/*
.reveal-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal-up.revealed {
  opacity: 1;
  transform: translateY(0);
}
*/
