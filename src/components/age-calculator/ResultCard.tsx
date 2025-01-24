import { Card } from "@/components/ui/card";

interface ResultCardProps {
  title: string;
  value: string;
  description: string;
}

export const ResultCard = ({ title, value, description }: ResultCardProps) => (
  <Card className="p-6 text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
    <h3 className="text-sm font-medium text-soft-charcoal mb-3">{title}</h3>
    <p className="text-3xl font-bold mb-2 font-display text-primary-dark">{value}</p>
    <p className="text-sm text-neutral-gray">{description}</p>
  </Card>
);