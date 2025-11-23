"use client";

import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

import { getAllUsers } from "@/app/api/auth/auth";
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
            console.log("دریافت کاربران:", usersRes.message);
          }
        }
      } catch (err: any) {
        console.error("خطا در دریافت کاربران:", err.message);
      }
    };
    fetchData();
  }, [token, users]);

  return (
    <>
      <Button asChild size="xl" color="success" className="mb-3">
        <Link href="/dashboard/users/adduser">افزودن کاربر جدید</Link>
      </Button>
      <table className="container min-w-full divide-y divide-gray-300  text-center ">
        <thead className=" text-gray-700 font-bold text-md">
          <tr>
            <th className=" px-4 py-4">نام و نام خانوادگی</th>
            <th className="  px-4 py-4">نقش</th>
            <th className=" px-4 py-4">پوزیشن شغلی</th>
            <th className=" px-4 py-4">وضعیت کاربر</th>
            <th className=" px-4 py-4 ">فعالیت </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
