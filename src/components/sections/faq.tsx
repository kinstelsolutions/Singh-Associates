import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What types of cases do you handle?",
      answer: "We specialize in family law, including divorce, child custody, alimony, and domestic violence cases. We also handle civil and criminal litigation."
    },
    {
      question: "How much do you charge for a consultation?",
      answer: "We offer a free initial consultation to discuss your case and provide preliminary advice. This helps you understand your legal options without any financial commitment."
    },
    {
      question: "What should I bring to my first meeting?",
      answer: "Please bring all relevant documents, such as court papers, agreements, and any communication related to your case. A timeline of events is also helpful."
    },
    {
      question: "How long will my case take?",
      answer: "The duration of a case varies depending on its complexity. We strive for a swift resolution while ensuring the best possible outcome for you."
    }
  ]
  
  const FaqSection = () => {
    return (
      <section id="faq" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-secondary font-semibold">FAQS</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mt-2">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find answers to common questions about hiring a family lawyer in Lucknow. If you have other questions, feel free to contact us for a consultation.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }
  
  export default FaqSection;