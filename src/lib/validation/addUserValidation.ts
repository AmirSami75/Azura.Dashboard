import z, { regex } from "zod";

// const roleSchema = z.object({
//   id: z.string(),
// });

export const addUserValidation = z.object({
  mobile: z
    .string()
    .nonempty("شماره تماس خود را وارد نمایید")
    .regex(/^09\d{9}$/, "شماره تماس نامعتبر می باشد"),
  fullName: z
    .string()
    .nonempty("نام و نام خانوادگی خود را وارد نمایید")
    .min(4, "نام باید حداقل 4 کارکتر باشد"),
  userName: z.string().nonempty("نام کاربری خود را وارد نمایید"),
  phone: z.string().optional(),
  address: z.string().optional(),
  email: z.string().email("ایمیل نامعتبر است").optional(),
  // .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "ایمیل نامعتبر می باشد")
  // role: z.array(roleSchema).min(1, "برای کاربر حداقل یک نقش انتخاب کنید"),
  roles: z
    .array(z.object({ id: z.string() }))
    .min(1, "حداقل یک نقش برای کاربر لازم است "),
});

export type AddUserValidationType = z.infer<typeof addUserValidation>;
