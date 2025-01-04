import { useState } from "react";
import { format, differenceInYears, differenceInMonths, differenceInDays, differenceInWeeks, differenceInHours } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ResultCard } from "../age-calculator/ResultCard";

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  weeks: number;
  hours: number;
}

export const AgeDifferenceCalculator = () => {
  const [firstDate, setFirstDate] = useState({
    year: "",
    month: "",
    day: "",
  });
  const [secondDate, setSecondDate] = useState({
    year: "",
    month: "",
    day: "",
  });
  const [result, setResult] = useState<AgeResult | null>(null);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 150 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

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

  const DateInput = ({ label, date, setDate }: any) => (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-700">{label}</h3>
      <div className="flex flex-col sm:flex-row gap-4">
        <Select onValueChange={(value) => setDate({ ...date, year: value })} value={date.year}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setDate({ ...date, month: value })} value={date.month}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent>
            {months.map((month) => (
              <SelectItem key={month} value={month.toString()}>
                {format(new Date(2024, month - 1), "MMMM")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setDate({ ...date, day: value })} value={date.day}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Day" />
          </SelectTrigger>
          <SelectContent>
            {days.map((day) => (
              <SelectItem key={day} value={day.toString()}>
                {day}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-soft-gray p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Age Difference Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate the exact age difference between two dates
          </p>
        </div>

        <Card className="p-6 backdrop-blur-sm bg-white/80 shadow-lg">
          <div className="space-y-8">
            <DateInput label="First Date" date={firstDate} setDate={setFirstDate} />
            <DateInput label="Second Date" date={secondDate} setDate={setSecondDate} />

            <div className="flex justify-center">
              <Button
                onClick={calculateDifference}
                className="bg-soft-purple hover:bg-soft-purple/90 text-gray-800"
                disabled={!firstDate.year || !firstDate.month || !firstDate.day ||
                         !secondDate.year || !secondDate.month || !secondDate.day}
              >
                Calculate Difference
              </Button>
            </div>

            {result && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp">
                <ResultCard
                  title="Age Difference"
                  value={`${result.years} years, ${result.months} months, ${result.days} days`}
                  description="Precise age difference"
                />
                <ResultCard
                  title="Total Days"
                  value={result.totalDays.toLocaleString()}
                  description="Number of days between dates"
                />
                <ResultCard
                  title="Other Units"
                  value={`${result.weeks.toLocaleString()} weeks`}
                  description={`${result.hours.toLocaleString()} hours`}
                />
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};