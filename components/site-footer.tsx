import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";

const resourcesLinks = [
  { name: "Getting started", href: "#" },
  { name: "API Docs", href: "#" },
  { name: "API Endpoints", href: "#" },
  { name: "Health status", href: "#" },
  { name: "Pricing", href: "#pricing" },
];

const companyLinks = [
  { name: "Support channels", href: "#" },
  { name: "Systems", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Twitter", href: "https://twitter.com/pauls_freeman" },
  { name: "Github", href: "https://github.com/PaulleDemon" },
];

const legalLinks = [
  { name: "Terms of service", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "DCMA - Content Takedown", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-background pt-12 pb-8 text-sm text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo and Socials */}
          <div className="col-span-1 flex flex-col items-center text-center md:items-start md:text-left lg:col-span-2">
            <Link href="#" className="mb-4 flex flex-col items-center gap-2 md:items-start" prefetch={false}>
              <Image src="/assets/logo/logo.png" alt="Pixa Logo" width={80} height={80} className="dark:invert" />
              <span className="text-2xl font-bold uppercase tracking-wider">PIXA</span>
            </Link>
            <div className="mt-4 flex gap-4">
              <Link href="https://github.com/PaulleDemon/" aria-label="Github" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com/pauls_freeman" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          <FooterLinkSection title="Resources" links={resourcesLinks} />
          <FooterLinkSection title="Company" links={companyLinks} />
          <FooterLinkSection title="Legal" links={legalLinks} />
        </div>

        <hr className="my-8" />

        <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-muted-foreground md:flex-row">
          <span>Copyright © 2023-2025 Pixa</span>
          <span>All trademarks and copyrights belong to their respective owners.</span>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkSectionProps {
  title: string;
  links: { name: string; href: string }[];
}

function FooterLinkSection({ title, links }: FooterLinkSectionProps) {
  return (
    <div className="flex flex-col items-center gap-4 md:items-start">
      <h3 className="text-lg font-semibold">{title}</h3>
      <nav className="flex flex-col items-center gap-3 md:items-start">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground hover:underline" prefetch={link.href.startsWith('#') ? false : undefined}>
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}