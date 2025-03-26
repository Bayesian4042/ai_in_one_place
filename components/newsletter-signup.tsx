import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterSignup() {
  return (
    <section className="container mx-auto py-16 px-4 md:px-6 lg:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 rounded-lg bg-muted/30 p-6 dark:bg-card md:flex-row md:p-8">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold md:text-2xl">
            Join our newsletter
          </h2>
          <p className="mt-1 text-muted-foreground">Get product insights and updates.</p>
        </div>
        <form className="flex w-full max-w-sm items-center gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow"
            aria-label="Email for newsletter"
            required
          />
          <Button type="submit" variant="outline" className="rounded-full">
            Signup
          </Button>
        </form>
      </div>
    </section>
  );
}