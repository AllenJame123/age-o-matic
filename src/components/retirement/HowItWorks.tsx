import { HowItWorks as SharedHowItWorks } from "../shared/HowItWorks";

export const HowItWorks = () => (
  <SharedHowItWorks
    steps={[
      {
        title: "Enter Current Age",
        description: "Input your current age in years",
      },
      {
        title: "Set Retirement Age",
        description: "Enter your desired retirement age",
      },
      {
        title: "View Results",
        description: "See how many years, months, and days until retirement",
      },
    ]}
  />
);