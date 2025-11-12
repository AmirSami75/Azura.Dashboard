"use client";

import Input from "@/components/ui/Input";
import { changePassService } from "@/app/api/auth/auth";
import Button from "@/components/ui/SubmitButton";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChangepassValidation,
  ChangepassValidationType,
} from "@/lib/validation/changepassValidation";

const ChangePassPage = () => {
  const [token, setToken] = useState("");

  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ChangepassValidationType>({
    resolver: zodResolver(ChangepassValidation),
    defaultValues: {
      currentPass: "",
      newPass: "",
      confirmNewPass: "",
    },
  });

  // وقتی کاربر روی دکمه تغییر رمز عبور کلیک می کنه این فاکنشن کال میشه
  const handleChangePass = async (data: ChangepassValidationType) => {
    // debugger;

    try {
      const res = await changePassService(data, token);
      if (!res.isSuccess) {
        alert(res.message);
        // router.push("/login");
      } else {
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
      } catch (err: any) {
        console.log("خطا در بررسی توکن :", err.message);
      }
    };
    checkAuth();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(handleChangePass)}
      className="bg-primary-foreground text-primary px-4 py-5 rounded-xl shadow xl:m-4 min-w-[400px] flex gap-y-4 flex-col "
    >
      <h2 className="text-center text-2xl py-4">ورود به حساب کاربری</h2>
      <Input
        label={"رمز فعلی"}
        type="password"
        nameInput="currentPass"
        register={register("currentPass")}
        error={errors.currentPass?.message}
      />
      <Input
        label={"رمز جدید"}
        type="password"
        nameInput="newPass"
        register={register("newPass")}
        error={errors.newPass?.message}
      />
      <Input
        label={"تکرار رمز جدید"}
        type={"password"}
        nameInput={"confirmNewPass"}
        register={register("confirmNewPass")}
        error={errors.confirmNewPass?.message}
      />
      <Button
        textButton="تغییر رمز عبور"
        bgColor={"secondary"}
        type={"submit"}
        textColor={"secondary-foreground"}
      />
    </form>
  );
};

export default ChangePassPage;
