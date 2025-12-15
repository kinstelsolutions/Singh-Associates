import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What types of family law cases do you handle?",
      answer: "We handle a wide range of family law matters, including divorce (both mutual and contested), child custody and support, alimony (spousal maintenance), domestic violence, prenuptial agreements, and property division."
    },
    {
      question: "Do you offer a free initial consultation?",
      answer: "Yes, we offer a confidential initial consultation to help you understand your legal rights and options. This allows us to assess your situation and determine the best course of action."
    },
    {
      question: "How much will my case cost?",
      answer: "The cost of legal representation depends on the complexity of your case. We provide a transparent fee structure and will discuss all potential costs with you upfront. Our goal is to provide cost-effective solutions."
    },
    {
      question: "How long does a divorce take in Lucknow?",
      answer: "The timeline for a divorce varies. A mutual consent divorce can be finalized in as little as six months, while a contested divorce may take longer depending on the specific issues and court schedules."
    },
    {
        question: "What is the process for child custody in India?",
        answer: "The court's primary consideration is the child's welfare. Factors include the child's age, each parent's ability to provide a stable environment, and the child's preference if they are old enough. We will guide you through the process to protect your parental rights."
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