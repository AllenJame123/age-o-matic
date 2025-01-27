import { addWeeks } from "date-fns";
import {
  Table,
  TableBody,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PregnancyTableHeader } from "./PregnancyTableHeader";
import { PregnancyWeekRow } from "./PregnancyWeekRow";
import { pregnancyData } from "./pregnancyData";

interface WeekByWeekGuideProps {
  currentWeek: number;
  lastPeriodDate: Date;
}

export const WeekByWeekGuide = ({ currentWeek, lastPeriodDate }: WeekByWeekGuideProps) => {
  const getDateForWeek = (weekNumber: number) => {
    return addWeeks(lastPeriodDate, weekNumber - 1);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Pregnancy Timeline</h2>
      
      <div className="w-full overflow-hidden rounded-md border">
        <ScrollArea className="h-[600px] w-full">
          <div className="min-w-[600px]">
            <Table>
              <PregnancyTableHeader />
              <TableBody>
                {pregnancyData.map((week) => (
                  <PregnancyWeekRow
                    key={week.week}
                    week={week}
                    currentWeek={currentWeek}
                    getDateForWeek={getDateForWeek}
                  />
                ))}
              </TableBody>
            </Table>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};