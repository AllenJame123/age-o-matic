import { getComparisonForWeek } from "@/utils/babySize";

interface WeekByWeekGuideProps {
  currentWeek: number;
}

export const WeekByWeekGuide = ({ currentWeek }: WeekByWeekGuideProps) => {
  const babySize = getComparisonForWeek(currentWeek);

  if (!babySize) {
    return (
      <div className="text-center p-4">
        <p className="text-red-500">Please enter a valid week between 4 and 40.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Your Pregnancy Journey</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 animate-fadeIn">
        <div className="flex items-center justify-center gap-4 mb-4">
          <h3 className="text-2xl font-semibold text-primary">
            Week {currentWeek}: Your baby is the size of a {babySize.size}!
          </h3>
        </div>
        <p className="text-center text-gray-600">{babySize.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">First Trimester</h3>
          <p className={`text-gray-600 ${currentWeek <= 12 ? "font-semibold" : ""}`}>
            Weeks 1-12: Early development and formation of major organs
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Second Trimester</h3>
          <p className={`text-gray-600 ${currentWeek > 12 && currentWeek <= 26 ? "font-semibold" : ""}`}>
            Weeks 13-26: Rapid growth and movement begins
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Third Trimester</h3>
          <p className={`text-gray-600 ${currentWeek > 26 ? "font-semibold" : ""}`}>
            Weeks 27-40: Final development and preparation for birth
          </p>
        </div>
      </div>
    </div>
  );
};