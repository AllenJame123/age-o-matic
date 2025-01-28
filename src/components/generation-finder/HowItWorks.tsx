import { HowItWorks as SharedHowItWorks } from "../shared/HowItWorks";

export const HowItWorks = () => (
  <SharedHowItWorks
    steps={[
      {
        title: "Select Your Birth Year",
        description: "Choose your birth year using the month, day, and year selectors",
      },
      {
        title: "Get Your Generation",
        description: "Our tool will identify which generation you belong to based on your birth year",
      },
      {
        title: "Learn More",
        description: "Discover characteristics and key events that shaped your generation",
      },
    ]}
  />
);