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
        question="How is the age calculated?"
        answer="Our calculator uses precise date arithmetic to compute your exact age in various units, including years, months, days, weeks, and hours."
      />
      <FAQItem
        question="Why might this be useful?"
        answer="Age calculations are useful for various purposes, including retirement planning, insurance calculations, and celebrating milestone birthdays."
      />
      <FAQItem
        question="How accurate is the calculation?"
        answer="The calculator provides precise results down to the day, taking into account leap years and varying month lengths."
      />
    </div>
  </Card>
);