import { HowItWorks as SharedHowItWorks } from "../shared/HowItWorks";

export const HowItWorks = () => (
  <SharedHowItWorks
    steps={[
      {
        title: "Select Your Birth Date",
        description: "Choose your birth year, month, and day from the dropdown menus",
      },
      {
        title: "Calculate",
        description: "Click the calculate button to process your age",
      },
      {
        title: "View Results",
        description: "See your age in various formats and units",
      },
    ]}
  />
);