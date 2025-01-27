export type CalculationType = "difference" | "add" | "subtract" | "business";

export interface DateResult {
  totalDays: number;
  businessDays: number;
  formattedDate?: string;
  dayOfWeek?: string;
}