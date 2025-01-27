import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const WhyUseSection = () => {
  const features = [
    {
      title: "Quick Year Verification",
      description: "Instantly check if any year is a leap year with our accurate calculator."
    },
    {
      title: "Future Planning",
      description: "Find the next three upcoming leap years to help with long-term date planning."
    },
    {
      title: "Educational Tool",
      description: "Learn about leap year rules and why they're important for our calendar system."
    },
    {
      title: "Date Accuracy",
      description: "Ensure precise date calculations by knowing which years have 366 days."
    }
  ];

  return (
    <Card className="p-6 space-y-4 bg-white/80 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-center">Why Use Our Leap Year Calculator</h2>
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