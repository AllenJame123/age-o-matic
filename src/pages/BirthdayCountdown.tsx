import { Navigation } from "@/components/Navigation";
import { BirthdayCountdownTimer } from "@/components/birthday-countdown/BirthdayCountdownTimer";

const BirthdayCountdown = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <BirthdayCountdownTimer />
      </main>
    </div>
  );
};

export default BirthdayCountdown;