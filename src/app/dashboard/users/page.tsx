"use client";

import { useEffect } from "react";
import { useState } from "react";

import { getAllUsers } from "@/app/api/auth/auth";
import User from "@/components/dashboard/users/User";
import { UserProps } from "@/models/users/User";

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  // دریافت توکن و درخواست برای دریافت تمامی کاربران از ای پی ای
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenRes = await fetch("../../api/auth/get-token", {
          method: "GET",
          credentials: "include",
        });
        const data = await tokenRes.json();
        const token = data.token;
        if (!token) return;

        const usersRes = await getAllUsers(token);
        console.log(usersRes);
        if (usersRes.isSuccess) {
          setUsers(usersRes.data);
          console.log("دریافت کاربران:", usersRes.message);
        }
      } catch (err: any) {
        console.error("خطا در دریافت کاربران:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <table className="min-w-full divide-y divide-gray-200  text-center">
        <thead className=" text-gray-700 font-bold text-md">
          <tr>
            <th className=" px-4 py-3">نام و نام خانوادگی</th>
            <th className="  px-4 py-3">نقش</th>
            <th className=" px-4 py-3">پوزیشن شغلی</th>
            <th className=" px-4 py-3">وضعیت کاربر</th>
            <th className=" px-4 py-3 ">فعالیت </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm">
          {users.map((user) => (
            <User key={user.branchId} user={user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
