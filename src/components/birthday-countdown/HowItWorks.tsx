export const HowItWorks = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-center">How It Works</h2>
      <div className="bg-white rounded-lg p-6 space-y-6">
        <div className="space-y-2 p-4 border-b">
          <h3 className="font-semibold text-lg text-primary">Select Your Birthday</h3>
          <p className="text-gray-600">
            Choose your birth date using the month, day, and year selectors. The calculator will automatically validate your input to ensure it's not in the future.
          </p>
        </div>
        <div className="space-y-2 p-4 border-b">
          <h3 className="font-semibold text-lg text-primary">Real-time Countdown</h3>
          <p className="text-gray-600">
            Once you start the countdown, you'll see a live timer showing days, hours, minutes, and seconds until your next birthday. The countdown updates in real-time.
          </p>
        </div>
        <div className="space-y-2 p-4">
          <h3 className="font-semibold text-lg text-primary">Birthday Celebration</h3>
          <p className="text-gray-600">
            When it's your birthday, you'll see a special celebration message! You can reset the countdown at any time to check different dates.
          </p>
        </div>
      </div>
    </section>
  );
};