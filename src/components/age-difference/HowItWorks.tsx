import { HowItWorks as SharedHowItWorks } from "../shared/HowItWorks";

export const HowItWorks = () => (
  <SharedHowItWorks
    steps={[
      {
        title: "Enter Two Dates",
        description: "Select the birth dates or significant dates you want to compare",
      },
      {
        title: "Calculate",
        description: "Click calculate to find the exact difference between the dates",
      },
      {
        title: "View Results",
        description: "See the precise age difference in various formats",
      },
    ]}
  />
);