import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

interface DateInputProps {
  month: string | undefined;
  day: string | undefined;
  year: string | undefined;
  onMonthChange: (value: string) => void;
  onDayChange: (value: string) => void;
  onYearChange: (value: string) => void;
  label?: string;
}

export const DateInput = ({
  month,
  day,
  year,
  onMonthChange,
  onDayChange,
  onYearChange,
  label,
}: DateInputProps) => {
  const [isTyping, setIsTyping] = useState({
    month: false,
    day: false,
    year: false,
  });

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

  const handleInputChange = (
    type: 'month' | 'day' | 'year',
    value: string,
    onChange: (value: string) => void,
    max: number
  ) => {
    const numValue = parseInt(value);
    if (value === '') {
      onChange('');
    } else if (!isNaN(numValue) && numValue > 0 && numValue <= max) {
      onChange(String(numValue));
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          {label || 'Month'}
        </label>
        {isTyping.month ? (
          <Input
            value={month || ''}
            onChange={(e) => handleInputChange('month', e.target.value, onMonthChange, 12)}
            onBlur={() => setIsTyping({ ...isTyping, month: false })}
            type="number"
            min="1"
            max="12"
            className="bg-soft-gray border-soft-purple focus:ring-primary"
            placeholder="1-12"
          />
        ) : (
          <Select value={month} onValueChange={onMonthChange} onOpenChange={() => setIsTyping({ ...isTyping, month: true })}>
            <SelectTrigger className="bg-soft-gray border-soft-purple focus:ring-primary">
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
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          Day
        </label>
        {isTyping.day ? (
          <Input
            value={day || ''}
            onChange={(e) => handleInputChange('day', e.target.value, onDayChange, 31)}
            onBlur={() => setIsTyping({ ...isTyping, day: false })}
            type="number"
            min="1"
            max="31"
            className="bg-soft-gray border-soft-purple focus:ring-primary"
            placeholder="1-31"
          />
        ) : (
          <Select value={day} onValueChange={onDayChange} onOpenChange={() => setIsTyping({ ...isTyping, day: true })}>
            <SelectTrigger className="bg-soft-gray border-soft-purple focus:ring-primary">
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
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          Year
        </label>
        {isTyping.year ? (
          <Input
            value={year || ''}
            onChange={(e) => handleInputChange('year', e.target.value, onYearChange, currentYear)}
            onBlur={() => setIsTyping({ ...isTyping, year: false })}
            type="number"
            min={currentYear - 100}
            max={currentYear}
            className="bg-soft-gray border-soft-purple focus:ring-primary"
            placeholder="Year"
          />
        ) : (
          <Select value={year} onValueChange={onYearChange} onOpenChange={() => setIsTyping({ ...isTyping, year: true })}>
            <SelectTrigger className="bg-soft-gray border-soft-purple focus:ring-primary">
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
        )}
      </div>
    </div>
  );
};