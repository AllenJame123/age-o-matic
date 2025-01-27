import { useState } from "react";
import { differenceInYears, differenceInMonths, differenceInDays, differenceInWeeks, differenceInHours } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DateSelector } from "./DateSelector";
import { Results } from "./Results";
import { HowItWorks } from "./HowItWorks";
import { WhyUseSection } from "./WhyUseSection";
import { FAQ } from "./FAQ";

interface DateState {
  year: string;
  month: string;
  day: string;
}

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  weeks: number;
  hours: number;
}

export const AgeDifferenceCalculator = () => {
  const [firstDate, setFirstDate] = useState<DateState>({
    year: "",
    month: "",
    day: "",
  });
  const [secondDate, setSecondDate] = useState<DateState>({
    year: "",
    month: "",
    day: "",
  });
  const [result, setResult] = useState<AgeResult | null>(null);

  const calculateDifference = () => {
    if (!firstDate.year || !firstDate.month || !firstDate.day || 
        !secondDate.year || !secondDate.month || !secondDate.day) return;

    const date1 = new Date(
      parseInt(firstDate.year),
      parseInt(firstDate.month) - 1,
      parseInt(firstDate.day)
    );
    const date2 = new Date(
      parseInt(secondDate.year),
      parseInt(secondDate.month) - 1,
      parseInt(secondDate.day)
    );

    const years = Math.abs(differenceInYears(date2, date1));
    const months = Math.abs(differenceInMonths(date2, date1) % 12);
    const days = Math.abs(differenceInDays(date2, date1) % 30);
    const totalDays = Math.abs(differenceInDays(date2, date1));
    const weeks = Math.abs(differenceInWeeks(date2, date1));
    const hours = Math.abs(differenceInHours(date2, date1));

    setResult({
      years,
      months,
      days,
      totalDays,
      weeks,
      hours,
    });
  };

  return (
    <div className="min-h-screen bg-soft-gray p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Age Difference Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate the exact age difference between two dates with precision
          </p>
        </div>

        <Card className="p-6 backdrop-blur-sm bg-white/80 shadow-lg">
          <div className="space-y-8 flex flex-col items-center">
            <DateSelector label="First Date" date={firstDate} setDate={setFirstDate} />
            <DateSelector label="Second Date" date={secondDate} setDate={setSecondDate} />

            <Button
              onClick={calculateDifference}
              className="bg-primary hover:bg-primary-light text-white"
              disabled={!firstDate.year || !firstDate.month || !firstDate.day ||
                       !secondDate.year || !secondDate.month || !secondDate.day}
            >
              Calculate Difference
            </Button>

            {result && <Results result={result} />}
          </div>
        </Card>

        <HowItWorks />
        <WhyUseSection />
        <FAQ />
      </div>
    </div>
  );
};