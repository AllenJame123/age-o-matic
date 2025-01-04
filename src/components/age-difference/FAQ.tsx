import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export const FAQ = () => (
  <Card className="p-6 bg-white/80 backdrop-blur-sm">
    <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
    <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is an Age Difference Calculator?</AccordionTrigger>
        <AccordionContent>
          An Age Difference Calculator is a tool that helps you determine the exact time gap between two dates, commonly used to find age differences between people or calculate time spans between important events.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How accurate is the age difference calculation?</AccordionTrigger>
        <AccordionContent>
          Our calculator provides precise results down to the day, taking into account leap years and varying month lengths for maximum accuracy.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What can I use this calculator for?</AccordionTrigger>
        <AccordionContent>
          You can use it to calculate age gaps between siblings, partners, or friends, determine time spans between historical events, or plan future dates based on age differences.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </Card>
);