import { format } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DateSelectorProps {
  label: string;
  date: {
    year: string;
    month: string;
    day: string;
  };
  setDate: (date: { year: string; month: string; day: string }) => void;
}

export const DateSelector = ({ label, date, setDate }: DateSelectorProps) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 150 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-2xl">
      <div className="space-y-4">
        <h3 className="font-medium text-gray-700 text-center">{label}</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Select onValueChange={(value) => setDate({ ...date, year: value })} value={date.year}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setDate({ ...date, month: value })} value={date.month}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month} value={month.toString()}>
                  {format(new Date(2024, month - 1), "MMMM")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setDate({ ...date, day: value })} value={date.day}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Day" />
            </SelectTrigger>
            <SelectContent>
              {days.map((day) => (
                <SelectItem key={day} value={day.toString()}>
                  {day}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};