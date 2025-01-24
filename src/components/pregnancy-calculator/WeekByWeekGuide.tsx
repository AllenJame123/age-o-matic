import { getComparisonForWeek } from "@/utils/babySize";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

interface WeekByWeekGuideProps {
  currentWeek: number;
}

interface TrimesterSection {
  title: string;
  weeks: number[];
  description: string;
}

const trimesterSections: TrimesterSection[] = [
  {
    title: "First Trimester",
    weeks: Array.from({ length: 12 }, (_, i) => i + 1),
    description: "Early development and formation of major organs"
  },
  {
    title: "Second Trimester",
    weeks: Array.from({ length: 14 }, (_, i) => i + 13),
    description: "Rapid growth and movement begins"
  },
  {
    title: "Third Trimester",
    weeks: Array.from({ length: 14 }, (_, i) => i + 27),
    description: "Final development and preparation for birth"
  }
];

const fetchWeekDetails = async (week: number) => {
  try {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=1&explaintext=1&titles=Pregnancy_week_${week}&origin=*`
    );
    const data = await response.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    return pages[pageId].extract || null;
  } catch (error) {
    console.error(`Error fetching week ${week} details:`, error);
    return null;
  }
}

export const WeekByWeekGuide = ({ currentWeek }: WeekByWeekGuideProps) => {
  const { data: weeklyData, isLoading } = useQuery({
    queryKey: ['pregnancy-weeks'],
    queryFn: async () => {
      const allWeeks = Array.from({ length: 40 }, (_, i) => i + 1);
      const details = await Promise.all(
        allWeeks.map(async (week) => ({
          week,
          details: await fetchWeekDetails(week),
          size: getComparisonForWeek(week)
        }))
      );
      return details;
    }
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Complete Pregnancy Timeline</h2>
      
      <ScrollArea className="h-[600px] rounded-md border p-4">
        <div className="space-y-8">
          {trimesterSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="sticky top-0 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-primary">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>

              <div className="grid gap-4">
                {section.weeks.map((week) => {
                  const weekData = weeklyData?.find(w => w.week === week);
                  const size = weekData?.size;

                  return (
                    <Card 
                      key={week}
                      className={`p-4 ${week === currentWeek ? 'border-primary border-2' : ''}`}
                    >
                      <h4 className="text-lg font-semibold mb-2">
                        Week {week}
                        {week === currentWeek && (
                          <span className="ml-2 text-primary">(Current Week)</span>
                        )}
                      </h4>
                      
                      {size && (
                        <p className="text-sm text-gray-600 mb-2">
                          Size: {size.measurement}
                        </p>
                      )}

                      <p className="text-gray-700">
                        {weekData?.details || "Development information not available for this week."}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};