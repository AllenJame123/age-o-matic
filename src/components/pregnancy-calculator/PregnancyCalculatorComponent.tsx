import { useState } from "react";
import { format, addWeeks, differenceInWeeks } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { HowItWorks } from "./HowItWorks";
import { FAQ } from "./FAQ";
import { WeekByWeekGuide } from "./WeekByWeekGuide";

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
    <div className="space-y-8 animate-fadeIn">
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
            <Label>First Day of Last Period</Label>
            <div className="border rounded-lg p-2 bg-white">
              <Calendar
                mode="single"
                selected={lastPeriodDate}
                onSelect={setLastPeriodDate}
                className="rounded-md border"
              />
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
              <Card className="p-4 bg-soft-blue">
                <h3 className="font-semibold text-lg mb-1">Current Week</h3>
                <p className="text-3xl font-bold text-primary">
                  Week {pregnancyDetails.currentWeek}
                </p>
                <p className="text-sm text-gray-600 mt-1">of pregnancy</p>
              </Card>
              <Card className="p-4 bg-soft-blue">
                <h3 className="font-semibold text-lg mb-1">Due Date</h3>
                <p className="text-3xl font-bold text-primary">
                  {format(pregnancyDetails.dueDate, "MMMM d, yyyy")}
                </p>
                <p className="text-sm text-gray-600 mt-1">estimated delivery</p>
              </Card>
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
      <FAQ />
    </div>
  );
};