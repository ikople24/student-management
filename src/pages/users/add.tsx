import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeIcon, EyeOff, EyeOffIcon } from "lucide-react"; // icon ที่ใช้ (หรือ icon อะไรก็ได้)
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Swal from "sweetalert2";
import { z } from "zod";

// ✅ zod schema
const userSchema = z.object({
  name: z.string().min(4, "Name is required 4 characters"),
  username: z.string().min(6, "Username is required 6 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["admin", "teacher", "student"]),
});


export default function AddUser() {
  const [form, setForm] = useState({ name: "", username: "", password: "", role: "student" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const result = userSchema.safeParse(form); // ✅ moved here!

    if (!result.success) {
      const formErrors: { [key: string]: string } = {};
      result.error.errors.forEach(err => {
        formErrors[err.path[0]] = err.message;
      });
      setErrors(formErrors);

      Swal.fire({
        icon: 'error',
        title: 'ข้อมูลไม่ถูกต้อง',
        text: 'กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง',
        timer: 1500,
        customClass: {
          confirmButton: 'bg-primary text-white hover:bg-primary/90 focus:ring focus:ring-primary/50'
        }
      });

      return;
    }

    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: 'เพิ่มผู้ใช้เรียบร้อย!',
        text: 'ผู้ใช้ถูกเพิ่มเข้าสู่ระบบแล้ว',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        router.push("/dashboard");
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด',
        text: 'ไม่สามารถเพิ่มผู้ใช้ได้',
      });
    }
    return (
      <div className="p-8 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Add New User</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ... (rest of your JSX stays the same) */}
        </form>
      </div>
    );
  }


  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Name</Label>
          <Input
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <Label>Username</Label>
          <Input
            value={form.username}
            onChange={e => setForm({ ...form, username: e.target.value })}
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>
        <div>
          <Label>Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <EyeIcon className="h-5 w-5 text-secondary dark:text-accent" />
              ) : (
                <EyeOff className="h-5 w-5 text-secondary dark:text-accent" />
              )}
            </button>
          </div>
        </div>
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        <div>
          <Label>Role</Label>
          <Select
            value={form.role}
            onValueChange={value => setForm({ ...form, role: value })}
          >
            <SelectTrigger><SelectValue placeholder="Select Role" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="student">Student</SelectItem>
            </SelectContent>
          </Select>
          {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
        </div>
        <Button variant="secondary" type="submit">Create User</Button>
      </form>
    </div>
  );
}