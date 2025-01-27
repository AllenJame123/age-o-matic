import { addWeeks, format } from "date-fns";
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
          <div className="min-w-[300px] lg:min-w-[600px]">
            <div className="block sm:hidden">
              {/* Mobile view */}
              <div className="divide-y">
                {pregnancyData.map((week) => (
                  <div 
                    key={week.week} 
                    className={`p-4 space-y-2 ${
                      currentWeek === week.week ? "bg-primary/10 font-bold" : ""
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg text-primary">Week {week.week}</span>
                      <span className="text-sm text-neutral-gray">{week.trimester}</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div>
                        <div className="font-bold text-primary-dark">Date:</div>
                        <div>{format(getDateForWeek(week.week), "d MMM yyyy")}</div>
                      </div>
                      <div>
                        <div className="font-bold text-primary-dark">Development:</div>
                        <div className="text-left">{week.development}</div>
                      </div>
                      <div>
                        <div className="font-bold text-primary-dark">Size:</div>
                        <div>{week.size}</div>
                      </div>
                      <div>
                        <div className="font-bold text-primary-dark">Procedures:</div>
                        <div className="text-left">{week.procedures}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop view */}
            <div className="hidden sm:block">
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
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};