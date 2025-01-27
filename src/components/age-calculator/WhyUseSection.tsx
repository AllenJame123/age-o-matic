import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const WhyUseSection = () => {
  const features = [
    {
      title: "Precise Age Calculation",
      description: "Get accurate calculations of your age in years, months, days, weeks, and even hours."
    },
    {
      title: "Multiple Time Units",
      description: "View your age broken down into different units of time for a complete perspective."
    },
    {
      title: "Easy to Use",
      description: "Simple interface with dropdown menus makes it easy to input your birth date and get instant results."
    },
    {
      title: "Instant Results",
      description: "See your age calculations update immediately with detailed breakdowns and visualizations."
    }
  ];

  return (
    <Card className="p-6 space-y-4 bg-white/80 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-center">Why Use Our Age Calculator</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};