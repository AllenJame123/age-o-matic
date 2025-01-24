type BabySizeComparison = {
  week: number;
  size: string;
  description: string;
  icon: string;
};

export const babySizeComparisons: BabySizeComparison[] = [
  { week: 4, size: "poppy seed", description: "0.04 inches", icon: "dot" },
  { week: 5, size: "sesame seed", description: "0.05 inches", icon: "dot" },
  { week: 6, size: "lentil", description: "0.16 inches", icon: "circle" },
  { week: 7, size: "blueberry", description: "0.3 inches", icon: "circle" },
  { week: 8, size: "raspberry", description: "0.6 inches", icon: "cherry" },
  { week: 9, size: "grape", description: "0.9 inches", icon: "grape" },
  { week: 10, size: "strawberry", description: "1.2 inches", icon: "flower" },
  { week: 11, size: "lime", description: "1.6 inches", icon: "orange" },
  { week: 12, size: "plum", description: "2.1 inches", icon: "apple" },
  { week: 13, size: "peach", description: "2.9 inches", icon: "orange" },
  { week: 14, size: "lemon", description: "3.4 inches", icon: "orange" },
  { week: 15, size: "apple", description: "4.0 inches", icon: "apple" },
  { week: 16, size: "banana", description: "4.6 inches", icon: "banana" }
];

export const getBabySizeForWeek = (week: number): BabySizeComparison => {
  const comparison = babySizeComparisons.find(comp => comp.week === week) || 
    { week, size: "baby", description: "Getting bigger every day!", icon: "baby" };
  return comparison;
};