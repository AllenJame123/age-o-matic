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
        question="How are generations defined?"
        answer="Generations are defined by birth year ranges that correspond to significant cultural, technological, and social changes. These cohorts often share common experiences and characteristics that shape their worldview."
      />
      <FAQItem
        question="Why do generation dates sometimes overlap?"
        answer="Generation boundaries aren't always exact, and there can be some overlap between generations. People born on the cusp between two generations might identify with characteristics of both groups."
      />
      <FAQItem
        question="What if I don't identify with my generation's characteristics?"
        answer="While generational categories can provide insights into shared experiences, they're broad generalizations. Individual experiences, values, and circumstances can vary significantly within each generation."
      />
    </div>
  </Card>
);