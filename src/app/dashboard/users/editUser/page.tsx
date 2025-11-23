"use client";

import { useRouter } from "next/navigation";

import Input from "@/components/ui/Input";
import SubmitButton from "@/components/ui/SubmitButton";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  addUserValidation,
  AddUserValidationType,
} from "@/lib/validation/addUserValidation";
import useAuthStore from "@/store/auth-store";

const EditUser: React.FC = () => {
  const token = useAuthStore((state) => state.token);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddUserValidationType>({
    resolver: zodResolver(addUserValidation),
    defaultValues: {
      mobile: "0",
      fullName: "",
      userName: "",
      phone: "",
      address: "",
      email: "",
      role: ["ویرایشگر"],
    },
  });

  const router = useRouter();

  const handleEditUser = async (data: AddUserValidationType) => {
    console.log("فرم ویراش شد: ", data);
  };

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
