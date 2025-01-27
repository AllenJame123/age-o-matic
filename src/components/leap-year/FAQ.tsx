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
        question="What is a leap year?"
        answer="A leap year is a year that contains an extra day (February 29), making it 366 days long instead of the usual 365 days. This extra day is added to keep our calendar aligned with the Earth's orbit around the Sun."
      />
      <FAQItem
        question="How often do leap years occur?"
        answer="Leap years generally occur every four years. However, years divisible by 100 are not leap years unless they are also divisible by 400. For example, 2000 was a leap year, but 1900 was not."
      />
      <FAQItem
        question="Why do we need leap years?"
        answer="We need leap years because Earth's orbit around the Sun takes approximately 365.25 days. Without leap years, our calendar would slowly drift out of sync with the seasons, affecting agriculture, weather predictions, and other important seasonal activities."
      />
    </div>
  </Card>
);