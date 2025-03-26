import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ApiCta() {
  return (
    <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-transparent via-purple-500/5 to-transparent dark:via-purple-900/10">
       <div className="absolute top-[20%] right-[20%] -z-10 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-600/30"></div>
      <div className="container mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="text-4xl font-semibold uppercase leading-tight tracking-tighter sm:text-5xl md:text-6xl">
          Build your own AI Apps
          <br />
          <span className="font-serif font-thin text-muted-foreground">on top of Pixa APIs</span>
        </h2>
        <p className="mt-6 text-base text-muted-foreground md:mt-8 md:text-lg">
          Pixa's Playground is powered by Pixa's cutting-edge LLM API endpoints. Our powerful models simplify task automation, offering advanced capabilities in summarization, text generation, and Q&A handling.
        </p>
        <div className="mt-8 md:mt-10">
          <Button variant="outline" size="lg" asChild className="shadow-md transition-all duration-300 hover:shadow-xl dark:shadow-gray-800">
            <Link href="#" target="_blank" rel="noopener">
              Check Pixa APIs
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}