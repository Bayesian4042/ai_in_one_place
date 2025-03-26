import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const benefits = [
  {
    title: "Unified interface",
    description: "Our's is the only unified AI Interface tool brings together all your favorite chat models into one seamless platform. No more juggling between different AI systems—easily manage and interact with multiple chatbots from a single interface.",
    image: "/assets/images/home/api.png", // Placeholder - update path
    href: "#"
  },
  {
    title: "API Access",
    description: "Pixa's LLM API offers advanced summarization, text generation, and question-answering. Easily integrate with support for JSON, HTML, Markdown, and plain text, enhancing your applications with powerful language tools.",
    image: "/assets/images/home/api.png", // Placeholder - update path
    href: "#"
  },
  {
    title: "Pre-built Tools",
    description: "Pixa offers pre-built AI integrations for diverse creative tasks including image, video, music, and PDF generation, simplifying advanced feature integration into your apps.",
    image: "/assets/images/home/integrations1.png", // Placeholder - update path
    href: "#"
  }
];

const wideBenefit = {
  title: "Multiple AI models",
  description: "Pixa supports various AI models, including ChatGPT, Gemini, Claude, Mistral and more, providing a range of advanced capabilities for various language and creative tasks.",
  image: "/assets/images/home/ai-models.png", // Placeholder - update path
  href: "#"
};

export function BenefitsSection() {
  return (
    <section className="container mx-auto py-16 px-4 md:px-6 lg:py-24">
      <div className="mb-12 text-center md:mb-16">
        <h2 className="text-4xl font-medium md:text-5xl lg:text-6xl">
          Experience all the benefits of AI
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.title} {...benefit} />
        ))}
      </div>

      <div className="mt-8">
        <WideBenefitCard {...wideBenefit} />
      </div>
    </section>
  );
}

interface BenefitCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

function BenefitCard({ title, description, image, href }: BenefitCardProps) {
  return (
    <Link href={href} className="group block h-full" prefetch={false}>
      <Card className="flex h-full transform flex-col overflow-hidden bg-muted/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:bg-card">
        <CardHeader className="p-6 pb-0 md:p-8 md:pb-0">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <Image src={image} alt={title} width={350} height={180} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
          </div>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col p-6 pt-4 md:p-8 md:pt-6">
          <CardTitle className="mb-3 text-2xl font-medium md:text-3xl">{title}</CardTitle>
          <CardDescription className="flex-grow text-base leading-relaxed text-muted-foreground">
            {description}
          </CardDescription>
          <div className="mt-6 flex items-center text-sm font-medium text-primary">
            <span>Learn more</span>
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function WideBenefitCard({ title, description, image, href }: BenefitCardProps) {
  return (
     <Link href={href} className="group block h-full" prefetch={false}>
      <Card className="flex h-full transform flex-col overflow-hidden bg-muted/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:bg-card md:flex-row">
        <div className="w-full overflow-hidden p-6 md:w-1/2 md:p-8 lg:p-10">
           <div className="aspect-video w-full overflow-hidden rounded-lg md:aspect-auto md:h-full">
            <Image src={image} alt={title} width={500} height={300} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>
        <CardContent className="flex flex-grow flex-col p-6 pt-0 md:w-1/2 md:p-8 md:pt-8 lg:p-10 lg:pt-10">
          <CardTitle className="mb-3 text-2xl font-medium md:text-3xl">{title}</CardTitle>
          <CardDescription className="flex-grow text-base leading-relaxed text-muted-foreground">
            {description}
          </CardDescription>
          <div className="mt-6 flex items-center text-sm font-medium text-primary">
            <span>Learn more</span>
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}