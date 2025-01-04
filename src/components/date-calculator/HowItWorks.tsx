import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const HowItWorks = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-center">How It Works</h2>
      <Accordion type="single" collapsible className="bg-white rounded-lg">
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-4">Date Difference Calculator</AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            Select two dates to calculate the total number of days between them, including both calendar days and business days. The calculator automatically handles weekends and provides the day of the week for better planning.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="px-4">Add/Subtract Days</AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            Choose a start date and specify the number of days to add or subtract. The calculator will show you the resulting date and the day of the week it falls on, perfect for deadline calculations and project planning.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="px-4">Business Days Calculator</AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            Calculate working days between two dates, excluding weekends. This is especially useful for project timelines and business planning where weekend days should not be counted.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};