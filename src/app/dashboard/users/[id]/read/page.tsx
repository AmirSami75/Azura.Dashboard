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

const ReadUser = () => {
  const token = useAuthStore((state) => state.token);

  const params = useParams();

  const id = useMemo(() => {
    const raw = params.id;
    if (!raw) {
      return undefined;
    }
    return Array.isArray(raw) ? raw[0] : raw;
  }, [params.id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token && id) {
          const { data } = await getUserService(token, id);
        }
      } catch (err: any) {
        console.log("دریافت اطلاعات کاربر با ای دی برای نمایش کاربر : ", err);
      }
    };
    fetchData();
  }, [token, id]);

  return <div></div>;
};

export default ReadUser;
