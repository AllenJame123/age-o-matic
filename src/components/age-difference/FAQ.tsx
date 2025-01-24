import { Card } from "@/components/ui/card";

export const FAQ = () => (
  <Card className="p-6 bg-white/80 backdrop-blur-sm">
    <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
    <div className="space-y-6">
      <div className="space-y-2 p-4 border-b">
        <h3 className="font-semibold text-lg text-primary">What is an Age Difference Calculator?</h3>
        <p className="text-gray-600">
          An Age Difference Calculator is a tool that helps you determine the exact time gap between two dates, commonly used to find age differences between people or calculate time spans between important events.
        </p>
      </div>
      <div className="space-y-2 p-4 border-b">
        <h3 className="font-semibold text-lg text-primary">How accurate is the age difference calculation?</h3>
        <p className="text-gray-600">
          Our calculator provides precise results down to the day, taking into account leap years and varying month lengths for maximum accuracy.
        </p>
      </div>
      <div className="space-y-2 p-4 border-b">
        <h3 className="font-semibold text-lg text-primary">What can I use this calculator for?</h3>
        <p className="text-gray-600">
          You can use it to calculate age gaps between siblings, partners, or friends, determine time spans between historical events, or plan future dates based on age differences.
        </p>
      </div>
    </div>
  </Card>
);