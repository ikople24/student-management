import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bell, Search } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="mx-auto">
      {/* ✅ Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-semibold text-secondary">แดชบอร์ด</h1>
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5" />
          <Input placeholder="ค้นหา..." className="max-w-xs" />
        </div>
      </div>

      {/* ✅ การ์ดข้อมูลหลัก */}
      <div className="grid grid-cols-4 gap-2 p-6">
        <Card>
          <CardHeader>
            <CardTitle>👨‍🎓 นักเรียนทั้งหมด</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">248 คน</p>
            <p className="text-green-500 text-sm">+3.2% จากเดือนที่แล้ว</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>✅ อัตราการมาเรียน</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">92.4%</p>
            <p className="text-green-500 text-sm">+1.8% จากสัปดาห์ที่แล้ว</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>⚠️ นักเรียนขาดเรียน</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12 คน</p>
            <p className="text-red-500 text-sm">+2.1% จากสัปดาห์ที่แล้ว</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>📊 คะแนนเฉลี่ย</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">76.5%</p>
            <p className="text-green-500 text-sm">+4.2% จากเทอมที่แล้ว</p>
          </CardContent>
        </Card>
      </div>

      {/* ✅ การ์ดใหญ่ (2 คอลัมน์) */}
      <div className="grid grid-cols-2 gap-4 px-6">
        <Card className="h-64">
          <CardHeader>
            <CardTitle>📅 สถิติการมาเรียนรายเดือน</CardTitle>
          </CardHeader>
          <CardContent>
            {/* ใส่ chart หรือข้อความ demo */}
            <div className="h-full flex items-center justify-center text-gray-400">Chart Area</div>
          </CardContent>
        </Card>
        <Card className="h-64">
          <CardHeader>
            <CardTitle>📋 สถานะการมาเรียน</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-full flex items-center justify-center text-gray-400">Table Area</div>
          </CardContent>
        </Card>
      </div>

      {/* ✅ การ์ดเล็กด้านล่าง (3 คอลัมน์) */}
      <div className="grid grid-cols-3 gap-4 px-6 py-4">
        <Card>
          <CardHeader>
            <CardTitle>🚨 นักเรียนขาดเรียนบ่อย</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-blue-600 text-sm cursor-pointer">ดูทั้งหมด</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>📐 คะแนนเฉลี่ยรายวิชา</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-blue-600 text-sm cursor-pointer">เลือกห้องเรียน</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>📝 กิจกรรมล่าสุด</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-blue-600 text-sm cursor-pointer">ดูทั้งหมด</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}