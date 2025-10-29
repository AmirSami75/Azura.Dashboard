import z from "zod";

export const LoginValidation = z.object({
  userName: z
    .string()
    .min(4, "نام کاربری حداقل شامل 4 کارکتر باشد")
    .nonempty("نام کاربری  خود را وارد نمایید "),
  password: z.string().nonempty("پسورد خود را وارد نمایید"),
});

export type LoginValidationType = z.infer<typeof LoginValidation>;
