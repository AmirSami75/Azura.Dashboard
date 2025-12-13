import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  type?: string;
  nameInput: string;
  placeHolder?: string;
  register?: UseFormRegisterReturn;
  error?: string;
}

const Input: FC<InputProps> = ({
  label,
  type = "text",
  nameInput,
  placeHolder,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col gap-y-2 w-full justify-center items-right">
      <label
        htmlFor={nameInput}
        className="pr-3 text-md font-bold text-default-500 "
      >
        {label}
      </label>
      <input
        type={type}
        id={nameInput}
        placeholder={placeHolder}
        {...register}
        className={` px-3 h-11 text-md border  text-default-500 placeholder:text-accent-foreground  w-full bg-background rounded-lg shadow read-only:leading-9 read-only:bg-background disabled:cursor-not-allowed disabled:bg-default-200 disabled:opacity-50 transition duration-300  focus:border-primary focus:outline-none ${
          error ? "border-destructive" : "border-default-400"
        }`}
      />
      {error && <p className="text-sm text-destructive mt-1">{error}</p>}
    </div>
  );
};

export default Input;
