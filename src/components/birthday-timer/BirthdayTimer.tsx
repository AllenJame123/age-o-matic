import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Cake } from "lucide-react";
import { cn } from "@/lib/utils";
import { TimeBlock } from "./TimeBlock";
import { calculateTimeUntilBirthday } from "./utils";

export const BirthdayTimer = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState<Date>();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    if (!birthDate) return;

    const timer = setInterval(() => {
      const { timeUntilBirthday, isToday } = calculateTimeUntilBirthday(birthDate);
      setTimeLeft(timeUntilBirthday);
      setIsBirthday(isToday);
    }, 1000);

    return () => clearInterval(timer);
  }, [birthDate]);

  const handleReset = () => {
    setName("");
    setBirthDate(undefined);
    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    setIsBirthday(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-6 space-y-6 bg-white/80 backdrop-blur-sm animate-fadeIn">
      <div className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-800">
        <Cake className="w-8 h-8 text-purple-500" />
        <h1>Birthday Countdown Timer</h1>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label>Birthday</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !birthDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {birthDate ? format(birthDate, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={birthDate}
                onSelect={setBirthDate}
                disabled={(date) => date > new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {birthDate && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <TimeBlock label="Days" value={timeLeft.days} />
            <TimeBlock label="Hours" value={timeLeft.hours} />
            <TimeBlock label="Minutes" value={timeLeft.minutes} />
            <TimeBlock label="Seconds" value={timeLeft.seconds} />
          </div>

          {isBirthday && name && (
            <div className="text-center p-4 bg-purple-100 rounded-lg animate-pulse">
              <p className="text-xl font-bold text-purple-800">
                🎉 Happy Birthday, {name}! 🎂
              </p>
            </div>
          )}

          <Button
            onClick={handleReset}
            variant="outline"
            className="w-full"
          >
            Reset Timer
          </Button>
        </div>
      )}
    </Card>
  );
};