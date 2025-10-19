"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { getAllUsers } from "@/src/app/api/auth/auth";
import User from "@/components/dashboard/users/User";
import { UserProps } from "@/src/models/users/User";

const Users: React.FC = () => {
  const router = useRouter();

  const [token, setToken] = useState<string | null>(null);
  const [users, setUsers] = useState<UserProps[]>([]);

  // برای دریافت توکن از کوکی در زمان ورود به صفحه
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("../../api/auth/get-token", {
          method: "GET",
          credentials: "include",
        });
        // console.log(res);
        const data = await res.json();

        setToken(data.token);

        if (!data.Authorization) {
          router.push("/login");
          console.log(data.message);
        }
      } catch (err: any) {
        alert(`خطا در بررسی توکن :${err.message}`);
      }
    };
    checkAuth();
  }, []);

  // گرفتن تمامی یوزر ها از سرور
  useEffect(() => {
    if (!token) return; // تا وقتی توکن نیومده، اجرا نکن

    const fetchData = async () => {
      try {
        const res = await getAllUsers(token);
        // console.log(res);
        if (res.isSuccess) {
          setUsers(res.data);
          console.log("دریافت کاربران:", res.message);
        }
      } catch (err: any) {
        console.error("خطا در دریافت کاربران:", err.message);
      }
    };

    fetchData();
  }, [token]);

  console.log(users);

  return (
    <table className="min-w-full divide-y divide-gray-200  text-right">
      <thead className=" text-gray-700 font-bold text-md">
        <tr>
          <th className=" px-4 py-3">نام و نام خانوادگی</th>
          <th className="  px-4 py-3">نقش</th>
          <th className=" px-4 py-3">ایمیل</th>
          <th className=" px-4 py-3">پوزیشن شغلی</th>
          <th className=" px-4 py-3 text-left">فعالیت </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 text-sm">
        {users.map((user) => (
          <User key={user.branchId} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default Users;
