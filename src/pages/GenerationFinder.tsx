import { Navigation } from "@/components/Navigation";
import { GenerationFinderComponent } from "@/components/generation-finder/GenerationFinderComponent";
import { Helmet } from "react-helmet";

const GenerationFinder = () => {
  const websiteUrl = "https://agecalculator.app/generation-finder";
  const pageImage = "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f";

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>What Generation Am I? - Generational Cohort Finder</title>
        <meta 
          name="description" 
          content="Find out which generation you belong to - Gen Z, Millennial, Gen X, Baby Boomer, or Silent Generation. Free online generation calculator tool." 
        />
        <meta 
          name="keywords" 
          content="generation calculator, what generation am i, generational cohort, gen z, millennial, gen x, baby boomer" 
        />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={websiteUrl} />
        <meta property="og:title" content="What Generation Am I? - Generational Cohort Finder" />
        <meta property="og:description" content="Find out which generation you belong to - Gen Z, Millennial, Gen X, Baby Boomer, or Silent Generation." />
        <meta property="og:image" content={pageImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={websiteUrl} />
        <meta property="twitter:title" content="What Generation Am I? - Generational Cohort Finder" />
        <meta property="twitter:description" content="Find out which generation you belong to - Gen Z, Millennial, Gen X, Baby Boomer, or Silent Generation." />
        <meta property="twitter:image" content={pageImage} />
      </Helmet>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <GenerationFinderComponent />
      </main>
    </div>
  );
};

export default GenerationFinder;