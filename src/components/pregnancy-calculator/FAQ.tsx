import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <Card className="p-6 space-y-4 bg-white/80 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How is my due date calculated?</AccordionTrigger>
          <AccordionContent>
            Your due date is calculated by adding 280 days (40 weeks) to the first day of your last menstrual period (LMP). This calculation assumes a regular 28-day menstrual cycle. For more accurate dating, your healthcare provider may adjust this date based on ultrasound measurements during your first trimester.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What are trimesters and how long do they last?</AccordionTrigger>
          <AccordionContent>
            Pregnancy is divided into three trimesters:
            • First Trimester (Weeks 1-13): Early development and formation of major organs
            • Second Trimester (Weeks 14-27): Rapid growth and movement begins
            • Third Trimester (Weeks 28-40): Final growth and preparation for birth
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>How accurate are the size comparisons?</AccordionTrigger>
          <AccordionContent>
            The fruit and vegetable comparisons are approximate and meant to give you a general idea of your baby's size. Every baby grows at a slightly different rate. Your healthcare provider will track your baby's specific growth through ultrasound measurements and fundal height checks.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>What if my cycles are irregular?</AccordionTrigger>
          <AccordionContent>
            If your menstrual cycles are irregular or you're unsure about your last period date, the best way to determine your due date is through an early ultrasound (usually performed between weeks 8-13). This will provide the most accurate estimation of your pregnancy dating.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>When should I schedule my first prenatal visit?</AccordionTrigger>
          <AccordionContent>
            Most healthcare providers recommend scheduling your first prenatal visit as soon as you know you're pregnant, typically between weeks 6-8. However, if you have high-risk factors or concerns, you should contact your healthcare provider immediately for guidance on when to schedule your first visit.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>What are the key screening tests during pregnancy?</AccordionTrigger>
          <AccordionContent>
            Key screening tests include:
            • First Trimester (Weeks 11-13): NT scan and blood tests
            • Second Trimester (Weeks 15-20): Quad screen or anatomy scan
            • Third Trimester (Weeks 24-28): Glucose screening
            • Late Pregnancy (Weeks 35-37): Group B strep test
            Discuss with your healthcare provider which tests are recommended for your specific situation.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>How accurate are the baby size and weight estimates?</AccordionTrigger>
          <AccordionContent>
            Baby size and weight estimates are approximate ranges and can vary significantly depending on several factors including genetics, maternal health, nutrition, and other individual circumstances. Your healthcare provider will monitor your baby's specific growth pattern through regular check-ups and ultrasounds to ensure healthy development.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>Are the medical procedure timelines fixed?</AccordionTrigger>
          <AccordionContent>
            The timing of medical procedures and screening tests can vary based on individual circumstances, healthcare provider recommendations, and local medical guidelines. Some factors that might affect the timing include your age, medical history, risk factors, and specific pregnancy conditions. Always follow your healthcare provider's personalized schedule for your pregnancy care.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};