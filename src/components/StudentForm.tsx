// src/components/StudentForm.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StudentForm({ onAdd }: { onAdd: (student: any) => void }) {
  const [form, setForm] = useState({
    name: "",
    studentId: "",
    parentName: "",
    parentEmail: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(form);
    setForm({ name: "", studentId: "", parentName: "", parentEmail: "" });
  };
  

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">📝 Add Student</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <Label htmlFor="name" className="text-sm font-medium">
                1. ชื่อ-นามสกุลนักเรียน
              </Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="กรอกชื่อ-นามสกุล"
                required
              />
            </div>

            {/* Student ID */}
            <div>
              <Label htmlFor="studentId" className="text-sm font-medium">
                2. รหัสนักเรียน
              </Label>
              <Input
                id="studentId"
                name="studentId"
                value={form.studentId}
                onChange={handleChange}
                placeholder="กรอกรหัสนักเรียน เช่น 1223"
                required
              />
            </div>

            {/* Parent Name */}
            <div>
              <Label htmlFor="parentName" className="text-sm font-medium">
                3. ชื่อผู้ปกครอง
              </Label>
              <Input
                id="parentName"
                name="parentName"
                value={form.parentName}
                onChange={handleChange}
                placeholder="ชื่อผู้ปกครอง"
              />
            </div>

            {/* Parent Email */}
            <div>
              <Label htmlFor="parentEmail" className="text-sm font-medium">
                4. e-mail
              </Label>
              <Input
                id="parentEmail"
                name="parentEmail"
                type="email"
                value={form.parentEmail}
                onChange={handleChange}
                placeholder="เมล์ผู้ปกครอง @gmail.com"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit">+ Add Student</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}