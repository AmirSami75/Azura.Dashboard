"use client";

import { LuImageUp } from "react-icons/lu";
import Image from "next/image";

import Input from "@/components/ui/Input";
const AddTask = () => {
  return (
    <div className="container">
      <div className="border-b-2 border-destructive font-bold w-fit mb-8 py-1 mx-auto">
        افزودن تسک جدید
      </div>
      {/* card */}
      <div className="border border-default-400 p-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  items-end ">
          {/* right : form fields */}
          <div className="space-y-6 md:col-span-2">
            {/* title */}
            <Input label={"عنوان"} type="text" nameInput={"title"} />
            {/* date */}
            <Input label={"تاریخ"} type="date" nameInput={"title"} />
            {/* priority */}
            <div className="space-y-2 text-default-500  ">
              <p className="pr-3">درجه اهمیت</p>
              <div className="flex gap-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="extrime"
                    value="extrime"
                    name="extrime"
                    className="w-4 h-4 text-destructive border-destructive rounded-full checked:border-brand focus:bg-destructive/30 border-2 border-default appearance-none "
                  />
                  <label
                    htmlFor="extrime"
                    className="select-none ms-2 text-sm font-medium"
                  >
                    خیلی مهم{" "}
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    type="radio"
                    id="moderate"
                    value="moderate"
                    name="moderate"
                    className="w-4 h-4 text-info border-info rounded-full checked:border-brand focus:bg-info/30 border-2 border-default appearance-none "
                  />
                  <label
                    htmlFor="moderate"
                    className="select-none ms-2 text-sm font-medium"
                  >
                    مهم
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    type="radio"
                    id="low"
                    value="low"
                    name="low"
                    className="w-4 h-4 text-primary border-primary rounded-full checked:border-brand focus:bg-primary/30 border-2 border-default appearance-none"
                  />
                  <label
                    htmlFor="low"
                    className="select-none ms-2 text-sm font-medium"
                  >
                    کم اهمیت
                  </label>
                </div>
              </div>
            </div>
            {/* description */}
            <div className="flex flex-col gap-y-2 w-full justify-center items-right text-default-500">
              <label htmlFor="description" className="pr-3 text-md font-bold">
                توضیحات
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="توضیحات مورد نیاز  ..."
                className="h-44 w-full resize-none px-3  text-md border  text-default-500 placeholder:text-accent-foreground   bg-background rounded-lg shadow read-only:leading-9 read-only:bg-background disabled:cursor-not-allowed disabled:bg-default-200 disabled:opacity-50 transition duration-300  focus:border-primary focus:outline-none border-default-400 p-3"
              ></textarea>
            </div>
          </div>
          {/* left : upload image */}
          <div className="flex flex-col gap-y-2 w-full justify-center items-center text-default-500">
            <label htmlFor="attachFile" className="pr-3 text-md font-bold">
              آپلود عکس
            </label>
            <div className="flex h-44 w-full md:w-44 flex-col items-center justify-center rounded-lg border border-default-400 text-default-500 text-md px-2 bg-background shadow">
              <div className="mb-4 text-6xl">
                <LuImageUp />
              </div>
              <label className="cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
                فایل ها
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
