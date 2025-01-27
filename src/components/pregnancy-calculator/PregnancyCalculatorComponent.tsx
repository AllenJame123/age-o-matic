import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { WeekByWeekGuide } from "./WeekByWeekGuide";
import { HowItWorks } from "./HowItWorks";
import { FAQ } from "./FAQ";
import { WhyUseSection } from "./WhyUseSection";
import { addWeeks, differenceInWeeks } from "date-fns";
import { ResultCard } from "../age-calculator/ResultCard";

export const PregnancyCalculatorComponent = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState<Date>();
  const [pregnancyDetails, setPregnancyDetails] = useState<{
    currentWeek: number;
    dueDate: Date;
  } | null>(null);

  const calculatePregnancy = () => {
    if (!lastPeriodDate) {
      toast.error("Please select your last period date");
      return;
    }

    const today = new Date();
    const dueDate = addWeeks(lastPeriodDate, 40);
    const currentWeek = Math.max(0, differenceInWeeks(today, lastPeriodDate));

    if (currentWeek > 42) {
      toast.error("The date you entered is too far in the past");
      return;
    }

    setPregnancyDetails({
      currentWeek,
      dueDate,
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Pregnancy Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Track your pregnancy week by week and get your estimated due date
        </p>
      </div>

      <Card className="p-6 backdrop-blur-sm bg-white/80 shadow-lg">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-center block text-xl font-semibold text-primary">
              First Day of Last Period
            </Label>
            <div className="flex justify-center">
              <div className="border rounded-lg p-2 bg-white w-fit">
                <Calendar
                  mode="single"
                  selected={lastPeriodDate}
                  onSelect={setLastPeriodDate}
                  className="rounded-md border"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={calculatePregnancy}
              className="bg-primary hover:bg-primary-light text-white"
              disabled={!lastPeriodDate}
            >
              Calculate
            </Button>
          </div>

          {pregnancyDetails && (
            <div className="grid gap-4 sm:grid-cols-2 animate-slideUp">
              <ResultCard
                title="Current Week"
                value={`Week ${pregnancyDetails.currentWeek}`}
                description="of pregnancy"
              />
              <ResultCard
                title="Due Date"
                value={pregnancyDetails.dueDate.toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
                description="estimated delivery"
              />
            </div>
          )}
        </div>
      </Card>

      {pregnancyDetails && lastPeriodDate && (
        <WeekByWeekGuide 
          currentWeek={pregnancyDetails.currentWeek} 
          lastPeriodDate={lastPeriodDate}
        />
      )}

      <HowItWorks />
      <WhyUseSection />
      <FAQ />
    </div>
  );
};