import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
      <Accordion type="single" defaultValue="item-1" className="bg-white rounded-lg">
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-4">
            How does the date calculator handle weekends?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            The date calculator automatically identifies weekends when calculating business days. When using the business days calculation mode, Saturdays and Sundays are excluded from the count, giving you an accurate number of working days between dates.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="px-4">
            Can I calculate dates across different years?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            Yes! The calculator can handle dates across any time period, including different years, months, and centuries. It automatically accounts for leap years and varying month lengths to ensure accurate calculations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="px-4">
            What's the difference between total days and business days?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            Total days include every calendar day between two dates, including weekends and holidays. Business days exclude weekends (Saturdays and Sundays) from the count, providing a more accurate measure for work and business planning purposes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};