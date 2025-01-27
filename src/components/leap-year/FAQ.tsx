import { Card } from "@/components/ui/card";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => (
  <div className="space-y-2 p-4 border-b last:border-b-0">
    <h3 className="font-semibold text-lg text-primary">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export const FAQ = () => (
  <Card className="p-6 space-y-4 bg-white/80 backdrop-blur-sm">
    <h2 className="text-2xl font-bold text-center mb-6">
      Frequently Asked Questions
    </h2>
    <div className="space-y-6">
      <FAQItem
        question="What makes a year a leap year?"
        answer="A year is a leap year if it's divisible by 4. However, if it's also divisible by 100, it must be divisible by 400 to be a leap year. For example, 2000 was a leap year, but 1900 was not."
      />
      <FAQItem
        question="Why do we need leap years?"
        answer="Leap years are necessary because Earth's orbit around the Sun takes approximately 365.25 days. Adding an extra day every four years keeps our calendar aligned with the solar year and seasons."
      />
      <FAQItem
        question="How often do leap years occur?"
        answer="Leap years typically occur every four years. The next leap year will be 2024, followed by 2028 and 2032. However, years divisible by 100 but not by 400 are skipped."
      />
    </div>
  </Card>
);