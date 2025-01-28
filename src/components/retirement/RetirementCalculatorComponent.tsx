import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HowItWorks } from "./HowItWorks";
import { FAQ } from "./FAQ";
import { ResultCard } from "../age-calculator/ResultCard";
import { toast } from "sonner";
import { DateInput } from "../birthday-countdown/DateInput";
import { addYears, differenceInDays, format } from "date-fns";

export const RetirementCalculatorComponent = () => {
  const [month, setMonth] = useState<string>();
  const [day, setDay] = useState<string>();
  const [year, setYear] = useState<string>();
  const [retirementAge, setRetirementAge] = useState<string>("65");
  const [result, setResult] = useState<{
    retirementDate: string;
    daysToRetire: number;
    daysToWork: number;
  } | null>(null);

  const calculateRetirement = () => {
    if (!month || !day || !year || !retirementAge) {
      toast.error("Please fill in all fields");
      return;
    }

    const birthDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const today = new Date();
    
    // Calculate retirement date by adding retirement age to birth date
    const retirementDate = addYears(birthDate, parseInt(retirementAge));
    
    // Calculate days until retirement
    const daysToRetire = differenceInDays(retirementDate, today);
    
    // Calculate remaining working days (excluding weekends approximately)
    const daysToWork = Math.round(daysToRetire * (5/7)); // Approximate working days

    setResult({
      retirementDate: format(retirementDate, 'd MMM yyyy'),
      daysToRetire,
      daysToWork,
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
            Plan your retirement by calculating when you can retire based on your birth date
          </p>
        </div>

        <Card className="p-6 backdrop-blur-sm bg-white/80 shadow-lg">
          <div className="space-y-6">
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label className="text-left block">Enter your birthday</Label>
                <DateInput
                  month={month}
                  day={day}
                  year={year}
                  onMonthChange={setMonth}
                  onDayChange={setDay}
                  onYearChange={setYear}
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-left block">Choose your retirement age</Label>
                <Select value={retirementAge} onValueChange={setRetirementAge}>
                  <SelectTrigger className="bg-soft-gray border-soft-purple focus:ring-primary">
                    <SelectValue placeholder="Select retirement age" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 51 }, (_, i) => i + 50).map((age) => (
                      <SelectItem key={age} value={age.toString()}>
                        {age} years
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={calculateRetirement}
                className="bg-primary hover:bg-primary-light text-white"
              >
                Calculate Retirement Age
              </Button>
            </div>

            {result && (
              <div className="space-y-4 animate-slideUp">
                <ResultCard
                  title="Your retirement date is"
                  value={result.retirementDate}
                  description="Based on your birth date and chosen retirement age"
                />
                <ResultCard
                  title="How many days to retire?"
                  value={`${result.daysToRetire} days`}
                  description="Total days until retirement"
                />
                <ResultCard
                  title="How many more days to work?"
                  value={`${result.daysToWork} days`}
                  description="Approximate working days left (excluding weekends)"
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