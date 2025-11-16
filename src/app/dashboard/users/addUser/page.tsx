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
import { addUserService } from "@/app/api/auth/user";

const AddUser: React.FC = () => {
  // const [roles, setRoles] = useState<string[]>([]);
  const [token, setToken] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddUserValidationType>({
    resolver: zodResolver(addUserValidation),
    defaultValues: {
      branchId: "",
      mobile: "",
      id: "",
      fullName: "",
      userName: "",
      phone: "",
      personelCode: "",
      address: "",
      email: "",
      parentId: "",
      roles: [],
    },
  });

  const router = useRouter();

  const handleAddNewUser = async (data: AddUserValidationType) => {
    // دیتا از zod عبور کرده و ولیدیشن ان چک شده است
    console.log("فرم ارسال شد ", data);

    const res = await addUserService(token, data);
    console.log(res);
    if (res.isSuccess) {
      router.push("/dashboard");
    } else alert(res.message);
    // ریست فرم در صورت نیاز
    reset();
  };

  // برای دریافت توکن از کوکی در زمان ورود به صفحه
  useEffect(() => {
    const fetchData = async () => {
      try {
        // دریافت توکن از کوکی
        const tokenRes = await fetch("/api/auth/get-token", {
          method: "GET",
          credentials: "include",
        });
        // console.log(tokenRes);
        const tokenData = await tokenRes.json();
        setToken(tokenData.token);
        // console.log(token);
        // دریاقت نقش ها از api
        // const rolesRes = await getRolesService(token);
        // const  = await rolesRes.json()
        // console.log(rolesRes);
      } catch (err: any) {
        alert(`خطا در بررسی توکن :${err.message}`);
      }
    };
    fetchData();
  }, []);
  console.log("errors:", errors);

  return (
    <div>
      {/* novalidation:  مرورگر را از ولیدیشن داخلی بازمیداره */}
      <form
        noValidate
        onSubmit={handleSubmit(handleAddNewUser)}
        className="bg-primary-foreground px-4 py-5 rounded-xl shadow xl:m-4 min-w-[400px] flex gap-y-4 flex-col "
      >
        <h2 className="text-center text-2xl py-4">افزودن کاربر جدید</h2>
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
          {...register("branchId")}
          value="00000000-0000-0000-0000-000000000000"
        />
        <input type="hidden" {...register("id")} value="" />
        <input type="hidden" {...register("personelCode")} value="" />
        <input type="hidden" {...register("parentId")} value="" />

        <input
          type="hidden"
          {...register("roles.0.id")}
          value="019a0736-3548-7710-87d3-3120133ea7bf"
        />
        {/* <SelectInput
        control={control},
  name="roles",
  label="نقش کاربر ",
  options,
  multiple = false,
  error,
        
        
        /> */}

        <Button
          textButton="افزودن کاربر"
          bgColor={"secondary"}
          type="submit"
          textColor={"secondary-foreground"}
        />
      </form>
    </div>
  );
};

export default AddUser;
