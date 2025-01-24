import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How accurate is the due date calculation?</AccordionTrigger>
          <AccordionContent>
            The due date calculation is an estimate based on your last menstrual period,
            assuming a 28-day cycle. For more accurate dating, consult with your healthcare provider
            who may use ultrasound measurements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What if I don't know my last period date?</AccordionTrigger>
          <AccordionContent>
            If you're unsure about your last period date, it's best to consult with your
            healthcare provider who can determine your pregnancy dating through an ultrasound.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How are pregnancy weeks calculated?</AccordionTrigger>
          <AccordionContent>
            Pregnancy is typically calculated from the first day of your last menstrual period,
            not from the day of conception. This means that in the first two weeks of pregnancy,
            you're not actually pregnant yet!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};