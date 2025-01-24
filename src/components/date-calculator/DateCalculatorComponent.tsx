import { useState } from "react";
import { format, addDays, addMonths, addYears, differenceInDays, differenceInBusinessDays, isWeekend } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { HowItWorks } from "./HowItWorks";
import { FAQ } from "./FAQ";
import { ResultCard } from "../age-calculator/ResultCard";
import { toast } from "sonner";

type CalculationType = "difference" | "add" | "subtract" | "business";

interface DateResult {
  totalDays: number;
  businessDays: number;
  formattedDate?: string;
  dayOfWeek?: string;
}

export const DateCalculatorComponent = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [calculationType, setCalculationType] = useState<CalculationType>("difference");
  const [daysToAddSubtract, setDaysToAddSubtract] = useState<number>(0);
  const [result, setResult] = useState<DateResult | null>(null);

  const calculateDates = () => {
    if (!startDate) {
      toast.error("Please select a start date");
      return;
    }

    let calculationResult: DateResult | null = null;

    switch (calculationType) {
      case "difference":
        if (!endDate) {
          toast.error("Please select an end date");
          return;
        }
        const totalDays = Math.abs(differenceInDays(endDate, startDate));
        const businessDays = Math.abs(differenceInBusinessDays(endDate, startDate));
        calculationResult = {
          totalDays,
          businessDays,
          dayOfWeek: format(endDate, "EEEE"),
        };
        break;

      case "add":
      case "subtract":
        const newDate = calculationType === "add" 
          ? addDays(startDate, daysToAddSubtract)
          : addDays(startDate, -daysToAddSubtract);
        calculationResult = {
          totalDays: daysToAddSubtract,
          businessDays: 0,
          formattedDate: format(newDate, "PPP"),
          dayOfWeek: format(newDate, "EEEE"),
        };
        break;

      case "business":
        if (!endDate) {
          toast.error("Please select an end date");
          return;
        }
        calculationResult = {
          totalDays: Math.abs(differenceInDays(endDate, startDate)),
          businessDays: Math.abs(differenceInBusinessDays(endDate, startDate)),
          dayOfWeek: format(endDate, "EEEE"),
        };
        break;
    }

    setResult(calculationResult);
  };

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
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Calculation Type</Label>
                <Select 
                  value={calculationType} 
                  onValueChange={(value) => setCalculationType(value as CalculationType)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select calculation type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="difference">Date Difference</SelectItem>
                    <SelectItem value="add">Add Days</SelectItem>
                    <SelectItem value="subtract">Subtract Days</SelectItem>
                    <SelectItem value="business">Business Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {(calculationType === "add" || calculationType === "subtract") && (
                <div className="space-y-2">
                  <Label>Number of Days</Label>
                  <input
                    type="number"
                    min="0"
                    value={daysToAddSubtract}
                    onChange={(e) => setDaysToAddSubtract(parseInt(e.target.value) || 0)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <div className="border rounded-lg p-2 bg-white">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    className="rounded-md border"
                  />
                </div>
              </div>

              {(calculationType === "difference" || calculationType === "business") && (
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <div className="border rounded-lg p-2 bg-white">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      className="rounded-md border"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center">
              <Button
                onClick={calculateDates}
                className="bg-primary hover:bg-primary-light text-white"
                disabled={!startDate || (["difference", "business"].includes(calculationType) && !endDate)}
              >
                Calculate
              </Button>
            </div>

            {result && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp">
                {calculationType === "difference" || calculationType === "business" ? (
                  <>
                    <ResultCard
                      title="Total Days"
                      value={result.totalDays.toString()}
                      description="Including weekends and holidays"
                    />
                    <ResultCard
                      title="Business Days"
                      value={result.businessDays.toString()}
                      description="Excluding weekends"
                    />
                    <ResultCard
                      title="End Date Details"
                      value={result.dayOfWeek || ""}
                      description="Day of the week"
                    />
                  </>
                ) : (
                  <>
                    <ResultCard
                      title="Result Date"
                      value={result.formattedDate || ""}
                      description={result.dayOfWeek || ""}
                    />
                    <ResultCard
                      title="Days Changed"
                      value={result.totalDays.toString()}
                      description={`${calculationType === "add" ? "Added" : "Subtracted"} days`}
                    />
                  </>
                )}
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