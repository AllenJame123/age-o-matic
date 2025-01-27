import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { HowItWorks } from "./HowItWorks";
import { FAQ } from "./FAQ";
import { ResultCard } from "../age-calculator/ResultCard";
import { toast } from "sonner";

export const RetirementCalculatorComponent = () => {
  const [currentAge, setCurrentAge] = useState<string>("");
  const [retirementAge, setRetirementAge] = useState<string>("");
  const [result, setResult] = useState<{
    yearsLeft: number;
    monthsLeft: number;
    daysLeft: number;
  } | null>(null);

  const calculateRetirement = () => {
    if (!currentAge || !retirementAge) {
      toast.error("Please fill in all fields");
      return;
    }

    const current = parseInt(currentAge);
    const retirement = parseInt(retirementAge);

    if (current >= retirement) {
      toast.error("Retirement age must be greater than current age");
      return;
    }

    const yearsLeft = retirement - current;
    const monthsLeft = yearsLeft * 12;
    const daysLeft = yearsLeft * 365;

    setResult({
      yearsLeft,
      monthsLeft,
      daysLeft,
    });
  };

  return (
    <div className="min-h-screen bg-soft-gray p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Retirement Age Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plan your retirement by calculating the time left until your desired retirement age
          </p>
        </div>

        <Card className="p-6 backdrop-blur-sm bg-white/80 shadow-lg">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Current Age</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(e.target.value)}
                  placeholder="Enter your current age"
                />
              </div>
              <div className="space-y-2">
                <Label>Desired Retirement Age</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(e.target.value)}
                  placeholder="Enter desired retirement age"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={calculateRetirement}
                className="bg-primary hover:bg-primary-light text-white"
              >
                Calculate
              </Button>
            </div>

            {result && (
              <div className="grid gap-4 sm:grid-cols-3 animate-slideUp">
                <ResultCard
                  title="Years Until Retirement"
                  value={result.yearsLeft.toString()}
                  description="Total years left"
                />
                <ResultCard
                  title="Months Until Retirement"
                  value={result.monthsLeft.toString()}
                  description="Total months left"
                />
                <ResultCard
                  title="Days Until Retirement"
                  value={result.daysLeft.toString()}
                  description="Total days left"
                />
              </div>
            )}
          </div>
        </Card>

        <HowItWorks />
        <FAQ />
      </div>
    </div>
  );
};