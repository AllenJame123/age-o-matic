import { Card } from "@/components/ui/card";

interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
}

export const HowItWorks = ({ steps }: HowItWorksProps) => (
  <Card className="p-6 space-y-6 bg-white/80 backdrop-blur-sm">
    <h2 className="text-3xl font-bold text-center text-neutral-dark">
      How It Works
    </h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 relative">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center max-w-[250px] relative">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
            {index + 1}
          </div>
          <h3 className="text-lg font-semibold text-neutral-dark mb-2">
            {step.title}
          </h3>
          <p className="text-neutral-gray text-sm">
            {step.description}
          </p>
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute left-[calc(100%+1rem)] top-6 -translate-y-1/2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-primary"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  </Card>
);