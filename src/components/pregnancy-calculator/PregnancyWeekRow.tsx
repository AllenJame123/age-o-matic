import { format } from "date-fns";
import { TableCell, TableRow } from "@/components/ui/table";

interface PregnancyWeekRowProps {
  week: {
    trimester: string;
    week: number;
    development: string;
    size: string;
    procedures: string;
  };
  currentWeek: number;
  getDateForWeek: (weekNumber: number) => Date;
}

export const PregnancyWeekRow = ({ week, currentWeek, getDateForWeek }: PregnancyWeekRowProps) => {
  return (
    <TableRow 
      key={week.week}
      className={`${currentWeek === week.week ? "bg-primary/10 font-bold" : ""}`}
    >
      <TableCell className="whitespace-nowrap font-medium">{week.trimester}</TableCell>
      <TableCell className="whitespace-nowrap">
        {format(getDateForWeek(week.week), "d MMM yyyy")}
      </TableCell>
      <TableCell className="whitespace-nowrap">Week {week.week}</TableCell>
      <TableCell>{week.development}</TableCell>
      <TableCell className="whitespace-nowrap">{week.size}</TableCell>
      <TableCell>{week.procedures}</TableCell>
    </TableRow>
  );
};