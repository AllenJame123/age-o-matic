import { Navigation } from "@/components/Navigation";
import AgeCalculator from "@/components/AgeCalculator";
import { Helmet } from "react-helmet";

const Index = () => {
  const websiteUrl = "https://agecalculator.app";
  const pageImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f"; // Calendar/computer themed image

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Age Calculator - Calculate Your Exact Age</title>
        <meta 
          name="description" 
          content="Free online age calculator tool. Calculate your exact age in years, months, days, hours, and more. Perfect for finding precise age calculations for any date." 
        />
        <meta 
          name="keywords" 
          content="age calculator, calculate age, age in years, age in months, exact age calculator" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={websiteUrl} />
        <meta property="og:title" content="Age Calculator - Calculate Your Exact Age" />
        <meta property="og:description" content="Free online age calculator tool. Calculate your exact age in years, months, days, hours, and more." />
        <meta property="og:image" content={pageImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={websiteUrl} />
        <meta property="twitter:title" content="Age Calculator - Calculate Your Exact Age" />
        <meta property="twitter:description" content="Free online age calculator tool. Calculate your exact age in years, months, days, hours, and more." />
        <meta property="twitter:image" content={pageImage} />
      </Helmet>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <AgeCalculator />
      </main>
    </div>
  );
};

export default Index;