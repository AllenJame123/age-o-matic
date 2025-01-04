import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { format } from "date-fns";

interface DateInputProps {
  month: string | undefined;
  day: string | undefined;
  year: string | undefined;
  onMonthChange: (value: string) => void;
  onDayChange: (value: string) => void;
  onYearChange: (value: string) => void;
}

export const DateInput = ({
  month,
  day,
  year,
  onMonthChange,
  onDayChange,
  onYearChange,
}: DateInputProps) => {
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

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center gap-2">
          <Calendar className="h-4 w-4 text-[#FF69B4]" />
          Month
        </label>
        <Select value={month} onValueChange={onMonthChange}>
          <SelectTrigger className="bg-soft-purple border-[#E5DEFF] focus:ring-[#9b87f5]">
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
        <Select value={day} onValueChange={onDayChange}>
          <SelectTrigger className="bg-soft-purple border-[#E5DEFF] focus:ring-[#9b87f5]">
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
        <Select value={year} onValueChange={onYearChange}>
          <SelectTrigger className="bg-soft-purple border-[#E5DEFF] focus:ring-[#9b87f5]">
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
  );
};