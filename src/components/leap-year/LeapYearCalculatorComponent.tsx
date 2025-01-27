import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    setResult(
      isLeap
        ? `${yearNum} is a leap year! It has 366 days.`
        : `${yearNum} is not a leap year. It has 365 days.`
    );
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="year" className="block text-sm font-medium text-neutral-dark">
            Enter Year
          </label>
          <Input
            id="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="e.g., 2024"
            className="w-full"
          />
        </div>
        
        <Button
          onClick={handleCalculate}
          className="w-full"
          disabled={!year}
        >
          Check Leap Year
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-soft-blue rounded-lg">
            <p className="text-center text-lg font-medium text-neutral-dark">
              {result}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};