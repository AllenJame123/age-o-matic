import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { RetirementCalculatorComponent } from "@/components/retirement/RetirementCalculatorComponent";

const Retirement = () => {
  return (
    <>
      <Helmet>
        <title>Retirement Age Calculator - Plan Your Retirement</title>
        <meta
          name="description"
          content="Calculate your retirement age and plan for your future with our easy-to-use retirement calculator."
        />
        <meta
          property="og:title"
          content="Retirement Age Calculator - Plan Your Retirement"
        />
        <meta
          property="og:description"
          content="Calculate your retirement age and plan for your future with our easy-to-use retirement calculator."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=630&q=80"
        />
      </Helmet>
      <Navigation />
      <RetirementCalculatorComponent />
    </>
  );
};

export default Retirement;