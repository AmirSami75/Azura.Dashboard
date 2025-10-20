"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/navigation";

import Input from "@/components/ui/Input";
import SubmitButton from "@/components/ui/SubmitButton";

const AddUser = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState([]);

  const router = useRouter();

  const handleAddNewUser = () => {};

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

  return (
    <div>
      {/* <form
        onSubmit={handleAddNewUser}
        className="bg-white px-4 py-5 rounded-xl shadow xl:m-4 min-w-[400px] flex gap-y-4 flex-col "
      >
        <h2 className="text-center text-2xl py-4">ورود به حساب کاربری</h2>
        <Input
          // label={"نام کاربری"}
          type={"text"}
          // value={}
          nameInput={"user"}
          placeHolder={"شماره تماس یا ایمیل "}
          // onChange={}
        />
        <Input
          label={"رمز عبور "}
          type={"password"}
          // value={password}
          nameInput={"password"}
          // onChange={(e) => setPassword(e.target.value)}
        />
        <Link href={""} className="text-red-500 text-sm ">
          فراموشی رمز عبور
        </Link>
        <SubmitButton textButton="ورود" />
      </form> */}
    </div>
  );
};

export default AddUser;
