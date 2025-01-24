interface WeekByWeekGuideProps {
  currentWeek: number;
}

export const WeekByWeekGuide = ({ currentWeek }: WeekByWeekGuideProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Your Pregnancy Journey</h2>
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