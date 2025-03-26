import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const articles = [
  {
    title: "Latest AI tools",
    category: "Machine learning",
    date: "Jul 17, 2024",
    image: "/assets/images/home/article1.png", // Update path
    href: "#"
  },
  {
    title: "Pixa Unveils new technology",
    category: "Announcement",
    date: "June 22, 2024",
    image: "/assets/images/home/article2.jpg", // Update path
    href: "#"
  },
  {
    title: "Launching Pixa playground",
    category: "Announcement",
    date: "Apr 27, 2024",
    image: "/assets/images/home/article3.png", // Update path
    href: "#"
  }
];

export function BlogSection() {
  return (
    <section className="container mx-auto py-16 px-4 md:px-6 lg:py-24">
      <div className="mb-12 text-center md:mb-16">
        <h2 className="text-3xl font-medium md:text-4xl">
          Read resources by experts ✨
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.title} href={article.href} className="group block" prefetch={false}>
            <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2 p-4 md:p-6">
                <div className="flex w-full justify-between text-sm text-muted-foreground">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="mt-1 text-lg font-medium md:text-xl">
                  {article.title}
                </h3>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}