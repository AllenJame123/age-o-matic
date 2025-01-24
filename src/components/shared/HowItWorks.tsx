import { Card } from "@/components/ui/card";

interface Step {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface HowItWorksProps {
  steps: Step[];
}

export const HowItWorks = ({ steps }: HowItWorksProps) => (
  <Card className="p-6 space-y-6 bg-white/80 backdrop-blur-sm">
    <h2 className="text-3xl font-bold text-center text-neutral-dark">How It Works</h2>
    <div className="grid gap-8 md:grid-cols-3">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative p-6 rounded-lg bg-soft-blue transition-transform hover:scale-105"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
            {index + 1}
          </div>
          <div className="text-center space-y-3 pt-4">
            <h3 className="text-xl font-semibold text-neutral-dark">{step.title}</h3>
            <p className="text-neutral-gray">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </Card>
);