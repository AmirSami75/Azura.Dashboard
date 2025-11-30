"use client";

import { useParams, useRouter } from "next/navigation";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/SubmitButton";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  addUserValidation,
  AddUserValidationType,
} from "@/lib/validation/addUserValidation";
import useAuthStore from "@/store/auth-store";
import { useEffect, useMemo } from "react";
import { getUserService } from "@/app/api/auth/user";
import { editUserService } from "@/app/api/auth/user";

const EditUser = () => {
  const token = useAuthStore((state) => state.token);

  const params = useParams();
  const router = useRouter();

  const id = useMemo(() => {
    const raw = params.id;
    if (!raw) {
      return undefined;
    }
    return Array.isArray(raw) ? raw[0] : raw;
  }, [params.id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddUserValidationType>({
    resolver: zodResolver(addUserValidation),
    defaultValues: {},
  });

  const handleEditUser = async (data: AddUserValidationType) => {
    try {
      if (token && id) {
        const res = await editUserService(token, data, id);
        if (!res.isSuccess) {
          alert(res.message);
        } else {
          router.push("/dashboard/users");
        }
      }
    } catch (err: any) {
      alert(err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token && id) {
          const { data } = await getUserService(token, id);
          reset({
            userName: data.userName,
            fullName: data.fullName,
            mobile: data.mobile ?? "0",
            phone: data.phone ?? "",
            address: data.address ?? "",
            email: data.email ?? "",
            roles: data.roles ?? [{ id: "ویرایشگر" }],
          });
        }
      } catch (err: any) {
        console.log("دریافت اطلاعات کاربر با ای دی : ", err);
      }
    };
    fetchData();
  }, [token, id, reset]);

  return (
    <div>
      {/* novalidation:  مرورگر را از ولیدیشن داخلی بازمیداره */}
      <form
        noValidate
        onSubmit={handleSubmit(handleEditUser)}
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
        <div className="">
          <Button
            textButton="ویرایش کاربر"
            bgColor={""}
            type="submit"
            textColor={"secondary-foreground"}
          />
        </div>
      </form>
    </div>
  );
};

export default EditUser;
