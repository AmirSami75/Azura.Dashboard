import z from "zod";

export const ChangepassValidation = z
  .object({
    currentPass: z.string(),
    newPass: z.string().min(8, "حداقل کارکتر های رمز عبور 8 عدد می باشد"),
    confirmNewPass: z.string(),
  })
  .refine((data) => data.newPass === data.confirmNewPass, {
    message: "رمز عبور یکسان نیست ",
    path: ["confirmNewPass"],
  });

export type ChangepassValidationType = z.infer<typeof ChangepassValidation>;
