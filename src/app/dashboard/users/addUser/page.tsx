"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/SubmitButton";
import {
  addUserValidation,
  AddUserValidationType,
} from "@/lib/validation/addUserValidation";
import { addUserService, getRolesService } from "@/app/api/auth/user";
import useAuthStore from "@/store/auth-store";

const AddUser: React.FC = () => {
  const token = useAuthStore((state) => state.token);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddUserValidationType>({
    resolver: zodResolver(addUserValidation),
    defaultValues: {},
  });

  const handleAddNewUser = async (data: AddUserValidationType) => {
    // دیتا از zod عبور کرده و ولیدیشن ان چک شده است
    // console.log("فرم ارسال شد ", data);
    if (token) {
      const res = await addUserService(token, data);
      if (res.isSuccess) {
        console.log("اضافه کردن کاربر جدید:", res);
        router.push("/dashboard/users");
      } else alert(res.message);
      // ریست فرم در صورت نیاز
      reset();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const data = await getRolesService(token);
          console.log(data);
        }
      } catch (err: any) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* novalidation:  مرورگر را از ولیدیشن داخلی بازمیداره */}
      <form
        noValidate
        onSubmit={handleSubmit(handleAddNewUser)}
        className="bg-card text-card-foreground px-4 py-5 rounded-xl shadow xl:m-4 min-w-[400px] flex gap-y-4 flex-col "
      >
        <h3 className="text-center text-2xl py-4">افزودن کاربر جدید</h3>
        <Input
          label="نام کاربری"
          type="text"
          nameInput="userName"
          placeHolder="شماره تماس یا ایمیل "
          register={register("userName")}
          error={errors.userName?.message}
        />
        <Input
          label="نام و نام خانوادگی"
          type="text"
          nameInput="fullName"
          register={register("fullName")}
          error={errors.fullName?.message}
        />
        <Input
          label="شماره تماس"
          type="text"
          nameInput="mobile"
          register={register("mobile")}
          error={errors.mobile?.message}
        />
        <Input
          label="آدرس"
          type="text"
          nameInput="address"
          register={register("address")}
          error={errors.address?.message}
        />
        <Input
          label="ایمیل"
          type="email"
          nameInput="email"
          register={register("email")}
          error={errors.email?.message}
        />

        <input
          type="hidden"
          {...register("roles.0.id")}
          value="019a0736-3548-7710-87d3-3120133ea7bf"
        />
        <Button
          textButton="افزودن کاربر"
          bgColor={"success"}
          type="submit"
          textColor={"success-foreground"}
        />
      </form>
    </div>
  );
};

export default AddUser;
