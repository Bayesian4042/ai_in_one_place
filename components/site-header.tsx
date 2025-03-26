"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { Menu, ChevronDown, ArrowRight, Library, LayoutGrid, Globe, Image as ImageIcon, CalendarRange, Languages } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const features: { title: string; href: string; description: string; icon: React.ElementType }[] = [
  { title: "Prompt library", href: "#", description: "Comes packed with pre-made prompt templates", icon: Library },
  { title: "Unified Interface", href: "#", description: "Test multiple AI models in one interface", icon: LayoutGrid },
  { title: "Realtime web search", href: "#", description: "Search the internet in realtime", icon: Globe },
  { title: "Image generation", href: "#", description: "Generate images from prompts", icon: ImageIcon },
  { title: "History", href: "#", description: "Continue from where you left off", icon: CalendarRange },
  { title: "Multilingual", href: "#", description: "Converse in multiple languages", icon: Languages },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-4 left-1/2 z-50 flex h-16 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-md border bg-background/95 px-4 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <Image src="https://d2iyl9s54la9ej.cloudfront.net/opengig.png" alt="OpenGig Logo" width={30} height={30} className="dark:invert" />
        <span className="text-base font-medium uppercase">OpenGig</span>
      </Link>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                API
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Solutions
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[90vw] max-w-[800px] gap-3 p-4 md:grid-cols-2 lg:w-[600px]">
                {features.map((feature) => (
                  <ListItem
                    key={feature.title}
                    title={feature.title}
                    href={feature.href}
                    icon={feature.icon}
                  >
                    {feature.description}
                  </ListItem>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden items-center gap-4 lg:flex">
        <ThemeToggle />
        <Button asChild className="group transition-transform duration-300 hover:translate-x-1">
          <Link href="#">
            Try playground
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Mobile Navigation Trigger */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full max-w-xs p-6">
          <nav className="mt-8 flex flex-col gap-4">
            <Link href="#" className="text-lg font-medium hover:underline" onClick={() => setIsMobileMenuOpen(false)}>API</Link>
            <Link href="#" className="text-lg font-medium hover:underline" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
            <Link href="#" className="text-lg font-medium hover:underline" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
            {/* Mobile Features Dropdown (Simplified) */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between text-lg font-medium">Features <ChevronDown className="ml-1 h-4 w-4" /></DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {features.map((feature) => (
                  <DropdownMenuItem key={feature.title} asChild>
                    <Link href={feature.href} onClick={() => setIsMobileMenuOpen(false)}>{feature.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="#pricing" className="text-lg font-medium hover:underline" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
          </nav>
          <div className="mt-8 flex flex-col items-center gap-4">
             <div className="w-full">
               <ThemeToggle />
             </div>
            <Button asChild className="group w-full transition-transform duration-300 hover:translate-x-1">
              <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                Try playground
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-start gap-4">
            <Icon className="mt-1 h-8 w-8 flex-shrink-0 text-primary" aria-hidden="true" />
            <div>
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";
