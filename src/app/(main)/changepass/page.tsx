"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { changePassService } from "@/app/api/auth/auth";
import {
  ChangepassValidation,
  ChangepassValidationType,
} from "@/lib/validation/changepassValidation";
import useAuthStore from "@/store/auth-store";

import Button from "@/components/ui/SubmitButton";
import Input from "@/components/ui/Input";

const ChangePassPage = () => {
  const token = useAuthStore((state) => state.token);

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
    try {
      if (token) {
        const res = await changePassService(data, token);
        if (!res.isSuccess) {
          alert(res.message);
          // router.push("/login");
        } else {
          router.push("/dashboard");
        }
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleChangePass)}
      className="backdrop-opacity-20 bg-white/50 backdrop-invert xl:bg-primary-foreground text-primary px-4 py-5 rounded-xl shadow xl:m-4 min-w-[400px] flex gap-y-4 flex-col "
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
