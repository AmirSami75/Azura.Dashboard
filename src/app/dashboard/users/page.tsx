"use client";

import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

import { getAllUsers } from "@/app/api/auth/user";
import User from "@/components/dashboard/users/User";
import { UserProps } from "@/models/users/User";
import { Button } from "@/components/ui/Button";
import useAuthStore from "@/store/auth-store";

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const token = useAuthStore((state) => state.token);

  // درخواست برای دریافت تمامی کاربران از ای پی ای
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const usersRes = await getAllUsers(token);
          if (usersRes.isSuccess) {
            setUsers(usersRes.data);
            console.log("دریافت  همه کاربران:", usersRes.message);
          }
        }
      } catch (err: any) {
        console.error("خطا در دریافت  همه کاربران:", err.message);
      }
    };
    fetchData();
  }, [token, users]);

  return (
    <div className="bg-card rounded-xl text-card-foreground shadow-sm">
      <div className="space-y-1.5 p-4 mb-6 border-b border-border flex flex-row items-center">
        <h3 className="text-2xl font-medium flex-1 pr-2 ">کاربران</h3>
        <Button
          asChild
          size="xl"
          color="success"
          variant="outline"
          className="mb-3 rounded-xl"
        >
          <Link href="/dashboard/users/adduser">افزودن کاربر جدید</Link>
        </Button>
      </div>
      <div className="p-6 pt-0">
        <div className="rounded-xl bg-card text-card-foreground shadow-sm">
          <div className="overflow-x-auto">
            <table className="container  min-w-full divide-y divide-border text-center ">
              <thead className=" text-md text-card-foreground">
                <tr>
                  <th className=" px-4 py-4">نام و نام خانوادگی</th>
                  <th className="  px-4 py-4">نقش</th>
                  <th className=" px-4 py-4">پوزیشن شغلی</th>
                  <th className=" px-4 py-4">وضعیت کاربر</th>
                  <th className=" px-4 py-4 ">فعالیت </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {users.map((user) => (
                  <User key={user.id} user={user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
