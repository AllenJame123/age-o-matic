import {
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const PregnancyTableHeader = () => {
  return (
    <TableHeader className="sticky top-0 bg-white shadow-sm z-10">
      <TableRow>
        <TableHead className="whitespace-nowrap">Trimester</TableHead>
        <TableHead className="whitespace-nowrap">Date</TableHead>
        <TableHead className="whitespace-nowrap">Week</TableHead>
        <TableHead>Fetal Development</TableHead>
        <TableHead className="whitespace-nowrap">Baby Size</TableHead>
        <TableHead>Medical Procedures</TableHead>
      </TableRow>
    </TableHeader>
  );
};