import { Navigation } from "@/components/Navigation";
import { DateCalculatorComponent } from "@/components/date-calculator/DateCalculatorComponent";
import { Helmet } from "react-helmet";

const DateCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Date Calculator - Calculate Days Between Dates & More</title>
        <meta 
          name="description" 
          content="Free online date calculator to find days between dates, add/subtract days, and calculate business days. Easy-to-use tool for date calculations and planning." 
        />
        <meta 
          name="keywords" 
          content="date calculator, days between dates, date difference calculator, business days calculator, add days calculator" 
        />
      </Helmet>
      <Navigation />
      <DateCalculatorComponent />
    </>
  );
};

export default DateCalculator;