import { Card } from "@/components/ui/card";

export const HowItWorks = () => (
  <Card className="p-6 space-y-4 bg-white/80 backdrop-blur-sm">
    <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
    <div className="grid gap-6 md:grid-cols-3">
      <div className="text-center space-y-2">
        <div className="text-xl font-semibold mb-2">1. Select Your Birth Date</div>
        <p className="text-gray-600">Choose your birth year, month, and day from the dropdown menus</p>
      </div>
      <div className="text-center space-y-2">
        <div className="text-xl font-semibold mb-2">2. Calculate</div>
        <p className="text-gray-600">Click the calculate button to process your age</p>
      </div>
      <div className="text-center space-y-2">
        <div className="text-xl font-semibold mb-2">3. View Results</div>
        <p className="text-gray-600">See your age in various formats and units</p>
      </div>
    </div>
  </Card>
);