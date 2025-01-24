import { HowItWorks as SharedHowItWorks } from "../shared/HowItWorks";

export const HowItWorks = () => (
  <SharedHowItWorks
    steps={[
      {
        title: "Select Calculation Type",
        description: "Choose between date difference, adding days, or business days calculation",
      },
      {
        title: "Enter Dates",
        description: "Select your dates using the calendar or enter the number of days",
      },
      {
        title: "Get Results",
        description: "View your calculated results in multiple formats",
      },
    ]}
  />
);