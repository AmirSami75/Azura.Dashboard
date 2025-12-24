"use client";

import { LuImageUp } from "react-icons/lu";
import SubmitButton from "@/components/ui/SubmitButton";
import Input from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTaskFormSchema } from "@/lib/validation/addTaskFormSchema";
import { useEffect, useState } from "react";

//
type AddTaskInputProps = {
  title: string;
  date: string;
  priority?: "extreme" | "moderate" | "low" | null | undefined;
  description: string;
  attachFile: any;
};

const AddTask = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AddTaskInputProps>({
    resolver: zodResolver(addTaskFormSchema),
    defaultValues: {},
    mode: "onSubmit",
  });

  // فایل انتخاب شده را از فایل می گیریم
  const files = watch("attachFile");
  const file = files?.[0];
  console.log("file", file);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleForm = (data: AddTaskInputProps) => {
    console.log("form data", data);
  };

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    if (!file.type.startsWith("image/")) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  }, [file]);

  return (
    <div className="container">
      <div className="border-b-2 border-destructive font-bold w-fit mb-8 py-1 mx-auto">
        افزودن تسک جدید
      </div>
      {/* card */}
      <div className="border border-default-400 p-8 ">
        <form
          noValidate
          onSubmit={handleSubmit(handleForm)}
          className="grid grid-cols-1 md:grid-cols-3 items-start "
        >
          {/* right : form fields */}
          <div className="space-y-6 md:col-span-2">
            {/* title */}
            <Input
              label="عنوان"
              type="text"
              nameInput="title"
              register={register("title")}
              error={errors.title?.message}
            />

            {/* date */}
            <Input
              label={"تاریخ"}
              type="date"
              nameInput={"date"}
              register={register("date")}
              error={errors.date?.message}
            />
            {/* priority */}
            <div className="space-y-2 text-default-500  ">
              <p className="pr-3">درجه اهمیت</p>
              <div className="flex gap-x-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="extreme"
                    {...register("priority")}
                    className="w-4 h-4 text-destructive border-destructive rounded-full checked:border-brand checked:bg-destructive/30 border-2 border-default appearance-none"
                  />
                  <span className="select-none ms-2 text-sm font-medium">
                    خیلی مهم
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="moderate"
                    {...register("priority")}
                    className="w-4 h-4 text-info border-info rounded-full checked:border-brand checked:bg-info/30 border-2 border-default appearance-none"
                  />
                  <span className="select-none ms-2 text-sm font-medium">
                    متوسط
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="low"
                    {...register("priority")}
                    className="w-4 h-4 text-primary border-primary rounded-full checked:border-brand checked:bg-primary/30 border-2 border-default appearance-none"
                  />
                  <span className="select-none ms-2 text-sm font-medium">
                    کم اهمیت
                  </span>
                </label>
              </div>
            </div>

            {/* description */}
            <div className="flex flex-col gap-y-2 w-full justify-center items-right text-default-500">
              <label htmlFor="description" className="pr-3 text-md font-bold">
                توضیحات
              </label>
              <textarea
                id="description"
                placeholder="توضیحات مورد نیاز  ..."
                {...register("description")}
                className={`h-44 w-full resize-none px-3  text-md border  text-default-500 placeholder:text-accent-foreground   bg-background rounded-lg shadow read-only:leading-9 read-only:bg-background disabled:cursor-not-allowed disabled:bg-default-200 disabled:opacity-50 transition duration-300  focus:border-primary focus:outline-none  p-3  ${
                  errors.description?.message
                    ? "border-destructive"
                    : "border-default-400"
                }`}
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          {/* left : upload image */}
          <div className="flex flex-col gap-y-2 w-full justify-center items-center text-default-500">
            <label htmlFor="attachFile" className="pr-3 text-md font-bold">
              آپلود عکس
            </label>
            <div className="flex h-44 w-full md:w-44 flex-col items-center justify-center rounded-lg border border-default-400 text-default-500 text-md px-2 bg-background shadow">
              {previewUrl ? (
                // preview image
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={previewUrl}
                  alt="preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-3 text-6xl">
                    <LuImageUp />
                  </div>
                  <p className="text-sm text-default-500">پیش‌نمایش تصویر</p>
                </div>
              )}
            </div>
            <label className="cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              انتخاب فایل
              <input
                id="attachFile"
                type="file"
                accept="image/*"
                className="hidden"
                {...register("attachFile")}
              />
            </label>
            {/* خطای Zod */}
            {errors.attachFile && (
              <p className="text-red-500 text-sm">
                {errors.attachFile.message as string}
              </p>
            )}
            {file && (
              <section className="">
                <ul className="text-left text-destructive text-sm ">
                  <li className="">{file.name}</li>
                  <li>size: {file.size} MB</li>
                </ul>
              </section>
            )}
          </div>

          <div className="w-fit mt-7">
            <SubmitButton
              textButton={"افزودن تسک"}
              bgColor={"success"}
              textColor={"success-foreground"}
              type={"submit"}
            ></SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
