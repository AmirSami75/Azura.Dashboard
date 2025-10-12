"use client";

import Input from "../../../../components/ui/Input";
import SubmitButton from "../../../../components/ui/SubmitButton";
import Link from "next/link";
import React, { useState } from "react";
import { loginService } from "../../api/auth/userServices";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  // function when click on login button
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const req = { userName, password };
    try {
      const { data: res } = await loginService(req);
      // console.log(res);
      const { token, requiresPasswordChange } = res.data;
      if (token) {
        // ذخیره توکن در کوکی
        await fetch("../../api/auth/set-token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        // اگر نیاز باشه کاربر پسورد خود را تغییر دهد به صفحه تغییر پسورد راهنمایی می شود
        if (!requiresPasswordChange) {
          router.push("/dashboard");
        } else router.push("/changepass");
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white px-4 py-5 rounded-xl shadow xl:m-4 min-w-[400px] flex gap-y-4 flex-col "
    >
      <h2 className="text-center text-2xl py-4">ورود به حساب کاربری</h2>
      <Input
        label={"نام کاربری"}
        type={"text"}
        value={userName}
        nameInput={"user"}
        placeHolder={"شماره تماس یا ایمیل "}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        label={"رمز عبور "}
        type={"password"}
        value={password}
        nameInput={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link href={""} className="text-red-500 text-sm ">
        فراموشی رمز عبور
      </Link>
      <SubmitButton textButton="ورود" />
    </form>
  );
};

export default LoginPage;
