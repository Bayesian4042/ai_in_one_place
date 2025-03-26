import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's Pixa playground?",
    answer: "Pixa's playground is an integrated webapp to seamlessly test different LLM models such as GPT4, Claude, Gemini, etc."
  },
  {
    question: "What are LLM?",
    answer: "LLM stands for Large Language Model. Its a type of artificial intelligence model trained on vast amounts of text data to understand and generate human-like text. These models, like GPT-4, can perform various tasks, such as answering questions, generating content, translating languages, and more, by leveraging patterns learned from the data they were trained on."
  },
  {
    question: "Where can I test different AI models?",
    answer: "You can use Pixa's AI Playground to test different models, including GPT4, Claude, Perplexity and more."
  },
  {
    question: "Is Pixa Free to use?",
    answer: "You can start using Pixa for free, and later upgrade your plan to access all its features."
  }
];

export function FaqSection() {
  return (
    <section className="relative container mx-auto py-16 px-4 md:px-6 lg:py-24">
       <div className="absolute bottom-14 right-[20%] -z-10 hidden h-36 w-36 rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-600/30 md:block"></div>
      <div className="mb-10 text-center md:mb-12">
        <h2 className="text-3xl font-medium md:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-lg md:text-xl">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}