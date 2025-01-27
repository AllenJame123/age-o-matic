import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { LeapYearCalculatorComponent } from "@/components/leap-year/LeapYearCalculatorComponent";
import { HowItWorks } from "@/components/leap-year/HowItWorks";
import { WhyUseSection } from "@/components/leap-year/WhyUseSection";
import { FAQ } from "@/components/leap-year/FAQ";

const LeapYearCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Leap Year Calculator - Check if a Year is a Leap Year</title>
        <meta
          name="description"
          content="Calculate if any year is a leap year. Learn about leap year rules and why we need them in our calendar system."
        />
        <meta property="og:title" content="Leap Year Calculator - Check if a Year is a Leap Year" />
        <meta
          property="og:description"
          content="Calculate if any year is a leap year. Learn about leap year rules and why we need them in our calendar system."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=630&q=80"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container max-w-4xl mx-auto px-4 py-8 space-y-8">
          <LeapYearCalculatorComponent />
          <HowItWorks />
          <WhyUseSection />
          <FAQ />
        </main>
      </div>
    </>
  );
};

export default LeapYearCalculator;