import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const WhyUseSection = () => {
  const features = [
    {
      title: "Multiple Calculation Types",
      description: "Calculate date differences, add or subtract days, and determine business days all in one place."
    },
    {
      title: "Business Day Calculations",
      description: "Accurately calculate working days between dates, excluding weekends for professional planning."
    },
    {
      title: "User-Friendly Interface",
      description: "Interactive calendar selection and clear results make date calculations simple and intuitive."
    },
    {
      title: "Comprehensive Results",
      description: "Get detailed breakdowns including total days, business days, and day of the week information."
    }
  ];

  return (
    <Card className="p-6 space-y-4 bg-white/80 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-center">Why Use Our Date Calculator</h2>
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