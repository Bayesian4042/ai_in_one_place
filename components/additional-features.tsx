import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "Prompt Library",
    description: "Forget about writing your own prompt, use the prompt templates and supercharge your workflow.",
    image: "https://source.unsplash.com/400x400?prompt"
  },
  {
    title: "Real-time web search",
    description: "Our Real-time web search AI Bot provides instant, live search results directly within the AI chat playground.",
    image: "https://source.unsplash.com/400x400?search"
  },
  {
    title: "Image Generation",
    description: "Generate Image instantly from multiple models, create visuals from text descriptions or templates.",
    image: "https://source.unsplash.com/400x400?image"
  },
  {
    title: "History",
    description: "All of the models can recall previous topic, so you can continue your conversation at any point of time.",
    image: "https://source.unsplash.com/400x400?history"
  },
  {
    title: "Import content",
    description: "Effortlessly import PDFs, images, and documents. Use AI to ask questions, extract information, and summarize documents.",
    image: "https://source.unsplash.com/400x400?document"
  },
  {
    title: "Multilingual support",
    description: "ChatGPT, and Gemini can understand and respond in over 100 languages.",
    image: "https://source.unsplash.com/400x400?language"
  }
];

export function AdditionalFeatures() {
  return (
    <section className="container mx-auto py-16 px-4 md:px-6 lg:py-24">
      <div className="mb-12 text-center md:mb-16">
        <h2 className="text-4xl font-medium md:text-5xl">
          Additional Features
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="flex transform flex-col items-center overflow-hidden bg-muted/30 text-center transition-shadow duration-300 hover:shadow-lg dark:bg-card">
            <CardHeader className="p-6 pb-4 md:p-8 md:pb-6">
              <div className="relative h-[280px] w-full overflow-hidden rounded-lg bg-muted/50">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </CardHeader>
            <CardContent className="flex flex-grow flex-col items-center p-6 pt-0 md:p-8 md:pt-0">
              <CardTitle className="mb-2 text-xl md:text-2xl">{feature.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
