import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Cake } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { format, differenceInSeconds, addYears, isAfter, isSameDay } from "date-fns";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const BirthdayCountdownTimer = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isToday, setIsToday] = useState(false);
  const { toast } = useToast();

  const calculateNextBirthday = (birthDateStr: string): Date => {
    const today = new Date();
    const birth = new Date(birthDateStr);
    const birthMonth = birth.getMonth();
    const birthDay = birth.getDate();
    
    let nextBirthday = new Date(today.getFullYear(), birthMonth, birthDay);
    
    if (isAfter(today, nextBirthday)) {
      nextBirthday = addYears(nextBirthday, 1);
    }
    
    return nextBirthday;
  };

  const calculateTimeLeft = () => {
    if (!birthDate) return;

    const birthDateObj = new Date(birthDate);
    const today = new Date();
    
    if (isAfter(birthDateObj, today)) {
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
        description: `Happy Birthday ${name}! 🎂`,
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
    if (birthDate) {
      const timer = setInterval(calculateTimeLeft, 1000);
      return () => clearInterval(timer);
    }
  }, [birthDate, name]);

  const handleReset = () => {
    setName("");
    setBirthDate("");
    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    setIsToday(false);
  };

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center p-4 bg-soft-purple rounded-lg animate-fade-in">
      <span className="text-4xl font-bold text-primary mb-2">{value}</span>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg animate-fade-in">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Cake className="h-6 w-6 text-primary" />
          Birthday Countdown Timer
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="birthdate" className="text-sm font-medium">
              Birthday
            </label>
            <Input
              id="birthdate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              max={format(new Date(), "yyyy-MM-dd")}
              className="w-full"
            />
          </div>
        </div>

        {birthDate && name && !isToday && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <TimeBlock value={timeLeft.days} label="Days" />
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <TimeBlock value={timeLeft.minutes} label="Minutes" />
            <TimeBlock value={timeLeft.seconds} label="Seconds" />
          </div>
        )}

        {isToday && (
          <div className="text-center p-6 bg-soft-purple rounded-lg animate-bounce">
            <h2 className="text-2xl font-bold text-primary">
              🎉 Happy Birthday, {name}! 🎂
            </h2>
          </div>
        )}

        <Button 
          onClick={handleReset} 
          variant="outline" 
          className="w-full"
        >
          Reset
        </Button>
      </CardContent>
    </Card>
  );
};