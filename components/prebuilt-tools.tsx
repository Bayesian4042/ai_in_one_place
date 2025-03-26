import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CodeSquare, FileText, Image as ImageIcon, BarChart, Music, Video, ArrowUpRight } from "lucide-react";

const tools = [
  {
    icon: CodeSquare,
    title: "AI code generator",
    description: "AI code generation tools to create code from natural language or patterns, streamlining development and improving efficiency.",
    href: "#"
  },
  {
    icon: FileText,
    title: "PDF generator",
    description: "Use AI tools to automate PDF creation and content extraction, improving document management and data processing.",
    href: "#"
  },
  {
    icon: ImageIcon,
    title: "Image generation",
    description: "Prebuilt AI tools for image generation create visuals from text or patterns, enhancing design and creative projects.",
    href: "#"
  },
  {
    icon: BarChart,
    title: "AI Analytics",
    description: "Our AI analytics tools analyze data patterns and trends, providing actionable insights and enhancing decision-making.",
    href: "#"
  },
  {
    icon: Music,
    title: "Music generator",
    description: "Access our AI music generation tools create original compositions from input parameters, enabling effortless music creation for various needs.",
    href: "#"
  },
  {
    icon: Video,
    title: "Video generator",
    description: "Use our AI video generation tools create videos from text or templates, streamlining content creation and production.",
    href: "#"
  }
];

export function PrebuiltTools() {
  return (
    <section className="container mx-auto py-16 px-4 md:px-6 lg:py-24">
      <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:gap-24">
        {/* Sticky Title Section */}
        <div className="w-full text-center lg:sticky lg:top-24 lg:w-1/3 lg:text-left">
          <h2 className="text-4xl font-medium font-serif md:text-5xl">
            Pre-built AI Tools
          </h2>
          <Button variant="outline" size="lg" asChild className="mt-8">
            <Link href="#">
              Start Chat
            </Link>
          </Button>
        </div>

        {/* Tools List */}
        <div className="grid w-full grid-cols-1 gap-8 md:max-w-md lg:max-w-none lg:w-2/3 lg:gap-10">
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ToolCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}

function ToolCard({ icon: Icon, title, description, href }: ToolCardProps) {
  return (
    <Link href={href} className="group block rounded-xl p-6 transition-shadow duration-300 hover:shadow-lg md:p-8 dark:hover:shadow-primary/10" prefetch={false}>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
        <div className="flex-shrink-0 text-primary">
          <Icon className="h-10 w-10 md:h-12 md:w-12" />
        </div>
        <div className="flex flex-grow flex-col">
          <h3 className="mb-2 text-xl font-medium md:text-2xl">{title}</h3>
          <p className="flex-grow text-sm text-muted-foreground md:text-base">
            {description}
          </p>
          <div className="mt-4 flex items-center text-sm font-medium text-primary underline underline-offset-4">
            <span>Learn more</span>
            <ArrowUpRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}