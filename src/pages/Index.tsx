import { Navigation } from "@/components/Navigation";
import AgeCalculator from "@/components/AgeCalculator";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Age Calculator - Calculate Your Exact Age</title>
        <meta name="description" content="Free online age calculator tool. Calculate your exact age in years, months, days, hours, and more. Perfect for finding precise age calculations for any date." />
        <meta name="keywords" content="age calculator, calculate age, age in years, age in months, exact age calculator" />
      </Helmet>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <AgeCalculator />
      </main>
    </div>
  );
};

export default Index;