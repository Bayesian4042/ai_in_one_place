"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, ArrowUp, Image as ImageIcon, FileText, CodeSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypedText } from "./typed-text";

const aiModels = [
  { value: "gpt-4o", label: "GPT 4o", icon: "/assets/images/brand-logos/openai.svg" },
  { value: "gemini", label: "Gemini", icon: "/assets/images/brand-logos/googlegemini.svg" },
  { value: "llama-3", label: "Llama 3", icon: "/assets/images/brand-logos/meta.svg" },
  { value: "claude", label: "Claude", icon: "/assets/images/brand-logos/claude.svg" },
];

export function DashboardPreview() {
  const [selectedModel, setSelectedModel] = React.useState(aiModels[0].value);
  const [showSignupPrompt, setShowSignupPrompt] = React.useState(false);
  const [prompt, setPrompt] = React.useState("");
  
  const cardRef = React.useRef<HTMLDivElement>(null);
  const tryPromptsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate the entire card
      gsap.fromTo(
        cardRef.current,
        { 
          y: 100,
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate the try prompts section with a slight delay
      gsap.fromTo(
        tryPromptsRef.current,
        { 
          y: 50,
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: tryPromptsRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      // In a real app, you'd handle the prompt submission here.
      // For this demo, we just show the signup prompt.
      setShowSignupPrompt(true);
      setPrompt("");
    }
  };

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (showSignupPrompt) {
      timeoutId = setTimeout(() => setShowSignupPrompt(false), 5000); // Hide after 5 seconds
    }
    return () => clearTimeout(timeoutId);
  }, [showSignupPrompt]);

  const selectedModelData = aiModels.find(model => model.value === selectedModel);

  return (
    <div className="relative mt-12 mb-16 flex w-full justify-center px-4 md:mt-16 lg:mt-20">
      {/* Background Gradient */}
      <div className="absolute top-[5%] left-1/2 -z-10 h-48 w-48 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-600/30"></div>

      <Card 
        ref={cardRef}
        className="relative w-full max-w-4xl overflow-hidden border shadow-xl lg:h-[650px] opacity-0"
      >
        <CardContent className="flex h-full p-0">
          {/* Sidebar (Desktop only) */}
          <div className="hidden w-[250px] flex-col gap-2 border-r bg-muted/40 p-4 lg:flex">
            <Image src="https://d2iyl9s54la9ej.cloudfront.net/opengig.png" alt="OpenGig Logo" width={80} height={30} className="mb-4 h-auto w-20 dark:invert" />
            <nav className="flex flex-col gap-1">
              <Button variant="ghost" className="justify-start gap-2 px-2">
                <ImageIcon className="h-4 w-4" />
                <span>Image generator</span>
              </Button>
              <Button variant="ghost" className="justify-start gap-2 px-2">
                <FileText className="h-4 w-4" />
                <span>Pdf generator</span>
              </Button>
              <Button variant="ghost" className="justify-start gap-2 px-2">
                <CodeSquare className="h-4 w-4" />
                <span>Code generator</span>
              </Button>
              <Button variant="ghost" className="group justify-start gap-2 px-2">
                <span>Show all</span>
                <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </nav>
            <div className="mt-auto px-6 pb-4">
              <Button variant="outline" className="w-full" onClick={() => setShowSignupPrompt(true)}>
                Signup
              </Button>
            </div>
          </div>

          {/* Main Playground Area */}
          <div className="relative flex h-full flex-grow flex-col bg-background p-4">
            {/* Signup Prompt Overlay */}
            <div
              className={`absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 rounded-lg bg-background/80 p-10 text-center backdrop-blur-sm transition-transform duration-300 ${showSignupPrompt ? 'scale-100' : 'scale-0'}`}
              aria-hidden={!showSignupPrompt}
            >
              <h4 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                Signup to continue your conversation
              </h4>
              <div className="flex items-center">
                <div className="flex -space-x-4">
                  <Avatar className="h-10 w-10 border-2 border-background">
                    <AvatarImage src="/assets/images/people/man.jpg" alt="User 1" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                   <Avatar className="z-[4] h-10 w-10 border-2 border-background">
                    <AvatarImage src="/assets/images/people/women.jpg" alt="User 2" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                   <Avatar className="z-[3] h-10 w-10 border-2 border-background">
                    <AvatarImage src="/assets/images/people/man2.jpg" alt="User 3" />
                    <AvatarFallback>U3</AvatarFallback>
                  </Avatar>
                   <Avatar className="z-[2] h-10 w-10 border-2 border-background">
                    <AvatarImage src="/assets/images/people/man.jpg" alt="User 4" />
                    <AvatarFallback>U4</AvatarFallback>
                  </Avatar>
                   <Avatar className="z-[1] h-10 w-10 border-2 border-background">
                    <AvatarImage src="/assets/images/people/women.jpg" alt="User 5" />
                    <AvatarFallback>U5</AvatarFallback>
                  </Avatar>
                </div>
                <p className="ml-2 text-sm text-muted-foreground">+20,000</p>
              </div>
              <p className="mt-2 text-lg text-muted-foreground">
                Join Ben and 20,000+ users using OpenGig
              </p>
              <Button size="lg" className="mt-4">
                Sign up
              </Button>
            </div>

            {/* Chat Area */}
            <div className="relative flex-grow overflow-y-auto">
              <Image
                src="https://d2iyl9s54la9ej.cloudfront.net/opengig.png"
                alt="OpenGig Logo Watermark"
                width={150}
                height={150}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain opacity-10 dark:invert"
              />
              <div 
                ref={tryPromptsRef}
                className="flex h-full flex-col items-center justify-center p-4 text-center opacity-0"
              >
                <h2 className="text-2xl opacity-80 md:text-3xl lg:text-4xl">
                  Try Prompts
                </h2>
                <div className="mt-4 text-muted-foreground md:mt-6 h-6">
                  <TypedText />
                </div>
              </div>
            </div>

            {/* Prompt Input Form */}
            <form onSubmit={handlePromptSubmit} className="mt-4 flex h-[50px] items-center gap-2 rounded-md bg-muted/50 p-1">
              {/* Model Selector (Dropdown for small screens, Select for large) */}
              <div className="relative">
                 <Select value={selectedModel} onValueChange={setSelectedModel}>
                  <SelectTrigger className="w-[140px] border-0 bg-transparent shadow-none focus:ring-0 lg:w-[160px]">
                    <SelectValue placeholder="Select model">
                       <div className="flex items-center gap-2">
                          {selectedModelData?.icon && <Image src={selectedModelData.icon} alt={selectedModelData.label} width={20} height={20} className="dark:invert" />}
                          <span>{selectedModelData?.label}</span>
                       </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {aiModels.map((model) => (
                      <SelectItem key={model.value} value={model.value}>
                        <div className="flex items-center gap-2">
                          <Image src={model.icon} alt={model.label} width={20} height={20} className="dark:invert" />
                          <span>{model.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Input
                placeholder="How to develop a saas app?"
                type="text"
                className="flex-grow border-none bg-transparent placeholder-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                aria-label="Enter your prompt"
              />
              <Button type="submit" size="icon" className="bg-primary text-primary-foreground" title="Submit prompt">
                <ArrowUp className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
