import { Navigation } from "@/components/Navigation";
import { DateCalculatorComponent } from "@/components/date-calculator/DateCalculatorComponent";
import { Helmet } from "react-helmet";

const DateCalculator = () => {
  const websiteUrl = "https://agecalculator.app";
  const pageImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085"; // Calendar/computer themed image

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

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${websiteUrl}/date-calculator`} />
        <meta property="og:title" content="Date Calculator - Calculate Days Between Dates & More" />
        <meta property="og:description" content="Free online date calculator to find days between dates, add/subtract days, and calculate business days." />
        <meta property="og:image" content={pageImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${websiteUrl}/date-calculator`} />
        <meta property="twitter:title" content="Date Calculator - Calculate Days Between Dates & More" />
        <meta property="twitter:description" content="Free online date calculator to find days between dates, add/subtract days, and calculate business days." />
        <meta property="twitter:image" content={pageImage} />
      </Helmet>
      <Navigation />
      <DateCalculatorComponent />
    </>
  );
};

export default DateCalculator;