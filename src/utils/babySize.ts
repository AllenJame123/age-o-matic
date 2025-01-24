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
  { week: 11, size: "lime", description: "1.6 inches", icon: "apple" },
  { week: 12, size: "plum", description: "2.1 inches", icon: "apple" },
  { week: 13, size: "peach", description: "2.9 inches", icon: "apple" },
  { week: 14, size: "lemon", description: "3.4 inches", icon: "apple" },
  { week: 15, size: "apple", description: "4.0 inches", icon: "apple" },
  { week: 16, size: "banana", description: "4.6 inches", icon: "banana" },
  { week: 17, size: "pomegranate", description: "5.1 inches", icon: "apple" },
  { week: 18, size: "bell pepper", description: "5.6 inches", icon: "apple" },
  { week: 19, size: "mango", description: "6.0 inches", icon: "banana" },
  { week: 20, size: "banana", description: "6.5 inches", icon: "banana" },
  { week: 21, size: "carrot", description: "10.5 inches and about 12.7 ounces", icon: "banana" },
  { week: 22, size: "coconut", description: "11 inches and about 1 pound", icon: "apple" },
  { week: 23, size: "grapefruit", description: "11.5 inches and about 1.1 pounds", icon: "apple" },
  { week: 24, size: "corn", description: "12 inches and about 1.3 pounds", icon: "banana" },
  { week: 25, size: "cauliflower", description: "13.6 inches and about 1.5 pounds", icon: "flower" },
  { week: 26, size: "lettuce", description: "14 inches and about 1.7 pounds", icon: "flower" },
  { week: 27, size: "cabbage", description: "14.4 inches and about 2 pounds", icon: "flower" },
  { week: 28, size: "eggplant", description: "14.8 inches and about 2.2 pounds", icon: "apple" },
  { week: 29, size: "butternut squash", description: "15.2 inches and about 2.5 pounds", icon: "banana" },
  { week: 30, size: "cucumber", description: "15.7 inches and about 2.9 pounds", icon: "banana" },
  { week: 31, size: "pineapple", description: "16.2 inches and about 3.3 pounds", icon: "apple" },
  { week: 32, size: "squash", description: "16.7 inches and about 3.8 pounds", icon: "apple" },
  { week: 33, size: "durian", description: "17.2 inches and about 4.2 pounds", icon: "apple" },
  { week: 34, size: "cantaloupe", description: "17.7 inches and about 4.7 pounds", icon: "apple" },
  { week: 35, size: "honeydew melon", description: "18.2 inches and about 5.3 pounds", icon: "apple" },
  { week: 36, size: "romaine lettuce", description: "18.7 inches and about 5.8 pounds", icon: "flower" },
  { week: 37, size: "swiss chard", description: "19.1 inches and about 6.3 pounds", icon: "flower" },
  { week: 38, size: "winter melon", description: "19.6 inches and about 6.8 pounds", icon: "apple" },
  { week: 39, size: "watermelon", description: "20.1 inches and about 7.3 pounds", icon: "apple" },
  { week: 40, size: "small pumpkin", description: "20.2 inches and about 7.6 pounds", icon: "apple" }
];

export const getBabySizeForWeek = (week: number): BabySizeComparison => {
  const comparison = babySizeComparisons.find(comp => comp.week === week);
  if (!comparison) {
    // For weeks beyond 40 or not in our list
    return {
      week,
      size: "full-term baby",
      description: "Congratulations! Your baby is fully developed and ready to meet you!",
      icon: "baby"
    };
  }
  return comparison;
};