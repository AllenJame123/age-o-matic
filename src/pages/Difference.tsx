import { Navigation } from "@/components/Navigation";
import { AgeDifferenceCalculator } from "@/components/age-difference/AgeDifferenceCalculator";
import { Helmet } from "react-helmet";

const Difference = () => {
  const websiteUrl = "https://agecalculator.app";
  const pageImage = "https://images.unsplash.com/photo-1517842645767-c639042777db"; // Pencil on notebook

  return (
    <>
      <Helmet>
        <title>Age Difference Calculator - Calculate Age Gaps with Precision</title>
        <meta 
          name="description" 
          content="Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates with our precise age difference calculator." 
        />
        <meta 
          name="keywords" 
          content="age difference calculator, calculate age gap, age gap calculator, date difference calculator" 
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${websiteUrl}/difference`} />
        <meta property="og:title" content="Age Difference Calculator - Calculate Age Gaps with Precision" />
        <meta property="og:description" content="Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates." />
        <meta property="og:image" content={pageImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${websiteUrl}/difference`} />
        <meta property="twitter:title" content="Age Difference Calculator - Calculate Age Gaps with Precision" />
        <meta property="twitter:description" content="Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates." />
        <meta property="twitter:image" content={pageImage} />
      </Helmet>
      <Navigation />
      <AgeDifferenceCalculator />
    </>
  );
};

export default Difference;