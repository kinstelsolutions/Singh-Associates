import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What are the charges of a family lawyer in Lucknow?",
      answer: "The charges of a family lawyer in Lucknow can vary widely depending on the lawyer's experience, the complexity of the case, and the law firm's reputation. It's best to schedule a consultation to discuss the specifics of your case and get a clear understanding of the fee structure."
    },
    {
      question: "How do I choose the best family lawyer in Lucknow?",
      answer: "When choosing a family lawyer, consider their experience in family law, track record, client testimonials, and communication style. It's crucial to find a lawyer who you trust and feel comfortable working with during such a sensitive time."
    },
    {
      question: "What issues do family lawyers handle?",
      answer: "Family lawyers handle a variety of issues, including divorce, child custody and support, alimony, property division, adoption, and domestic violence cases. An experienced family lawyer can provide guidance and representation on all these matters."
    },
    {
      question: "Do I always need a lawyer for family court?",
      answer: "While you can represent yourself, it's highly recommended to have a lawyer, especially in complex cases. Family law is intricate, and a lawyer can ensure your rights are protected, handle paperwork correctly, and navigate the legal system effectively on your behalf."
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