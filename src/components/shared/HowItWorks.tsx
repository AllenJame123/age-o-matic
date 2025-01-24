import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
}

export const HowItWorks = ({ steps }: HowItWorksProps) => (
  <Card className="p-6 space-y-4 bg-white/80 backdrop-blur-sm">
    <h2 className="text-2xl font-semibold text-center text-neutral-dark">
      How It Works
    </h2>
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-4 bg-soft-blue rounded-lg transition-transform hover:translate-x-2"
        >
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
            {index + 1}
          </div>
          <div className="flex-grow">
            <h3 className="font-semibold text-neutral-dark">{step.title}</h3>
            <p className="text-neutral-gray text-sm">{step.description}</p>
          </div>
          <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
        </div>
      ))}
    </div>
  </Card>
);