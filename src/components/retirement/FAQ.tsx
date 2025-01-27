import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is the average retirement age?</AccordionTrigger>
          <AccordionContent>
            The average retirement age varies by country. In many countries, it's between 62 and 67 years old. However, this can depend on factors like pension eligibility, personal savings, and individual circumstances.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I plan for retirement?</AccordionTrigger>
          <AccordionContent>
            Planning for retirement involves several steps: setting a retirement age goal, calculating needed savings, creating a budget, investing wisely, and considering factors like healthcare costs and lifestyle changes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I retire early?</AccordionTrigger>
          <AccordionContent>
            Early retirement is possible with proper planning. It requires careful financial planning, adequate savings, and consideration of factors like healthcare coverage and lifestyle adjustments before reaching traditional retirement age.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};