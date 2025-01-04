import { Navigation } from "@/components/Navigation";
import AgeCalculator from "@/components/AgeCalculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <AgeCalculator />
      </main>
    </div>
  );
};

export default Index;