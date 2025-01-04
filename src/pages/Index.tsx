import { Navigation } from "@/components/Navigation";
import { BirthdayTimer } from "@/components/birthday-timer/BirthdayTimer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <BirthdayTimer />
      </main>
    </div>
  );
};

export default Index;