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
      <label htmlFor={nameInput} className="pr-3 ">
        {label}
      </label>
      <input
        type={type}
        id={nameInput}
        placeholder={placeHolder}
        {...register}
        className={`p-2 border-1 placeholder:text-gray-500 w-full bg-white rounded-lg shadow text-sm focus-visible:border-gray-400 focus-visible:outline-none ${
          error ? "border-red-500" : "border-gray-300 "
        }`}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
