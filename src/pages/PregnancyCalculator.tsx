import { Navigation } from "@/components/Navigation";
import { PregnancyCalculatorComponent } from "@/components/pregnancy-calculator/PregnancyCalculatorComponent";
import { Helmet } from "react-helmet";

const PregnancyCalculator = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Pregnancy Age Calculator - Week by Week Progress</title>
        <meta name="description" content="Calculate your pregnancy age and track your progress week by week with our free pregnancy calculator. Get detailed information about your baby's development." />
        <meta name="keywords" content="pregnancy calculator, pregnancy week calculator, pregnancy age, pregnancy timeline" />
      </Helmet>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <PregnancyCalculatorComponent />
      </main>
    </div>
  );
};

export default PregnancyCalculator;