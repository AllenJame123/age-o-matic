import { HowItWorks as SharedHowItWorks } from "../shared/HowItWorks";

export const HowItWorks = () => (
  <SharedHowItWorks
    steps={[
      {
        title: "Enter a Year",
        description: "Type any year you want to check in the input field",
      },
      {
        title: "Click Calculate",
        description: "Press the button to determine if it's a leap year",
      },
      {
        title: "View Result",
        description: "See whether the year is a leap year and its number of days",
      },
    ]}
  />
);