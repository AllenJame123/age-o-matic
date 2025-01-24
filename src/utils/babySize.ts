export type WeeklyComparison = {
  week: number;
  size: string;
  description: string;
};

const weeklyComparisons: WeeklyComparison[] = [
  { week: 4, size: "poppy seed", description: "0.04-0.08 inches (1-2 mm)" },
  { week: 5, size: "sesame seed", description: "0.05-0.12 inches (1.5-3 mm)" },
  { week: 6, size: "lentil", description: "0.16-0.20 inches (4-5 mm)" },
  { week: 7, size: "blueberry", description: "0.3-0.5 inches (8-13 mm)" },
  { week: 8, size: "raspberry", description: "0.6-0.7 inches (15-18 mm)" },
  { week: 9, size: "cherry", description: "0.9-1.0 inches (23-25 mm)" },
  { week: 10, size: "strawberry", description: "1.2-1.4 inches (30-35 mm)" },
  { week: 11, size: "lime", description: "1.6-1.8 inches (41-46 mm)" },
  { week: 12, size: "plum", description: "2.1-2.3 inches (53-58 mm)" },
  { week: 13, size: "peach", description: "2.6-2.9 inches (66-74 mm)" },
  { week: 14, size: "lemon", description: "3.2-3.5 inches (81-89 mm)" },
  { week: 15, size: "apple", description: "3.8-4.0 inches (97-102 mm)" },
  { week: 16, size: "avocado", description: "4.3-4.6 inches (109-117 mm)" },
  { week: 17, size: "pear", description: "5.0-5.1 inches (127-130 mm)" },
  { week: 18, size: "bell pepper", description: "5.5-5.7 inches (140-145 mm)" },
  { week: 19, size: "mango", description: "6.0-6.2 inches (152-157 mm)" },
  { week: 20, size: "banana", description: "6.4-6.5 inches (163-165 mm)" },
  { week: 21, size: "carrot", description: "10.1-10.5 inches (257-267 mm), 0.75-0.8 lbs (340-363g)" },
  { week: 22, size: "corn", description: "10.9-11.4 inches (277-290 mm), 0.95-1.0 lbs (431-454g)" },
  { week: 23, size: "grapefruit", description: "11.4-11.8 inches (290-300 mm), 1.1-1.2 lbs (500-544g)" },
  { week: 24, size: "cantaloupe", description: "11.8-12.6 inches (300-320 mm), 1.3-1.4 lbs (590-635g)" },
  { week: 25, size: "cauliflower", description: "13.0-13.6 inches (330-345 mm), 1.4-1.5 lbs (635-680g)" },
  { week: 26, size: "lettuce", description: "13.6-14.0 inches (345-356 mm), 1.6-1.7 lbs (725-770g)" },
  { week: 27, size: "cabbage", description: "14.0-14.4 inches (356-366 mm), 1.9-2.0 lbs (860-910g)" },
  { week: 28, size: "eggplant", description: "14.4-14.8 inches (366-376 mm), 2.2-2.3 lbs (1.0-1.04kg)" },
  { week: 29, size: "butternut squash", description: "14.8-15.2 inches (376-386 mm), 2.5-2.7 lbs (1.13-1.22kg)" },
  { week: 30, size: "cucumber", description: "15.2-15.7 inches (386-399 mm), 2.9-3.0 lbs (1.31-1.36kg)" },
  { week: 31, size: "pineapple", description: "15.7-16.2 inches (399-411 mm), 3.3-3.5 lbs (1.5-1.59kg)" },
  { week: 32, size: "jicama", description: "16.2-16.7 inches (411-424 mm), 3.7-4.0 lbs (1.68-1.81kg)" },
  { week: 33, size: "honeydew melon", description: "16.7-17.2 inches (424-437 mm), 4.2-4.5 lbs (1.90-2.04kg)" },
  { week: 34, size: "coconut", description: "17.2-17.7 inches (437-450 mm), 4.7-5.0 lbs (2.13-2.27kg)" },
  { week: 35, size: "honeydew", description: "17.7-18.2 inches (450-462 mm), 5.2-5.5 lbs (2.36-2.49kg)" },
  { week: 36, size: "papaya", description: "18.2-18.7 inches (462-475 mm), 5.7-6.0 lbs (2.58-2.72kg)" },
  { week: 37, size: "winter melon", description: "18.7-19.2 inches (475-487 mm), 6.2-6.5 lbs (2.81-2.95kg)" },
  { week: 38, size: "pumpkin", description: "19.2-19.6 inches (487-498 mm), 6.7-7.0 lbs (3.04-3.17kg)" },
  { week: 39, size: "watermelon", description: "19.6-20.0 inches (498-508 mm), 7.2-7.5 lbs (3.26-3.40kg)" },
  { week: 40, size: "small pumpkin", description: "20.0-20.5 inches (508-520 mm), 7.6-8.0 lbs (3.44-3.63kg)" }
];

export const getComparisonForWeek = (week: number): WeeklyComparison | null => {
  try {
    if (week < 4 || week > 40) {
      throw new Error("Week must be between 4 and 40");
    }
    const comparison = weeklyComparisons.find((comp) => comp.week === week);
    if (!comparison) {
      throw new Error(`No comparison found for week ${week}`);
    }
    return comparison;
  } catch (error) {
    console.error("Error getting comparison:", error);
    return null;
  }
};