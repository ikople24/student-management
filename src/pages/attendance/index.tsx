import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

type AttendanceRecord = {
  _id: string;
  student: { name: string } | string;
  subject: { name: string } | string;
  date: string;
  status: string;
};

export default function AttendancePage() {
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([]);
  const [form, setForm] = useState({
    student: "",
    subject: "",
    date: undefined as Date | undefined, // ใช้ Date object
    status: "มา",
  });

  useEffect(() => {
    fetch("/api/attendance")
      .then((res) => res.json())
      .then((data) =>
        setAttendance(
          data.map((a: any) => ({
            ...a,
            date: new Date(a.date), // ✅ แปลง string → Date
          }))
        )
      );
  }, []);

  const handleDelete = async (id: string) => {
    await fetch(`/api/attendance/${id}`, { method: "DELETE" });
    setAttendance(attendance.filter((a) => a._id !== id));
  };

  const handleAdd = async () => {
    const res = await fetch("/api/attendance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        date: form.date ? form.date.toISOString().split('T')[0] : "",
      }),
    });

    if (res.ok) {
      const newRecord = await res.json();
      setAttendance([...attendance, newRecord]);
      setForm({ student: "", subject: "", date: undefined, status: "มา" });
    }
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
            <Input
              placeholder="Student"
              value={form.student}
              onChange={(e) => setForm({ ...form, student: e.target.value })}
            />
            <Input
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[200px] justify-start text-left font-normal"
                >
                  {form.date ? format(form.date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={form.date}
                  onSelect={(date) => setForm({ ...form, date })}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Select
              value={form.status}
              onValueChange={(value) => setForm({ ...form, status: value })}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="มา">มา</SelectItem>
                <SelectItem value="ขาด">ขาด</SelectItem>
                <SelectItem value="ลา">ลา</SelectItem>
                <SelectItem value="สาย">สาย</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleAdd}>Add</Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendance.map((att) => (
                <TableRow key={att._id}>
                  <TableCell>{typeof att.student === 'string' ? att.student : att.student.name}</TableCell>
                  <TableCell>{typeof att.subject === 'string' ? att.subject : att.subject.name}</TableCell>
                  <TableCell>{att.date}</TableCell>
                  <TableCell>{att.status}</TableCell>
                  <TableCell>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(att._id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}