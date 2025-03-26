import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    price: 9,
    description: "Essential AI tools for everyday use",
    features: [
      { text: "1,000 AI powered chat messages", included: true },
      { text: "30 premium image generations", included: true },
      { text: "10 premium music generation", included: true },
      { text: "Access to all premium AI models", included: false },
      { text: "Early access to new features", included: false },
    ],
    isFeatured: false,
    buttonLabel: "Choose plan",
    buttonVariant: "outline"
  },
  {
    price: 17,
    description: "Advanced features for serious AI enthusiasts.",
    features: [
      { text: "5,000 AI powered chat messages", included: true },
      { text: "100 premium image generations", included: true },
      { text: "40 premium music generation", included: true },
      { text: "Access to all premium AI models", included: true },
      { text: "Early access to new features", included: false },
    ],
    isFeatured: true,
    buttonLabel: "Choose plan",
    buttonVariant: "default"
  },
  {
    price: 29,
    description: "Unlimited potential for power users",
    features: [
      { text: "10,000 AI powered chat messages", included: true },
      { text: "300 premium image generations", included: true },
      { text: "100 premium music generations", included: true },
      { text: "Access to all premium AI models", included: true },
      { text: "Early access to new features", included: true },
    ],
    isFeatured: false,
    buttonLabel: "Choose plan",
    buttonVariant: "outline"
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="container mx-auto py-16 px-4 md:px-6 lg:py-24">
      <div className="mb-12 text-center md:mb-16">
        <h2 className="text-4xl font-medium md:text-5xl">
          Choose the right plan for you
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:items-center">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={cn(
              "flex flex-col overflow-hidden bg-card shadow-xl",
              plan.isFeatured ? "border-2 border-primary lg:scale-105" : "border"
            )}
          >
            <CardHeader className="items-center p-8 text-center">
              <CardTitle className="text-5xl font-semibold">
                ${plan.price}
                <span className="text-2xl font-normal text-muted-foreground">/mo</span>
              </CardTitle>
              <CardDescription className="mt-3 min-h-[40px]">{plan.description}</CardDescription>
            </CardHeader>
            <hr className="mx-8"/>
            <CardContent className="flex flex-grow flex-col p-8">
              <ul className="flex-grow space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2
                      className={cn(
                        "mt-1 h-5 w-5 flex-shrink-0",
                        feature.included ? "text-primary" : "text-muted-foreground/50"
                      )}
                    />
                    <span className={cn(!feature.included && "text-muted-foreground/80")}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="mt-8 w-full transition-transform duration-300 hover:scale-[1.02]"
                variant={plan.buttonVariant as any}
                asChild
              >
                <Link href="#">{plan.buttonLabel}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}