import { Navigation } from "@/components/Navigation";
import { BirthdayCountdownTimer } from "@/components/birthday-countdown/BirthdayCountdownTimer";
import { Helmet } from "react-helmet";

const BirthdayCountdown = () => {
  const websiteUrl = "https://agecalculator.app";
  const pageImage = "https://images.unsplash.com/photo-1558636508-e0db3814bd1d"; // Birthday decorations image

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Birthday Countdown - Track Days Until Your Birthday</title>
        <meta 
          name="description" 
          content="Count down the days, hours, minutes, and seconds until your next birthday with our interactive birthday countdown timer. Get excited about your special day!" 
        />
        <meta 
          name="keywords" 
          content="birthday countdown, days until birthday, birthday timer, birthday calculator" 
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${websiteUrl}/birthday-countdown`} />
        <meta property="og:title" content="Birthday Countdown - Track Days Until Your Birthday" />
        <meta property="og:description" content="Count down the days until your next birthday with our interactive countdown timer." />
        <meta property="og:image" content={pageImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${websiteUrl}/birthday-countdown`} />
        <meta property="twitter:title" content="Birthday Countdown - Track Days Until Your Birthday" />
        <meta property="twitter:description" content="Count down the days until your next birthday with our interactive countdown timer." />
        <meta property="twitter:image" content={pageImage} />
      </Helmet>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <BirthdayCountdownTimer />
      </main>
    </div>
  );
};

export default BirthdayCountdown;