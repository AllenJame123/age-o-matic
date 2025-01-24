type BabySizeComparison = {
  week: number;
  size: string;
  description: string;
  icon: string;
};

export const babySizeComparisons: BabySizeComparison[] = [
  { week: 4, size: "poppy seed", description: "0.04 inches (1 mm)", icon: "dot" },
  { week: 5, size: "sesame seed", description: "0.05 inches (1.3 mm)", icon: "dot" },
  { week: 6, size: "lentil", description: "0.16 inches (4 mm)", icon: "circle" },
  { week: 7, size: "blueberry", description: "0.3 inches (7.6 mm)", icon: "circle" },
  { week: 8, size: "raspberry", description: "0.6 inches (1.5 cm)", icon: "cherry" },
  { week: 9, size: "grape", description: "0.9 inches (2.3 cm)", icon: "grape" },
  { week: 10, size: "strawberry", description: "1.2 inches (3 cm)", icon: "flower" },
  { week: 11, size: "lime", description: "1.6 inches (4.1 cm)", icon: "apple" },
  { week: 12, size: "plum", description: "2.1 inches (5.3 cm)", icon: "apple" },
  { week: 13, size: "peach", description: "2.9 inches (7.4 cm)", icon: "apple" },
  { week: 14, size: "lemon", description: "3.4 inches (8.7 cm)", icon: "apple" },
  { week: 15, size: "apple", description: "4.0 inches (10.1 cm)", icon: "apple" },
  { week: 16, size: "banana", description: "4.6 inches (11.7 cm)", icon: "banana" },
  { week: 17, size: "pomegranate", description: "5.1 inches (13 cm)", icon: "apple" },
  { week: 18, size: "bell pepper", description: "5.6 inches (14.2 cm)", icon: "apple" },
  { week: 19, size: "mango", description: "6.0 inches (15.2 cm)", icon: "banana" },
  { week: 20, size: "banana", description: "6.5 inches (16.5 cm)", icon: "banana" },
  { week: 21, size: "carrot", description: "10.5 inches (26.7 cm) and about 12.7 ounces (360g)", icon: "banana" },
  { week: 22, size: "coconut", description: "11 inches (28 cm) and about 1 pound (453g)", icon: "apple" },
  { week: 23, size: "grapefruit", description: "11.5 inches (29.2 cm) and about 1.1 pounds (499g)", icon: "apple" },
  { week: 24, size: "corn", description: "12 inches (30.5 cm) and about 1.3 pounds (590g)", icon: "banana" },
  { week: 25, size: "cauliflower", description: "13.6 inches (34.5 cm) and about 1.5 pounds (680g)", icon: "flower" },
  { week: 26, size: "lettuce", description: "14 inches (35.6 cm) and about 1.7 pounds (771g)", icon: "flower" },
  { week: 27, size: "cabbage", description: "14.4 inches (36.6 cm) and about 2 pounds (907g)", icon: "flower" },
  { week: 28, size: "eggplant", description: "14.8 inches (37.6 cm) and about 2.2 pounds (998g)", icon: "apple" },
  { week: 29, size: "butternut squash", description: "15.2 inches (38.6 cm) and about 2.5 pounds (1.13kg)", icon: "banana" },
  { week: 30, size: "cucumber", description: "15.7 inches (39.9 cm) and about 2.9 pounds (1.31kg)", icon: "banana" },
  { week: 31, size: "pineapple", description: "16.2 inches (41.1 cm) and about 3.3 pounds (1.5kg)", icon: "apple" },
  { week: 32, size: "squash", description: "16.7 inches (42.4 cm) and about 3.8 pounds (1.72kg)", icon: "apple" },
  { week: 33, size: "durian", description: "17.2 inches (43.7 cm) and about 4.2 pounds (1.91kg)", icon: "apple" },
  { week: 34, size: "cantaloupe", description: "17.7 inches (45 cm) and about 4.7 pounds (2.13kg)", icon: "apple" },
  { week: 35, size: "honeydew melon", description: "18.2 inches (46.2 cm) and about 5.3 pounds (2.4kg)", icon: "apple" },
  { week: 36, size: "romaine lettuce", description: "18.7 inches (47.5 cm) and about 5.8 pounds (2.63kg)", icon: "flower" },
  { week: 37, size: "swiss chard", description: "19.1 inches (48.5 cm) and about 6.3 pounds (2.86kg)", icon: "flower" },
  { week: 38, size: "winter melon", description: "19.6 inches (49.8 cm) and about 6.8 pounds (3.08kg)", icon: "apple" },
  { week: 39, size: "watermelon", description: "20.1 inches (51.1 cm) and about 7.3 pounds (3.31kg)", icon: "apple" },
  { week: 40, size: "small pumpkin", description: "20.2 inches (51.3 cm) and about 7.6 pounds (3.45kg)", icon: "apple" }
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