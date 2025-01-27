import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { ResultCard } from "../age-calculator/ResultCard";

export const LeapYearCalculatorComponent = () => {
  const currentYear = new Date().getFullYear().toString();
  const [year, setYear] = useState<string>(currentYear);
  const [result, setResult] = useState<{
    isLeap: boolean;
    nextLeapYears: number[];
  } | null>(null);
  const { toast } = useToast();

  const isLeapYear = (year: number): boolean => {
    if (year % 4 !== 0) return false;
    if (year % 100 !== 0) return true;
    if (year % 400 !== 0) return false;
    return true;
  };

  const getNextThreeLeapYears = (startYear: number): number[] => {
    const nextLeapYears: number[] = [];
    let currentYear = startYear + 1;
    
    while (nextLeapYears.length < 3) {
      if (isLeapYear(currentYear)) {
        nextLeapYears.push(currentYear);
      }
      currentYear++;
    }
    
    return nextLeapYears;
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 100; i <= currentYear + 100; i++) {
      years.push(i);
    }
    return years;
  };

  const handleCalculate = () => {
    const yearNum = parseInt(year);
    
    if (isNaN(yearNum) || yearNum < 1) {
      toast({
        title: "Invalid Year",
        description: "Please enter a valid year (positive number)",
        variant: "destructive",
      });
      return;
    }

    const isLeap = isLeapYear(yearNum);
    const nextLeapYears = getNextThreeLeapYears(yearNum);
    
    setResult({
      isLeap,
      nextLeapYears
    });
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Leap Year Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check if a year is a leap year and find upcoming leap years
          </p>
        </div>

        <Card className="p-6 backdrop-blur-sm bg-white/80 shadow-lg">
          <div className="space-y-6">
            <div className="max-w-sm mx-auto space-y-4">
              <div className="space-y-2">
                <label htmlFor="year" className="block text-sm font-medium text-neutral-dark">
                  Select Year
                </label>
                <Select
                  value={year}
                  onValueChange={(value) => setYear(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a year" />
                  </SelectTrigger>
                  <SelectContent>
                    {generateYearOptions().map((yearOption) => (
                      <SelectItem key={yearOption} value={yearOption.toString()}>
                        {yearOption}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Button
                onClick={handleCalculate}
                className="w-full bg-primary hover:bg-primary-light text-white"
                disabled={!year}
              >
                Check Leap Year
              </Button>
            </div>

            {result && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp">
                <ResultCard
                  title="Year Status"
                  value={result.isLeap ? "Leap Year" : "Not a Leap Year"}
                  description={`${year} has ${result.isLeap ? "366" : "365"} days`}
                />
                <ResultCard
                  title="Next Leap Year"
                  value={result.nextLeapYears[0].toString()}
                  description="First upcoming leap year"
                />
                <ResultCard
                  title="Future Leap Years"
                  value={`${result.nextLeapYears[1]}, ${result.nextLeapYears[2]}`}
                  description="Next two leap years"
                />
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};