import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Mante",
    title: "Glu, cto",
    avatar: "/assets/images/people/man2.jpg", // Update path
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore deleniti iusto Numquam!"
  },
  {
    name: "Trich B",
    title: "AMI, ceo",
    avatar: "/assets/images/people/women.jpg", // Update path
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vero. Lorem ipsum dolor sit amet."
  },
  {
    name: "John B",
    title: "Benz, ceo",
    avatar: "/assets/images/people/man.jpg", // Update path
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, expedita nihil repellendus accusamus itaque facere labore, suscipit tempore in harum repellat. Doloribus, dolor facere dolorem impedit facilis rerum beatae exercitationem aliquid porro ea architecto similique illo omnis odio consequatur modi."
  },
   {
    name: "Ben Alfert B",
    title: "XZ tech, cto",
    avatar: "/assets/images/people/man2.jpg", // Update path
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vero."
  },
  {
    name: "Rachel",
    title: "Gem, cto",
    avatar: "/assets/images/people/women.jpg", // Update path
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vero. Lorem, ipsum dolor."
  },
  {
    name: "Jamie",
    title: "SnapFist.ai, ceo",
    avatar: "/assets/images/people/man.jpg", // Update path
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, nihil vitae fuga ab reiciendis optio et corporis dolorem alias deserunt, molestias in iusto! Ratione, quisquam incidunt. Reprehenderit ipsam officiis enim."
  }
];

export function TestimonialsSection() {
  return (
    <section className="container mx-auto py-16 px-4 md:px-6 lg:py-24">
      <h2 className="mb-12 text-center text-3xl font-medium md:mb-16 md:text-4xl">
        Join the professionals using Pixa
      </h2>

      <div className="columns-1 gap-8 space-y-8 md:columns-2 lg:columns-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="break-inside-avoid bg-muted/30 dark:bg-card">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base font-semibold">{testimonial.name}</CardTitle>
                <CardDescription className="text-sm">{testimonial.title}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {testimonial.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}