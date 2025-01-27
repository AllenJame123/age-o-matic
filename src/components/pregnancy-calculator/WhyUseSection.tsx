import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const WhyUseSection = () => {
  const features = [
    {
      title: "Accurate Due Date Calculation",
      description: "Get a precise estimation of your due date based on your last menstrual period, using the same method healthcare providers use."
    },
    {
      title: "Week-by-Week Development Tracking",
      description: "Follow your baby's growth with detailed weekly updates about development milestones, size comparisons, and important medical procedures."
    },
    {
      title: "Trimester Breakdown",
      description: "Understand which trimester you're in and what to expect during each phase of your pregnancy journey."
    },
    {
      title: "Medical Timeline",
      description: "Access a comprehensive timeline of recommended medical check-ups, tests, and screenings throughout your pregnancy."
    },
    {
      title: "Size Visualization",
      description: "Visualize your baby's size with familiar fruit and vegetable comparisons that make it easy to understand their growth."
    },
    {
      title: "Pregnancy Planning",
      description: "Plan ahead with information about important milestones, helping you prepare for each stage of your pregnancy."
    }
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Why Use Our Pregnancy Calculator</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};