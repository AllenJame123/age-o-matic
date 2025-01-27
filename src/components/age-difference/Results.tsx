import { ResultCard } from "../age-calculator/ResultCard";

interface ResultsProps {
  result: {
    years: number;
    months: number;
    days: number;
    totalDays: number;
    weeks: number;
    hours: number;
  };
}

export const Results = ({ result }: ResultsProps) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp w-full">
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
);