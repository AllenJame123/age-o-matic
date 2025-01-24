import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cake, Calendar, Clock, PartyPopper, Stars } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { format, differenceInSeconds, addYears, isAfter, isSameDay } from "date-fns";
import { TimeBlock } from "./TimeBlock";
import { DateInput } from "./DateInput";
import { HowItWorks } from "./HowItWorks";
import { FAQ } from "./FAQ";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const BirthdayCountdownTimer = () => {
  const [month, setSelectedMonth] = useState<string>();
  const [day, setSelectedDay] = useState<string>();
  const [year, setSelectedYear] = useState<string>();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isToday, setIsToday] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const { toast } = useToast();

  const calculateNextBirthday = (birthDate: Date): Date => {
    const today = new Date();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();
    
    let nextBirthday = new Date(today.getFullYear(), birthMonth, birthDay);
    
    if (isAfter(today, nextBirthday)) {
      nextBirthday = addYears(nextBirthday, 1);
    }
    
    return nextBirthday;
  };

  const calculateTimeLeft = () => {
    if (!month || !day || !year) return;

    const birthDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const today = new Date();
    
    if (isAfter(birthDate, today)) {
      toast({
        title: "Invalid date",
        description: "Birthday cannot be in the future",
        variant: "destructive",
      });
      return;
    }

    const nextBirthday = calculateNextBirthday(birthDate);
    const todayCheck = isSameDay(today, nextBirthday);
    setIsToday(todayCheck);

    if (todayCheck) {
      toast({
        title: "🎉 Happy Birthday!",
        description: "Have a wonderful day! 🎂",
      });
      return;
    }

    const secondsLeft = differenceInSeconds(nextBirthday, today);
    
    setTimeLeft({
      days: Math.floor(secondsLeft / (60 * 60 * 24)),
      hours: Math.floor((secondsLeft % (60 * 60 * 24)) / (60 * 60)),
      minutes: Math.floor((secondsLeft % (60 * 60)) / 60),
      seconds: Math.floor(secondsLeft % 60),
    });
  };

  useEffect(() => {
    if (showTimer && month && day && year) {
      calculateTimeLeft();
      const timer = setInterval(calculateTimeLeft, 1000);
      return () => clearInterval(timer);
    }
  }, [month, day, year, showTimer]);

  const handleStart = () => {
    if (!month || !day || !year) {
      toast({
        title: "Missing information",
        description: "Please select all date fields",
        variant: "destructive",
      });
      return;
    }
    setShowTimer(true);
    calculateTimeLeft();
  };

  const handleReset = () => {
    setSelectedMonth(undefined);
    setSelectedDay(undefined);
    setSelectedYear(undefined);
    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    setIsToday(false);
    setShowTimer(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="w-full shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-2">
          <CardTitle className="flex items-center justify-center gap-3 text-3xl">
            <Cake className="h-8 w-8 text-primary" />
            Birthday Countdown
            <Stars className="h-8 w-8 text-primary" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <DateInput
            month={month}
            day={day}
            year={year}
            onMonthChange={setSelectedMonth}
            onDayChange={setSelectedDay}
            onYearChange={setSelectedYear}
          />

          <Button 
            onClick={handleStart}
            className="w-full bg-primary hover:bg-primary-light text-primary-foreground py-6 text-lg font-medium transition-colors duration-200"
          >
            Start Countdown
          </Button>

          {showTimer && !isToday && timeLeft.days >= 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
              <TimeBlock value={timeLeft.days} label="Days" icon={Calendar} />
              <TimeBlock value={timeLeft.hours} label="Hours" icon={Clock} />
              <TimeBlock value={timeLeft.minutes} label="Minutes" icon={Clock} />
              <TimeBlock value={timeLeft.seconds} label="Seconds" icon={Clock} />
            </div>
          )}

          {isToday && (
            <div className="text-center p-8 bg-gradient-to-r from-soft-purple via-white to-soft-purple rounded-xl shadow-lg">
              <PartyPopper className="h-16 w-16 text-[#FFD700] mx-auto mb-4" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-soft-purple bg-clip-text text-transparent">
                🎉 Happy Birthday! 🎂
              </h2>
            </div>
          )}

          {showTimer && (
            <Button 
              onClick={handleReset} 
              variant="outline" 
              className="w-full py-6 text-lg font-medium hover:bg-soft-gray transition-colors duration-200 border-2 border-primary"
            >
              Reset
            </Button>
          )}
        </CardContent>
      </Card>

      <HowItWorks />
      <FAQ />
    </div>
  );
};
