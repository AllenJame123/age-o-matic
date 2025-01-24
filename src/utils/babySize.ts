type BabySizeComparison = {
  week: number;
  size: string;
  description: string;
  icon: string;
};

export const babySizeComparisons: BabySizeComparison[] = [
  { week: 4, size: "poppy seed", description: "0.04-0.08 inches (1-2 mm)", icon: "dot" },
  { week: 5, size: "sesame seed", description: "0.05-0.1 inches (1-2.5 mm)", icon: "dot" },
  { week: 6, size: "lentil", description: "0.15-0.2 inches (4-5 mm)", icon: "circle" },
  { week: 7, size: "blueberry", description: "0.3-0.4 inches (7-10 mm)", icon: "circle" },
  { week: 8, size: "raspberry", description: "0.5-0.7 inches (13-18 mm)", icon: "cherry" },
  { week: 9, size: "grape", description: "0.8-1.0 inches (20-25 mm)", icon: "grape" },
  { week: 10, size: "strawberry", description: "1.0-1.4 inches (25-35 mm)", icon: "flower" },
  { week: 11, size: "lime", description: "1.5-2.0 inches (38-50 mm)", icon: "apple" },
  { week: 12, size: "plum", description: "2.0-2.5 inches (50-63 mm)", icon: "apple" },
  { week: 13, size: "peach", description: "2.5-3.0 inches (63-76 mm)", icon: "apple" },
  { week: 14, size: "lemon", description: "3.0-3.5 inches (76-89 mm)", icon: "apple" },
  { week: 15, size: "apple", description: "3.5-4.0 inches (89-102 mm)", icon: "apple" },
  { week: 16, size: "avocado", description: "4.0-4.5 inches (102-114 mm)", icon: "apple" },
  { week: 17, size: "pomegranate", description: "4.5-5.0 inches (114-127 mm)", icon: "apple" },
  { week: 18, size: "bell pepper", description: "5.0-5.5 inches (127-140 mm)", icon: "apple" },
  { week: 19, size: "mango", description: "5.5-6.0 inches (140-152 mm)", icon: "apple" },
  { week: 20, size: "banana", description: "6.0-6.5 inches (152-165 mm)", icon: "banana" },
  { week: 21, size: "carrot", description: "10.0-10.5 inches (254-267 mm), 12-13 oz (340-370g)", icon: "banana" },
  { week: 22, size: "coconut", description: "10.5-11.0 inches (267-279 mm), 15-16 oz (425-455g)", icon: "apple" },
  { week: 23, size: "grapefruit", description: "11.0-11.5 inches (279-292 mm), 1.0-1.1 lbs (455-500g)", icon: "apple" },
  { week: 24, size: "corn", description: "11.5-12.0 inches (292-305 mm), 1.2-1.3 lbs (545-590g)", icon: "banana" },
  { week: 25, size: "cauliflower", description: "13.0-13.6 inches (330-345 mm), 1.4-1.5 lbs (635-680g)", icon: "flower" },
  { week: 26, size: "lettuce", description: "13.6-14.0 inches (345-356 mm), 1.6-1.7 lbs (725-770g)", icon: "flower" },
  { week: 27, size: "cabbage", description: "14.0-14.4 inches (356-366 mm), 1.9-2.0 lbs (860-910g)", icon: "flower" },
  { week: 28, size: "eggplant", description: "14.4-14.8 inches (366-376 mm), 2.2-2.3 lbs (1.0-1.04kg)", icon: "apple" },
  { week: 29, size: "butternut squash", description: "14.8-15.2 inches (376-386 mm), 2.5-2.7 lbs (1.13-1.22kg)", icon: "banana" },
  { week: 30, size: "cucumber", description: "15.2-15.7 inches (386-399 mm), 2.9-3.0 lbs (1.31-1.36kg)", icon: "banana" },
  { week: 31, size: "pineapple", description: "15.7-16.2 inches (399-411 mm), 3.3-3.5 lbs (1.5-1.59kg)", icon: "apple" },
  { week: 32, size: "squash", description: "16.2-16.7 inches (411-424 mm), 3.8-4.0 lbs (1.72-1.81kg)", icon: "apple" },
  { week: 33, size: "durian", description: "16.7-17.2 inches (424-437 mm), 4.2-4.4 lbs (1.91-2.0kg)", icon: "apple" },
  { week: 34, size: "cantaloupe", description: "17.2-17.7 inches (437-450 mm), 4.7-4.9 lbs (2.13-2.22kg)", icon: "apple" },
  { week: 35, size: "honeydew melon", description: "17.7-18.2 inches (450-462 mm), 5.3-5.5 lbs (2.4-2.49kg)", icon: "apple" },
  { week: 36, size: "romaine lettuce", description: "18.2-18.7 inches (462-475 mm), 5.8-6.0 lbs (2.63-2.72kg)", icon: "flower" },
  { week: 37, size: "swiss chard", description: "18.7-19.1 inches (475-485 mm), 6.3-6.5 lbs (2.86-2.95kg)", icon: "flower" },
  { week: 38, size: "winter melon", description: "19.1-19.6 inches (485-498 mm), 6.8-7.0 lbs (3.08-3.17kg)", icon: "apple" },
  { week: 39, size: "watermelon", description: "19.6-20.1 inches (498-511 mm), 7.3-7.5 lbs (3.31-3.40kg)", icon: "apple" },
  { week: 40, size: "small pumpkin", description: "20.1-20.4 inches (511-518 mm), 7.6-8.0 lbs (3.45-3.63kg)", icon: "apple" }
];

export const getBabySizeForWeek = (week: number): BabySizeComparison => {
  const comparison = babySizeComparisons.find(comp => comp.week === week);
  if (!comparison) {
    return {
      week,
      size: "full-term baby",
      description: "Congratulations! Your baby is fully developed and ready to meet you!",
      icon: "baby"
    };
  }
  return comparison;
};