import { z } from "zod";

export const addTaskFormSchema = z.object({
  title: z.string().trim().min(1, "عنوان تسک را وارد نمایید"),
  date: z.string().trim().nonempty("تاریخ را وارد نمایید"),
  priority: z.enum(["extreme", "moderate", "low"]).nullable().optional(),
  description: z.string().trim().min(1, "توضیحات را وارد نمایید"),
  //   any: هر فرمتی را می پذیرد
  // refine:سخت گیری کردیم که بایدنوعش فایل لیست باشد و حداقل یک فایل داخلش باشد
  attachFile: z.unknown().refine((files) => {
    // ssr-safe guard
    if (typeof window === "undefined") return true;
    if (typeof FileList === "undefined") return false;
    return files instanceof FileList && files.length > 0;
  }, "لطفا یک فایل انتخاب نمایید"),
});
export type AddTaskFormType = z.infer<typeof addTaskFormSchema>;
