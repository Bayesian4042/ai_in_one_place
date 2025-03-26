import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function SubscriptionComparison() {
  return (
    <section className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center py-16 px-4 md:px-6 lg:py-24">
      <div className="mb-8 max-w-2xl text-center md:mb-12">
        <h2 className="text-4xl font-medium md:text-5xl">
          One Subscription for it all
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Why pay for multiple expensive subscriptions when one subscription can do it all?
          Access multiple AI models and save 1000's of dollar per year.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-5xl">
        <Card className="overflow-hidden border bg-card shadow-xl dark:border-border/50">
          <CardContent className="p-2">
            <Image
              src="/assets/images/home/multi-sub.png" // Update path
              alt="Multiple Subscriptions Comparison"
              width={650}
              height={400}
              className="h-auto w-full rounded-md object-cover"
            />
          </CardContent>
           {/* Optional: Add title/caption if needed */}
        </Card>
        <Card className="overflow-hidden border bg-card shadow-xl dark:border-border/50">
          <CardContent className="p-2">
            <Image
              src="/assets/images/home/single-sub.jpg" // Update path
              alt="Single Pixa Subscription Comparison"
              width={650}
              height={400}
              className="h-auto w-full rounded-md object-cover"
            />
          </CardContent>
           {/* Optional: Add title/caption if needed */}
        </Card>
      </div>

      <Button size="lg" asChild className="group mt-10 shadow-xl md:mt-12">
        <Link href="#">
          Start Chat
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>
    </section>
  );
}