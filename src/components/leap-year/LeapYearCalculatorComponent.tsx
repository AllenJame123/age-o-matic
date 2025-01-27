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

export const LeapYearCalculatorComponent = () => {
  const [year, setYear] = useState<string>("");
  const [result, setResult] = useState<string>("");
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
    
    setResult(
      `${yearNum} ${isLeap ? "is" : "is not"} a leap year! ${
        isLeap ? "It has 366 days." : "It has 365 days."
      }\n\nNext three leap years after ${yearNum}: ${nextLeapYears.join(", ")}`
    );
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-4">
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
          className="w-full"
          disabled={!year}
        >
          Check Leap Year
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-soft-blue rounded-lg whitespace-pre-line">
            <p className="text-center text-lg font-medium text-neutral-dark">
              {result}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};