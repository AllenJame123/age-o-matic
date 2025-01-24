export const HowItWorks = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-center">How It Works</h2>
      <div className="bg-white rounded-lg p-6 space-y-6">
        <div className="space-y-2 p-4 border-b">
          <h3 className="font-semibold text-lg text-primary">Date Difference Calculator</h3>
          <p className="text-gray-600">
            Select two dates to calculate the total number of days between them, including both calendar days and business days. The calculator automatically handles weekends and provides the day of the week for better planning.
          </p>
        </div>
        <div className="space-y-2 p-4 border-b">
          <h3 className="font-semibold text-lg text-primary">Add/Subtract Days</h3>
          <p className="text-gray-600">
            Choose a start date and specify the number of days to add or subtract. The calculator will show you the resulting date and the day of the week it falls on, perfect for deadline calculations and project planning.
          </p>
        </div>
        <div className="space-y-2 p-4">
          <h3 className="font-semibold text-lg text-primary">Business Days Calculator</h3>
          <p className="text-gray-600">
            Calculate working days between two dates, excluding weekends. This is especially useful for project timelines and business planning where weekend days should not be counted.
          </p>
        </div>
      </div>
    </section>
  );
};