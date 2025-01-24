import { Baby, Circle, Grape, Apple, Flower2, Banana, Cherry, Orange } from "lucide-react";
import { getBabySizeForWeek } from "@/utils/babySize";

interface WeekByWeekGuideProps {
  currentWeek: number;
}

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "baby":
      return <Baby className="w-8 h-8 text-primary" />;
    case "dot":
      return <Circle className="w-8 h-8 text-primary" fill="currentColor" />;
    case "circle":
      return <Circle className="w-8 h-8 text-primary" />;
    case "grape":
      return <Grape className="w-8 h-8 text-primary" />;
    case "flower":
      return <Flower2 className="w-8 h-8 text-primary" />;
    case "banana":
      return <Banana className="w-8 h-8 text-primary" />;
    case "cherry":
      return <Cherry className="w-8 h-8 text-primary" />;
    case "orange":
      return <Orange className="w-8 h-8 text-primary" />;
    case "apple":
      return <Apple className="w-8 h-8 text-primary" />;
    default:
      return <Baby className="w-8 h-8 text-primary" />;
  }
};

export const WeekByWeekGuide = ({ currentWeek }: WeekByWeekGuideProps) => {
  const babySize = getBabySizeForWeek(currentWeek);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Your Pregnancy Journey</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 animate-fadeIn">
        <div className="flex items-center justify-center gap-4 mb-4">
          {getIconComponent(babySize.icon)}
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