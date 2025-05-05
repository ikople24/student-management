import { Card, CardContent } from "@/components/ui/card";

export default function StudentsPage() {
  return (
    <Card className="max-w-2xl mx-auto shadow-md">
      <CardContent>
        <h1 className="text-2xl font-bold text-accent">Students Page</h1>
        <p>ข้อมูล student จะอยู่ตรงนี้</p>
      </CardContent>
    </Card>
  );
}