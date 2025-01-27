import {
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const PregnancyTableHeader = () => {
  return (
    <TableHeader className="sticky top-0 bg-white">
      <TableRow>
        <TableHead>Trimester</TableHead>
        <TableHead>Date</TableHead>
        <TableHead>Week</TableHead>
        <TableHead>Fetal Development</TableHead>
        <TableHead>Baby Size</TableHead>
        <TableHead>Medical Procedures</TableHead>
      </TableRow>
    </TableHeader>
  );
};