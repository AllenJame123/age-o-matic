import { Navigation } from "@/components/Navigation";
import { AgeDifferenceCalculator } from "@/components/age-difference/AgeDifferenceCalculator";
import { Helmet } from "react-helmet";

const Difference = () => {
  return (
    <>
      <Helmet>
        <title>Age Difference Calculator - Calculate Age Gaps with Precision</title>
        <meta name="description" content="Calculate the exact age difference between two dates. Perfect for finding age gaps between siblings, partners, or any two dates with our precise age difference calculator." />
        <meta name="keywords" content="age difference calculator, calculate age gap, age gap calculator, date difference calculator" />
      </Helmet>
      <Navigation />
      <AgeDifferenceCalculator />
    </>
  );
};

export default Difference;