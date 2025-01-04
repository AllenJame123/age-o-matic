interface TimeBlockProps {
  label: string;
  value: number;
}

export const TimeBlock = ({ label, value }: TimeBlockProps) => (
  <div className="bg-soft-purple p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-200">
    <div className="text-3xl font-bold text-purple-800">{value}</div>
    <div className="text-sm text-purple-600 font-medium">{label}</div>
  </div>
);