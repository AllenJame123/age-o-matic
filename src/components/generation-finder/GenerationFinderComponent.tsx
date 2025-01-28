import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Users2 } from "lucide-react";
import { HowItWorks } from "./HowItWorks";
import { FAQ } from "./FAQ";

interface GenerationResult {
  generation: string;
  yearRange: string;
  description: string;
}

export const GenerationFinderComponent = () => {
  const [birthYear, setBirthYear] = useState<string>("");
  const [result, setResult] = useState<GenerationResult | null>(null);
  const { toast } = useToast();

  const findGeneration = (year: number): GenerationResult => {
    if (year >= 2012) {
      return {
        generation: "Generation Alpha",
        yearRange: "2012 - Present",
        description: "The first generation born entirely in the 21st century. Growing up with AI, smart devices, and advanced technology as a natural part of life."
      };
    } else if (year >= 1997) {
      return {
        generation: "Generation Z",
        yearRange: "1997 - 2011",
        description: "Digital natives who have never known a world without the internet. Known for their tech-savvy nature and focus on social justice."
      };
    } else if (year >= 1981) {
      return {
        generation: "Millennial",
        yearRange: "1981 - 1996",
        description: "Also known as Generation Y. Came of age during the internet boom and experienced significant technological advancement throughout their lives."
      };
    } else if (year >= 1965) {
      return {
        generation: "Generation X",
        yearRange: "1965 - 1980",
        description: "The 'latchkey' generation, known for their independence and adaptability. Witnessed the transition from analog to digital."
      };
    } else if (year >= 1946) {
      return {
        generation: "Baby Boomer",
        yearRange: "1946 - 1964",
        description: "Born during the post-World War II baby boom. Experienced significant social change and economic prosperity."
      };
    } else {
      return {
        generation: "Silent Generation",
        yearRange: "1928 - 1945",
        description: "Grew up during the Great Depression and World War II. Known for their resilience and traditional values."
      };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const year = parseInt(birthYear);
    
    if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
      toast({
        title: "Invalid Year",
        description: "Please enter a valid birth year between 1900 and present.",
        variant: "destructive",
      });
      return;
    }

    setResult(findGeneration(year));
  };

  const currentYear = 2025;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-neutral-dark">
          What Generation Am I?
        </h1>
        <p className="text-neutral-gray text-lg">
          Enter your birth year to discover your generational cohort and learn about its characteristics.
        </p>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="birthYear">Birth Year</Label>
            <Input
              id="birthYear"
              type="number"
              placeholder="Enter your birth year (e.g., 1990)"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              min="1900"
              max={new Date().getFullYear()}
              className="text-lg"
            />
          </div>
          <Button type="submit" className="w-full">
            <Users2 className="mr-2 h-5 w-5" />
            Find My Generation
          </Button>
        </form>
      </Card>

      {result && (
        <Card className="p-6 bg-soft-blue">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-primary">
                You are part of {result.generation}
              </h2>
              <p className="text-neutral-gray">
                Birth Years: {result.yearRange}
              </p>
            </div>
            <p className="text-neutral-dark">
              {result.description}
            </p>
          </div>
        </Card>
      )}

      <Card className="p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Generation Overview ({currentYear})</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-soft-gray">
                <th className="p-3 text-left">Generation</th>
                <th className="p-3 text-left">Time Frame</th>
                <th className="p-3 text-left">Age in {currentYear}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">The Silent Generation</td>
                <td className="p-3">1928-1945</td>
                <td className="p-3">80-97 years old</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Baby Boomers</td>
                <td className="p-3">1946-1964</td>
                <td className="p-3">61-79 years old</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Gen X</td>
                <td className="p-3">1965-1980</td>
                <td className="p-3">45-60 years old</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Millennials</td>
                <td className="p-3">1981-1996</td>
                <td className="p-3">29-44 years old</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Gen Z</td>
                <td className="p-3">1997-2012</td>
                <td className="p-3">13-28 years old</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Gen Alpha</td>
                <td className="p-3">2013-2024</td>
                <td className="p-3">1-12 years old</td>
              </tr>
              <tr>
                <td className="p-3">Gen Beta</td>
                <td className="p-3">2025-2039</td>
                <td className="p-3">0 years old</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <HowItWorks />
      <FAQ />
    </div>
  );
};