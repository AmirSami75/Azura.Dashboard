"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/SubmitButton";
import { loginUserService } from "@/app/api/auth/auth";
import {
  LoginValidation,
  LoginValidationType,
} from "@/lib/validation/loginValidation";

const LoginPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValidationType>({
    resolver: zodResolver(LoginValidation),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  // function when click on login button
  const handleLogin = async (data: LoginValidationType) => {
    try {
      let res = await loginUserService(data.userName, data.password);
      console.log("login user service calling : ", res.message);
      if (res.isSuccess) {
        const { token, requiresPasswordChange } = res.data;

        if (token) {
          // ذخیره توکن در کوکی
          const tokenRes = await fetch("/api/auth/set-token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
            credentials: "include",
          });

          const tokenData = await tokenRes.json();
          console.log("set token res in login page: ", tokenData);

          // اگر نیاز باشه کاربر پسورد خود را تغییر دهد به صفحه تغییر پسورد راهنمایی می شود
          if (!requiresPasswordChange) {
            await new Promise((r) => setTimeout(r, 500));
            router.push("/dashboard");
          } else router.push("/changepass");
        }
      } else alert(res.message);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(handleLogin)}
      className="backdrop-opacity-20 bg-background/70 text-foreground backdrop-invert px-4 py-5 rounded-xl shadow-2xl xl:m-4 min-w-[400px] flex gap-y-4 flex-col "
    >
      <h2 className="text-center text-2xl py-4">ورود به حساب کاربری</h2>
      <Input
        label={"نام کاربری"}
        type={"text"}
        nameInput={"user"}
        placeHolder={"شماره تماس یا ایمیل "}
        register={register("userName")}
        error={errors.userName?.message}
      />
      <Input
        label={"رمز عبور "}
        type={"password"}
        nameInput={"password"}
        register={register("password")}
        error={errors.password?.message}
      />
      <Link href={""} className="text-destructive text-sm ">
        فراموشی رمز عبور
      </Link>
      <Button
        textButton="ورود"
        bgColor={"success"}
        type={"submit"}
        textColor={"success-foreground"}
      />
    </form>
  );
};

export default LoginPage;
