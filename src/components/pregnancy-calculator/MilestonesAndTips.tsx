import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface MilestonesAndTipsProps {
  week: number;
}

// Fallback data from CDC guidelines
const cdcMilestones: Record<number, { milestone: string; tip: string }> = {
  4: {
    milestone: "Major organs begin to form, including the neural tube which will become the brain and spinal cord.",
    tip: "Start taking prenatal vitamins if you haven't already.",
  },
  8: {
    milestone: "Baby's heart begins to beat. Basic facial features are forming.",
    tip: "Schedule your first prenatal appointment if you haven't yet.",
  },
  12: {
    milestone: "Most major organs and structures have formed. The risk of miscarriage drops.",
    tip: "Stay hydrated and maintain a balanced diet rich in folic acid.",
  },
  16: {
    milestone: "Baby's movements become more coordinated. The skeleton starts hardening.",
    tip: "Consider starting pregnancy-safe exercises if cleared by your doctor.",
  },
  20: {
    milestone: "You might feel the first movements. Gender can usually be determined.",
    tip: "Keep track of your baby's movements and maintain regular check-ups.",
  },
  24: {
    milestone: "Baby's hearing is developing. They may respond to loud sounds.",
    tip: "Talk or sing to your baby - they can hear you now!",
  },
  28: {
    milestone: "Baby's eyes can open and close. Brain growth accelerates.",
    tip: "Start planning your maternity leave and baby preparations.",
  },
  32: {
    milestone: "Baby's bones fully develop, but skull remains soft for delivery.",
    tip: "Practice relaxation techniques and prepare for labor.",
  },
  36: {
    milestone: "Baby is gaining weight rapidly. Most organs are ready for life outside.",
    tip: "Pack your hospital bag and finalize your birth plan.",
  },
  40: {
    milestone: "Baby is fully developed and could arrive any day.",
    tip: "Rest as much as possible and stay in contact with your healthcare provider.",
  },
};

const fetchWikipediaInfo = async (week: number) => {
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=1&explaintext=1&titles=Pregnancy_week_${week}&origin=*`
  );
  const data = await response.json();
  const pages = data.query.pages;
  const pageId = Object.keys(pages)[0];
  return pages[pageId].extract || null;
};

export const MilestonesAndTips = ({ week }: MilestonesAndTipsProps) => {
  const { data: wikiData, isLoading, isError } = useQuery({
    queryKey: ["pregnancy-wiki", week],
    queryFn: () => fetchWikipediaInfo(week),
    enabled: week >= 4 && week <= 40,
  });

  // Get the closest milestone week (rounds down to nearest 4)
  const closestMilestoneWeek = Math.floor(week / 4) * 4;
  const cdcData = cdcMilestones[closestMilestoneWeek];

  if (week < 4 || week > 40) {
    return null;
  }

  return (
    <div className="space-y-4 mt-6">
      <h3 className="text-2xl font-semibold text-center">Week {week} Milestones & Tips</h3>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-4 bg-white/80 backdrop-blur-sm">
          <h4 className="font-semibold mb-2">Development Milestone</h4>
          {isLoading ? (
            <div className="flex items-center justify-center py-4">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : (
            <p className="text-gray-700">
              {wikiData || cdcData?.milestone || "No milestone data available for this week."}
            </p>
          )}
        </Card>

        <Card className="p-4 bg-white/80 backdrop-blur-sm">
          <h4 className="font-semibold mb-2">Health Tip</h4>
          <p className="text-gray-700">{cdcData?.tip || "Continue following your healthcare provider's guidance."}</p>
        </Card>
      </div>
    </div>
  );
};