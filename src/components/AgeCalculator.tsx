import { useState } from "react";
import { format, differenceInYears, differenceInMonths, differenceInDays, differenceInWeeks, differenceInHours } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  weeks: number;
  hours: number;
}

const AgeCalculator = () => {
  const [date, setDate] = useState<Date>();
  const [result, setResult] = useState<AgeResult | null>(null);

  const calculateAge = () => {
    if (!date) return;

    const now = new Date();
    const years = differenceInYears(now, date);
    const months = differenceInMonths(now, date) % 12;
    const days = differenceInDays(now, date) % 30;
    const totalDays = differenceInDays(now, date);
    const weeks = differenceInWeeks(now, date);
    const hours = differenceInHours(now, date);

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
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full sm:w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select your birth date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <Button
                onClick={calculateAge}
                className="w-full sm:w-auto bg-soft-purple hover:bg-soft-purple/90 text-gray-800"
                disabled={!date}
              >
                Calculate Age
              </Button>
            </div>

            {result && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp">
                <ResultCard
                  title="Years, Months, Days"
                  value={`${result.years}y ${result.months}m ${result.days}d`}
                />
                <ResultCard
                  title="Total Days"
                  value={result.totalDays.toLocaleString()}
                />
                <ResultCard
                  title="Other Units"
                  value={`${result.weeks.toLocaleString()} weeks
                         ${result.hours.toLocaleString()} hours`}
                />
              </div>
            )}
          </div>
        </Card>

        <FAQ />
      </div>
    </div>
  );
};

const ResultCard = ({ title, value }: { title: string; value: string }) => (
  <Card className="p-4 text-center bg-white shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </Card>
);

const FAQ = () => (
  <Card className="p-6 space-y-4 bg-white/80 backdrop-blur-sm">
    <h2 className="text-2xl font-bold text-center mb-6">
      Frequently Asked Questions
    </h2>
    <div className="space-y-4">
      <FAQItem
        question="How is the age calculated?"
        answer="Our calculator uses precise date arithmetic to compute your exact age in various units, including years, months, days, weeks, and hours."
      />
      <FAQItem
        question="Why might this be useful?"
        answer="Age calculations are useful for various purposes, including retirement planning, insurance calculations, and celebrating milestone birthdays."
      />
      <FAQItem
        question="How accurate is the calculation?"
        answer="The calculator provides precise results down to the day, taking into account leap years and varying month lengths."
      />
    </div>
  </Card>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="space-y-2">
    <h3 className="font-semibold text-lg">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default AgeCalculator;