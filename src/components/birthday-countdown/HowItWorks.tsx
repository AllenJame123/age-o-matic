import { HowItWorks as SharedHowItWorks } from "../shared/HowItWorks";

export const HowItWorks = () => (
  <SharedHowItWorks
    steps={[
      {
        title: "Select Your Birthday",
        description: "Choose your birth date using the month, day, and year selectors",
      },
      {
        title: "Start Countdown",
        description: "Click to start the real-time countdown to your next birthday",
      },
      {
        title: "Watch Time Tick",
        description: "See days, hours, minutes, and seconds until your celebration",
      },
    ]}
  />
);