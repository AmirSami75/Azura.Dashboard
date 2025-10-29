"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import Input from "@/components/ui/Input";
import SubmitButton from "@/components/ui/SubmitButton";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  addUserValidation,
  AddUserValidationType,
} from "@/lib/validation/addUserValidation";
import { getUserService } from "@/app/api/auth/auth";

const EditUser: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddUserValidationType>({
    resolver: zodResolver(addUserValidation),
    defaultValues: {
      branchId: "",
      mobile: 0,
      id: "",
      fullName: "",
      userName: "",
      phone: "",
      personelCode: "",
      address: "",
      email: "",
      parentId: "",
      role: "ویرایشگر",
    },
  });

  const router = useRouter();

  const handleEditUser = async (data: AddUserValidationType) => {
    console.log("فرم ویراش شد: ", data);
  };

  // برای دریافت توکن از کوکی در زمان ورود به صفحه
  useEffect(() => {
    const fetchData = async () => {
      try {
        // دریافت توکن از کوکی
        const tokenRes = await fetch("../../api/auth/get-token", {
          method: "GET",
          credentials: "include",
        });

        const tokenData = await tokenRes.json();
        const token = tokenData.token;
        console.log(token);

        const id = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
        const userRes = await getUserService(token, id);
      } catch (err: any) {
        alert(`خطا در بررسی توکن :${err.message}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* novalidation:  مرورگر را از ولیدیشن داخلی بازمیداره */}
      <form
        noValidate
        onSubmit={handleSubmit(handleEditUser)}
        className="bg-white px-4 py-5 rounded-xl shadow xl:m-4 min-w-[400px] flex gap-y-4 flex-col "
      >
        <h2 className="text-center text-2xl py-4">افزودن کاربر جدید</h2>
        <Input
          label={"نام کاربری"}
          type={"text"}
          nameInput="userName"
          placeHolder={"شماره تماس یا ایمیل "}
          register={register("userName")}
          error={errors.userName?.message}
        />
        <Input
          label={"نام و نام خانوادگی"}
          type={"text"}
          nameInput={" fullName"}
          register={register("fullName")}
          error={errors.fullName?.message}
        />

        <SubmitButton textButton="ویرایش کاربر" />
      </form>
    </div>
  );
};

export default EditUser;
