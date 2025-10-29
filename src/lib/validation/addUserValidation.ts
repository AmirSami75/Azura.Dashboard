import z from "zod";

// const roleSchema = z.object({
//   id: z.string(),
// });

export const addUserValidation = z.object({
  branchId: z.string().optional(),
  mobile: z.number().optional(),
  id: z.string().optional(),
  fullName: z
    .string()
    .nonempty("نام و نام خانوادگی خود را وارد نمایید")
    .min(4, "نام باید حداقل 4 کارکتر باشد"),
  userName: z.string().nonempty("نام کاربری خود را وارد نمایید"),
  phone: z.string().optional(),
  personelCode: z.string().optional(),
  address: z.string().optional(),
  email: z.string().optional(),
  parentId: z.string().optional(),
  // role: z.array(roleSchema).min(1, "برای کاربر حداقل یک نقش انتخاب کنید"),
  role: z.enum(["مدیر سیستم", "نویسننده", "ویرایشگر"], {
    message: "باید یکی را انتخاب کنید",
  }),
});

export type AddUserValidationType = z.infer<typeof addUserValidation>;
