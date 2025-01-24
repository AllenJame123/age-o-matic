import { Navigation } from "@/components/Navigation";
import { BirthdayCountdownTimer } from "@/components/birthday-countdown/BirthdayCountdownTimer";
import { Helmet } from "react-helmet";

const BirthdayCountdown = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Birthday Countdown - Track Days Until Your Birthday</title>
        <meta name="description" content="Count down the days, hours, minutes, and seconds until your next birthday with our interactive birthday countdown timer. Get excited about your special day!" />
        <meta name="keywords" content="birthday countdown, days until birthday, birthday timer, birthday calculator" />
      </Helmet>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <BirthdayCountdownTimer />
      </main>
    </div>
  );
};

export default BirthdayCountdown;