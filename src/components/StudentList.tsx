// src/components/StudentList.tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function StudentList({ students }: { students: any[] }) {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">  ตารางนักเรียนในระบบ</h1>
        <Table>
        <TableCaption>รายการนักเรียนทั้งหมด</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ชื่อนักเรียน</TableHead>
            <TableHead>รหัสนักเรียน</TableHead>
            <TableHead>ผู้ปกครอง</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((s) => (
            <TableRow key={s._id}>
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.studentId}</TableCell>
              <TableCell>{s.parentName}</TableCell>
              <TableCell>{s.parentEmail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}