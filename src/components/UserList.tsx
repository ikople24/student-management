'use client';
import useSWR from 'swr';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function UserList() {
      const { data: users, error } = useSWR('/api/users', fetcher);

      if (error) return <div>Error loading users</div>;
      if (!users) return <div>Loading...</div>;

      return (
            <div>
                  <h2 className="text-xl font-bold">Users</h2>
                  <Table>
                        <TableHeader>
                              <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Username</TableHead>
                              </TableRow>
                        </TableHeader>
                        <TableBody>
                              {users.map((user: any) => (
                                    <TableRow key={user._id}>
                                          <TableCell>{user.name}</TableCell>
                                          <TableCell>{user.role}</TableCell>
                                          <TableCell>{user.username}</TableCell>
                                    </TableRow>
                              ))}
                        </TableBody>
                  </Table>
            </div>
      );
}