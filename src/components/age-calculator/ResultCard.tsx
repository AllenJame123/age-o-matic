import { Card } from "@/components/ui/card";

interface ResultCardProps {
  title: string;
  value: string;
  description: string;
}

export const ResultCard = ({ title, value, description }: ResultCardProps) => (
  <Card className="p-4 text-center bg-white shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
    <p className="text-2xl font-bold mb-1">{value}</p>
    <p className="text-sm text-gray-600">{description}</p>
  </Card>
);