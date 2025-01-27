import { useState } from "react";
import { format, differenceInYears, differenceInMonths, differenceInDays, differenceInWeeks, differenceInHours } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ResultCard } from "./age-calculator/ResultCard";
import { HowItWorks } from "./age-calculator/HowItWorks";
import { WhyUseSection } from "./age-calculator/WhyUseSection";
import { FAQ } from "./age-calculator/FAQ";

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  weeks: number;
  hours: number;
}

const AgeCalculator = () => {
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [result, setResult] = useState<AgeResult | null>(null);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 150 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const calculateAge = () => {
    if (!selectedYear || !selectedMonth || !selectedDay) return;

    const birthDate = new Date(
      parseInt(selectedYear),
      parseInt(selectedMonth) - 1,
      parseInt(selectedDay)
    );
    const now = new Date();

    const years = differenceInYears(now, birthDate);
    const months = differenceInMonths(now, birthDate) % 12;
    const days = differenceInDays(now, birthDate) % 30;
    const totalDays = differenceInDays(now, birthDate);
    const weeks = differenceInWeeks(now, birthDate);
    const hours = differenceInHours(now, birthDate);

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
            Age Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your exact age in years, months, days, and more
          </p>
        </div>

        <Card className="p-6 backdrop-blur-sm bg-white/80 shadow-lg">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Select onValueChange={setSelectedYear} value={selectedYear}>
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

              <Select onValueChange={setSelectedMonth} value={selectedMonth}>
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

              <Select onValueChange={setSelectedDay} value={selectedDay}>
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

              <Button
                onClick={calculateAge}
                className="w-full sm:w-auto bg-primary hover:bg-primary-light text-primary-foreground"
                disabled={!selectedYear || !selectedMonth || !selectedDay}
              >
                Calculate Age
              </Button>
            </div>

            {result && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp">
                <ResultCard
                  title="Your Age"
                  value={`${result.years} years, ${result.months} months, ${result.days} days`}
                  description="Precise age calculation"
                />
                <ResultCard
                  title="Total Days"
                  value={result.totalDays.toLocaleString()}
                  description="Number of days you've lived"
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

        <HowItWorks />
        <WhyUseSection />
        <FAQ />
      </div>
    </div>
  );
};

export default AgeCalculator;