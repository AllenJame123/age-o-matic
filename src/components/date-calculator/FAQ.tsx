export const FAQ = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
      <div className="bg-white rounded-lg p-6 space-y-6">
        <div className="space-y-2 p-4 border-b">
          <h3 className="font-semibold text-lg text-primary">
            How does the date calculator handle weekends?
          </h3>
          <p className="text-gray-600">
            The date calculator automatically identifies weekends when calculating business days. When using the business days calculation mode, Saturdays and Sundays are excluded from the count, giving you an accurate number of working days between dates.
          </p>
        </div>
        <div className="space-y-2 p-4 border-b">
          <h3 className="font-semibold text-lg text-primary">
            Can I calculate dates across different years?
          </h3>
          <p className="text-gray-600">
            Yes! The calculator can handle dates across any time period, including different years, months, and centuries. It automatically accounts for leap years and varying month lengths to ensure accurate calculations.
          </p>
        </div>
        <div className="space-y-2 p-4">
          <h3 className="font-semibold text-lg text-primary">
            What's the difference between total days and business days?
          </h3>
          <p className="text-gray-600">
            Total days include every calendar day between two dates, including weekends and holidays. Business days exclude weekends (Saturdays and Sundays) from the count, providing a more accurate measure for work and business planning purposes.
          </p>
        </div>
      </div>
    </section>
  );
};