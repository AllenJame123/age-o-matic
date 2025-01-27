import { useState } from "react";
import { Card } from "@/components/ui/card";
import { HowItWorks } from "./HowItWorks";
import { FAQ } from "./FAQ";
import { WhyUseSection } from "./WhyUseSection";
import { CalculationForm } from "./CalculationForm";
import { Results } from "./Results";
import { DateResult, CalculationType } from "./types";

export const DateCalculatorComponent = () => {
  const [result, setResult] = useState<DateResult | null>(null);
  const [calculationType, setCalculationType] = useState<CalculationType>("difference");

  return (
    <div className="min-h-screen bg-soft-gray p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Date Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate days between dates, add or subtract days, and determine business days with precision
          </p>
        </div>

        <Card className="p-6 backdrop-blur-sm bg-white/80 shadow-lg">
          <CalculationForm 
            onCalculate={(newResult) => {
              setResult(newResult);
              setCalculationType(calculationType);
            }} 
          />
          {result && <Results result={result} calculationType={calculationType} />}
        </Card>

        <HowItWorks />
        <WhyUseSection />
        <FAQ />
      </div>
    </div>
  );
};