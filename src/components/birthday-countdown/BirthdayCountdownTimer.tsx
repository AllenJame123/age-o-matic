import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Cake, Calendar, Clock, Gift, PartyPopper, Stars } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { format, differenceInSeconds, addYears, isAfter, isSameDay } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const BirthdayCountdownTimer = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState<Date>();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isToday, setIsToday] = useState(false);
  const { toast } = useToast();

  const calculateNextBirthday = (date: Date): Date => {
    const today = new Date();
    const birthMonth = date.getMonth();
    const birthDay = date.getDate();
    
    let nextBirthday = new Date(today.getFullYear(), birthMonth, birthDay);
    
    if (isAfter(today, nextBirthday)) {
      nextBirthday = addYears(nextBirthday, 1);
    }
    
    return nextBirthday;
  };

  const calculateTimeLeft = () => {
    if (!birthDate) return;

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
    setBirthDate(undefined);
    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    setIsToday(false);
  };

  const TimeBlock = ({ value, label, icon: Icon }: { value: number; label: string; icon: any }) => (
    <div className="flex flex-col items-center p-6 bg-gradient-to-b from-soft-purple to-white rounded-xl shadow-lg animate-fadeIn hover:scale-105 transition-transform duration-200 border-2 border-soft-purple">
      <Icon className="h-8 w-8 text-primary mb-3 animate-bounce" />
      <span className="text-5xl font-bold text-primary mb-2 font-mono">{value.toString().padStart(2, '0')}</span>
      <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl animate-fadeIn bg-gradient-to-b from-white to-soft-gray rounded-2xl">
      <CardHeader className="text-center pb-2">
        <CardTitle className="flex items-center justify-center gap-3 text-3xl">
          <Cake className="h-8 w-8 text-primary animate-bounce" />
          Birthday Countdown
          <Stars className="h-8 w-8 text-primary animate-bounce" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
              <Gift className="h-5 w-5 text-primary" />
              Enter Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="text-lg py-6 px-4 border-2 border-soft-purple focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Select Birthday
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full text-lg py-6 px-4 border-2 border-soft-purple hover:bg-soft-purple/20"
                >
                  {birthDate ? format(birthDate, 'PPP') : 'Pick a date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={birthDate}
                  onSelect={setBirthDate}
                  disabled={(date) => isAfter(date, new Date())}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {birthDate && name && !isToday && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
            <TimeBlock value={timeLeft.days} label="Days" icon={Calendar} />
            <TimeBlock value={timeLeft.hours} label="Hours" icon={Clock} />
            <TimeBlock value={timeLeft.minutes} label="Minutes" icon={Clock} />
            <TimeBlock value={timeLeft.seconds} label="Seconds" icon={Clock} />
          </div>
        )}

        {isToday && (
          <div className="text-center p-8 bg-gradient-to-r from-soft-purple via-white to-soft-purple rounded-xl animate-pulse shadow-lg">
            <PartyPopper className="h-16 w-16 text-primary mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl font-bold text-primary">
              🎉 Happy Birthday, {name}! 🎂
            </h2>
          </div>
        )}

        <Button 
          onClick={handleReset} 
          variant="outline" 
          className="w-full py-6 text-lg font-medium hover:bg-soft-purple transition-colors duration-200 border-2 border-soft-purple"
        >
          Reset
        </Button>
      </CardContent>
    </Card>
  );
};