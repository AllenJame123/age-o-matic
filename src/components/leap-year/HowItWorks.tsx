import { HowItWorks as SharedHowItWorks } from "../shared/HowItWorks";

export const HowItWorks = () => (
  <SharedHowItWorks
    steps={[
      {
        title: "Select a Year",
        description: "Choose any year from the dropdown menu to check if it's a leap year",
      },
      {
        title: "Get Results",
        description: "View whether it's a leap year and see the next three upcoming leap years",
      },
      {
        title: "Plan Ahead",
        description: "Use the future leap year information for long-term date planning",
      },
    ]}
  />
);