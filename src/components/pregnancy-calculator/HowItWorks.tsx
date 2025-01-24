import { Card } from "@/components/ui/card";

export const HowItWorks = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-center">How It Works</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">1. Enter Last Period</h3>
          <p className="text-gray-600">
            Input the first day of your last menstrual period to begin the calculation
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">2. Calculate</h3>
          <p className="text-gray-600">
            Our calculator determines your current pregnancy week and estimated due date
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">3. Track Progress</h3>
          <p className="text-gray-600">
            Follow your pregnancy journey with week-by-week development information
          </p>
        </Card>
      </div>
    </section>
  );
};