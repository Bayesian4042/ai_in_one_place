"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight } from "lucide-react";
import { VideoDialog } from "./video-dialog";
import { DashboardPreview } from "./dashboard-preview";
import gsap from "gsap";

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);
  
  // Refs for animated elements
  const headingRef = React.useRef<HTMLHeadingElement>(null);
  const subheadingRef = React.useRef<HTMLParagraphElement>(null);
  const buttonsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!headingRef.current || !subheadingRef.current || !buttonsRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        subheadingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        buttonsRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 },
        "-=0.4"
      );
  }, []);

  return (
    <section id="hero-section" className="relative mt-32 flex min-h-screen w-full max-w-[100vw] flex-col overflow-hidden pt-16 lg:mt-36">
      <VideoDialog open={isVideoOpen} onOpenChange={setIsVideoOpen} />

      {/* Background Image and Gradient */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/images/home/image.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-[0.08] dark:opacity-[0.05]"
          priority
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/90 to-background dark:from-black dark:via-purple-900/10 dark:to-black"></div>
      <div className="absolute top-[10%] left-1/2 -z-10 h-32 w-32 -translate-x-1/2 rounded-full bg-purple-500/30 blur-3xl dark:bg-purple-600/40"></div>

      <div className="container mx-auto flex flex-grow flex-col items-center justify-center px-4 text-center md:px-6">
        <h1 
          ref={headingRef}
          className="text-4xl font-semibold uppercase leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.1]"
        >
          All your AI models <br />
          <span className="font-serif font-thin text-muted-foreground">in one place</span>
        </h1>
        <p 
          ref={subheadingRef}
          className="mt-6 max-w-[450px] text-lg text-muted-foreground md:mt-8 md:max-w-[600px] md:text-xl"
        >
          Your all in one AI companion. Generate Images, videos, codes, docs, debug your web apps all with Pixa's interface.
        </p>

        <div 
          ref={buttonsRef}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:mt-10"
        >
          <Button
            variant="outline"
            size="lg"
            className="group w-[170px] rounded-xl py-6 text-base lg:py-7"
            onClick={() => setIsVideoOpen(true)}
          >
            <div className="relative mr-2 flex h-6 w-6 items-center justify-center">
              <div className="absolute inset-0 scale-0 rounded-full border-2 border-muted-foreground/50 transition-transform duration-300 group-hover:scale-100 dark:border-muted-foreground/80"></div>
              <PlayCircle className="h-5 w-5" />
            </div>
            Watch video
          </Button>
          <Button size="lg" asChild className="group w-[170px] rounded-xl py-6 text-base shadow-lg transition-transform duration-300 hover:scale-105 lg:py-7">
            <a href="#">
              Get started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>

      <DashboardPreview />
    </section>
  );
}
