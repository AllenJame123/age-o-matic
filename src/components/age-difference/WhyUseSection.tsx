import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const WhyUseSection = () => {
  const features = [
    {
      title: "Compare Any Two Dates",
      description: "Calculate the exact age difference between any two dates with precision and accuracy."
    },
    {
      title: "Multiple Time Formats",
      description: "View the age gap in years, months, days, weeks, and hours for comprehensive understanding."
    },
    {
      title: "User-Friendly Interface",
      description: "Simple dropdown menus make it easy to input dates and get instant comparisons."
    },
    {
      title: "Versatile Applications",
      description: "Perfect for finding age gaps between siblings, generational differences, or historical events."
    }
  ];

  return (
    <Card className="p-6 space-y-4 bg-white/80 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-center">Why Use Our Age Difference Calculator</h2>
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