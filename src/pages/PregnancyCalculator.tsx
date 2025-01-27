import { Navigation } from "@/components/Navigation";
import { PregnancyCalculatorComponent } from "@/components/pregnancy-calculator/PregnancyCalculatorComponent";
import { Helmet } from "react-helmet";

const PregnancyCalculator = () => {
  return (
    <div className="min-h-screen bg-soft-gray">
      <Helmet>
        <title>Pregnancy Age Calculator - Week by Week Progress</title>
        <meta 
          name="description" 
          content="Calculate your pregnancy age and track your progress week by week with our free pregnancy calculator. Get detailed information about your baby's development." 
        />
        <meta 
          name="keywords" 
          content="pregnancy calculator, pregnancy week calculator, pregnancy age, pregnancy timeline" 
        />
      </Helmet>
      <Navigation />
      <div className="p-4 sm:p-6 lg:p-8 animate-fadeIn">
        <div className="max-w-4xl mx-auto space-y-8">
          <PregnancyCalculatorComponent />
        </div>
      </div>
    </div>
  );
};

export default PregnancyCalculator;