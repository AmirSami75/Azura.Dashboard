"use client";

import Input from "../../../components/ui/Input";
import SubmitButton from "../../../components/ui/SubmitButton";
import Link from "next/link";
import React, { useState } from "react";
import { signupService } from "../../../api/auth/userServices";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      userName: { userName },
      password: { password },
      fullName: { fullName },
      phone: { phone },
    };
    try {
      const res = await signupService(data);
      console.log(res);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      className="bg-white px-4 py-5 rounded-xl shadow xl:m-4 min-w-[400px] flex gap-y-4 flex-col "
    >
      <h2 className="text-center text-2xl py-4">ورود به حساب کاربری</h2>
      <Input
        label={"نام و نام خانوادگی"}
        type="text"
        value={fullName}
        nameInput="fullName"
        onChange={(e) => setFullName(e.target.value)}
      />
      <Input
        label={"شماره تماس"}
        type="nummber"
        value={phone}
        nameInput="phone"
        placeHolder="09121112233"
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        label={"نام کاربری"}
        type={"text"}
        value={userName}
        nameInput={"userName"}
        placeHolder={"شماره تماس یا ایمیل "}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        label={"رمز عبور "}
        type={"text"}
        value={password}
        nameInput={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Link href={"/"} className=" text-sm">
        ورود به حساب کاربری
      </Link>
      <SubmitButton textButton="ساخت حساب کاربری" />
    </form>
  );
};

export default Signup;
