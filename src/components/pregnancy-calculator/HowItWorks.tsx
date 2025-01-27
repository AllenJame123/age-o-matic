import { HowItWorks as SharedHowItWorks } from "../shared/HowItWorks";

export const HowItWorks = () => (
  <SharedHowItWorks
    steps={[
      {
        title: "Enter Last Period",
        description: "Input the first day of your last menstrual period to begin the calculation",
      },
      {
        title: "Calculate",
        description: "Our calculator determines your current pregnancy week and estimated due date",
      },
      {
        title: "View Results",
        description: "Follow your pregnancy journey with week-by-week development information",
      },
    ]}
  />
);