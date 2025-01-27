import { DateResult } from "./types";
import { ResultCard } from "../age-calculator/ResultCard";

interface ResultsProps {
  result: DateResult;
  calculationType: string;
}

export const Results = ({ result, calculationType }: ResultsProps) => {
  if (calculationType === "difference" || calculationType === "business") {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-slideUp">
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
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 animate-slideUp">
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
    </div>
  );
};