import { Navigation } from "@/components/Navigation";
import { PregnancyCalculatorComponent } from "@/components/pregnancy-calculator/PregnancyCalculatorComponent";
import { Helmet } from "react-helmet";

const PregnancyCalculator = () => {
  const websiteUrl = "https://agecalculator.app";
  const pageImage = "https://images.unsplash.com/photo-1506784365847-bbad939e9335"; // Calendar with red pins

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
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${websiteUrl}/pregnancy-calculator`} />
        <meta property="og:title" content="Pregnancy Calculator - Track Your Pregnancy Week by Week" />
        <meta property="og:description" content="Calculate your pregnancy age, estimated due date, and track your baby's development week by week with our free pregnancy calculator." />
        <meta property="og:image" content={pageImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${websiteUrl}/pregnancy-calculator`} />
        <meta property="twitter:title" content="Pregnancy Calculator - Track Your Pregnancy Week by Week" />
        <meta property="twitter:description" content="Calculate your pregnancy age, estimated due date, and track your baby's development week by week with our free pregnancy calculator." />
        <meta property="twitter:image" content={pageImage} />
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