import Image from "next/image";

const brands = [
  { name: "Google", logo: "/assets/images/brand-logos/google.svg" },
  { name: "Microsoft", logo: "/assets/images/brand-logos/microsoft.svg" },
  { name: "Adobe", logo: "/assets/images/brand-logos/adobe.svg" },
  { name: "Airbnb", logo: "/assets/images/brand-logos/airbnb.svg" },
  { name: "Stripe", logo: "/assets/images/brand-logos/stripe.svg" },
  { name: "Reddit", logo: "/assets/images/brand-logos/reddit.svg" },
];

export function BrandLogos() {
  return (
    <section className="container mx-auto py-16 px-4 md:px-6 lg:py-24">
      <h2 className="mb-10 text-center text-2xl font-medium text-muted-foreground md:text-3xl">
        Trusted by brands you love
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
        {brands.map((brand) => (
          <div key={brand.name} className="h-8 w-32 md:h-10 md:w-40">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={150}
              height={40}
              className="h-full w-full object-contain grayscale transition-all hover:grayscale-0 dark:invert dark:hover:invert-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}