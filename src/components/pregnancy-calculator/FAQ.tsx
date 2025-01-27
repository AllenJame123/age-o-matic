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
        question="How is the due date calculated?"
        answer="Your due date is calculated by adding 280 days (40 weeks) to the first day of your last menstrual period (LMP). This calculation assumes a regular 28-day menstrual cycle."
      />
      <FAQItem
        question="What are trimesters and how long do they last?"
        answer="Pregnancy is divided into three trimesters: First Trimester (Weeks 1-13), Second Trimester (Weeks 14-27), and Third Trimester (Weeks 28-40). Each trimester marks different stages of fetal development."
      />
      <FAQItem
        question="How accurate are the calculations?"
        answer="The calculator provides precise results based on standard pregnancy duration. However, every pregnancy is unique, and your healthcare provider may adjust dates based on ultrasound measurements and other factors."
      />
    </div>
  </Card>
);