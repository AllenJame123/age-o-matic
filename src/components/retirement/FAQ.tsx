export const FAQ = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
      <div className="bg-white rounded-lg p-6 space-y-6">
        <div className="space-y-2 p-4 border-b">
          <h3 className="font-semibold text-lg text-primary">
            What is the average retirement age?
          </h3>
          <p className="text-gray-600">
            The average retirement age varies by country. In many countries, it's between 62 and 67 years old. However, this can depend on factors like pension eligibility, personal savings, and individual circumstances.
          </p>
        </div>
        <div className="space-y-2 p-4 border-b">
          <h3 className="font-semibold text-lg text-primary">
            How do I plan for retirement?
          </h3>
          <p className="text-gray-600">
            Planning for retirement involves several steps: setting a retirement age goal, calculating needed savings, creating a budget, investing wisely, and considering factors like healthcare costs and lifestyle changes.
          </p>
        </div>
        <div className="space-y-2 p-4">
          <h3 className="font-semibold text-lg text-primary">
            Can I retire early?
          </h3>
          <p className="text-gray-600">
            Early retirement is possible with proper planning. It requires careful financial planning, adequate savings, and consideration of factors like healthcare coverage and lifestyle adjustments before reaching traditional retirement age.
          </p>
        </div>
      </div>
    </section>
  );
};