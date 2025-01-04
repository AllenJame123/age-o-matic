import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cake, Calendar, Clock, Gift, PartyPopper, Stars } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { format, differenceInSeconds, addYears, isAfter, isSameDay, setYear, setMonth, setDate } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
  const { toast } = useToast();

  const months = Array.from({ length: 12 }, (_, i) => ({
    value: String(i + 1),
    label: format(new Date(2024, i, 1), 'MMMM')
  }));

  const days = Array.from({ length: 31 }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1)
  }));

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => ({
    value: String(currentYear - i),
    label: String(currentYear - i)
  }));

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
    if (month && day && year) {
      const timer = setInterval(calculateTimeLeft, 1000);
      return () => clearInterval(timer);
    }
  }, [month, day, year]);

  const handleReset = () => {
    setSelectedMonth(undefined);
    setSelectedDay(undefined);
    setSelectedYear(undefined);
    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    setIsToday(false);
  };

  const TimeBlock = ({ value, label, icon: Icon }: { value: number; label: string; icon: any }) => (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF69B4] to-[#4B0082] rounded-xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
      <div className="relative flex flex-col items-center p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <Icon className="h-8 w-8 text-[#FF69B4] mb-3" />
        <div className="text-6xl font-bold bg-gradient-to-r from-[#FF69B4] to-[#4B0082] bg-clip-text text-transparent font-mono">
          {value.toString().padStart(2, '0')}
        </div>
        <span className="text-sm font-medium text-gray-600 uppercase tracking-wider mt-2">{label}</span>
      </div>
    </div>
  );

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl bg-gradient-to-b from-white to-[#F8F0FF] rounded-2xl">
      <CardHeader className="text-center pb-2">
        <CardTitle className="flex items-center justify-center gap-3 text-3xl">
          <Cake className="h-8 w-8 text-[#FF69B4]" />
          Birthday Countdown
          <Stars className="h-8 w-8 text-[#4B0082]" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#FF69B4]" />
              Month
            </label>
            <Select value={month} onValueChange={setSelectedMonth}>
              <SelectTrigger>
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((m) => (
                  <SelectItem key={m.value} value={m.value}>
                    {m.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#FF69B4]" />
              Day
            </label>
            <Select value={day} onValueChange={setSelectedDay}>
              <SelectTrigger>
                <SelectValue placeholder="Day" />
              </SelectTrigger>
              <SelectContent>
                {days.map((d) => (
                  <SelectItem key={d.value} value={d.value}>
                    {d.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#FF69B4]" />
              Year
            </label>
            <Select value={year} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((y) => (
                  <SelectItem key={y.value} value={y.value}>
                    {y.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {month && day && year && !isToday && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
            <TimeBlock value={timeLeft.days} label="Days" icon={Calendar} />
            <TimeBlock value={timeLeft.hours} label="Hours" icon={Clock} />
            <TimeBlock value={timeLeft.minutes} label="Minutes" icon={Clock} />
            <TimeBlock value={timeLeft.seconds} label="Seconds" icon={Clock} />
          </div>
        )}

        {isToday && (
          <div className="text-center p-8 bg-gradient-to-r from-[#FF69B4] via-white to-[#4B0082] rounded-xl shadow-lg">
            <PartyPopper className="h-16 w-16 text-[#FFD700] mx-auto mb-4" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FF69B4] to-[#4B0082] bg-clip-text text-transparent">
              🎉 Happy Birthday! 🎂
            </h2>
          </div>
        )}

        <Button 
          onClick={handleReset} 
          variant="outline" 
          className="w-full py-6 text-lg font-medium hover:bg-[#F8F0FF] transition-colors duration-200 border-2 border-[#FF69B4]"
        >
          Reset
        </Button>
      </CardContent>
    </Card>
  );
};