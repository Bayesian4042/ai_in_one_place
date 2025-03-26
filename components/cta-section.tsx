import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 px-4 md:px-6 lg:py-24">
      <div className="container mx-auto max-w-5xl">
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg bg-muted/30 p-8 text-center dark:bg-card md:min-h-[450px] md:p-12">
          <h2 className="text-4xl font-medium leading-tight md:text-5xl">
            Access and compare multiple AI models
          </h2>
          <Button size="lg" asChild className="mt-8 rounded-full px-8 py-6 text-base font-medium md:mt-10">
            <Link href="#">
              Launch Playground
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}