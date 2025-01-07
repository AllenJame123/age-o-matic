import { LucideIcon } from "lucide-react";

interface TimeBlockProps {
  value: number;
  label: string;
  icon: LucideIcon;
}

export const TimeBlock = ({ value, label, icon: Icon }: TimeBlockProps) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-soft-purple to-soft-gray rounded-xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
    <div className="relative flex flex-col items-center p-8 bg-white/90 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
      <Icon className="h-8 w-8 text-primary mb-3" />
      <div className="text-6xl font-bold bg-gradient-to-r from-primary to-soft-purple bg-clip-text text-transparent font-mono">
        {value.toString().padStart(2, '0')}
      </div>
      <span className="text-sm font-medium text-gray-600 uppercase tracking-wider mt-2">{label}</span>
    </div>
  </div>
);