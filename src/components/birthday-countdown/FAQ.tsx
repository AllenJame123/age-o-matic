export const FAQ = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
      <div className="bg-white rounded-lg p-6 space-y-6">
        <div className="space-y-2 p-4 border-b">
          <h3 className="font-semibold text-lg text-primary">
            How accurate is the birthday countdown?
          </h3>
          <p className="text-gray-600">
            Our countdown is precise to the second, continuously updating to show you exactly how long until your next birthday celebration.
          </p>
        </div>
        <div className="space-y-2 p-4 border-b">
          <h3 className="font-semibold text-lg text-primary">
            Can I count down to someone else's birthday?
          </h3>
          <p className="text-gray-600">
            Yes! You can use any valid birth date to count down to anyone's birthday. Just make sure the date isn't in the future.
          </p>
        </div>
        <div className="space-y-2 p-4">
          <h3 className="font-semibold text-lg text-primary">
            What happens when it's my birthday?
          </h3>
          <p className="text-gray-600">
            On your birthday, the countdown will be replaced with a special celebration message. You can then reset it to start counting down to your next birthday!
          </p>
        </div>
      </div>
    </section>
  );
};