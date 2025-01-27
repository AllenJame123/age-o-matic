import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { LeapYearCalculatorComponent } from "@/components/leap-year/LeapYearCalculatorComponent";
import { HowItWorks } from "@/components/leap-year/HowItWorks";
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
          content="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container max-w-4xl mx-auto px-4 py-8 space-y-8">
          <h1 className="text-4xl font-bold text-center text-neutral-dark mb-8">
            Leap Year Calculator
          </h1>
          <LeapYearCalculatorComponent />
          <HowItWorks />
          <FAQ />
        </main>
      </div>
    </>
  );
};

export default LeapYearCalculator;