"use client";

import { changePass } from "@/app/api/auth/userServices";
import Input from "../../../../components/ui/Input";
import SubmitButton from "../../../../components/ui/SubmitButton";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ChangePassPage = () => {
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [token, setToken] = useState("");

  const router = useRouter();

  // fuction when user click on changepass button
  const handleChangePass = async (e: React.FormEvent) => {
    e.preventDefault();

    const req = {
      currentPass,
      newPass,
      confirmNewPass,
    };

    try {
      const { data } = await changePass(req, token);
      if (data.isSuccess) {
        router.push("/dashboard");
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  // برای دریافت توکن از کوکی در زمان ورود به صفحه
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("../../api/auth/get-token", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        // console.log(data);
        const jwtToken = data.token;
        setToken(jwtToken);
        if (!jwtToken) {
          router.push("/login");
        }
      } catch (err: any) {
        console.log("خطا در بررسی توکن :", err.message);
      }
    };
    checkAuth();
  }, []);

  return (
    <form
      onSubmit={handleChangePass}
      className="bg-white px-4 py-5 rounded-xl shadow xl:m-4 min-w-[400px] flex gap-y-4 flex-col "
    >
      <h2 className="text-center text-2xl py-4">ورود به حساب کاربری</h2>
      <Input
        label={"رمز فعلی"}
        type="password"
        value={currentPass}
        nameInput="currentPass"
        onChange={(e) => setCurrentPass(e.target.value)}
      />
      <Input
        label={"رمز جدید"}
        type="password"
        value={newPass}
        nameInput="newPass"
        onChange={(e) => setNewPass(e.target.value)}
      />
      <Input
        label={"تکرار رمز جدید"}
        type={"password"}
        value={confirmNewPass}
        nameInput={"confirmNewPass"}
        onChange={(e) => setConfirmNewPass(e.target.value)}
      />
      <SubmitButton textButton="تغییر رمز عبور" />
    </form>
  );
};

export default ChangePassPage;
