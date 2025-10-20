import { FC } from "react";

interface InputProps {
  label: string;
  type?: string;
  value: string;
  nameInput: string;
  placeHolder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  label,
  type,
  value,
  nameInput,
  placeHolder,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-y-2 w-full justify-center items-right">
      <label htmlFor={nameInput} className="pr-3 ">
        {label}
      </label>
      <input
        type={type}
        value={value}
        id={nameInput}
        placeholder={placeHolder}
        onChange={onChange}
        className="p-2  border-1 border-gray-300 placeholder:text-gray-500 w-full bg-white rounded-lg shadow text-sm "
      />
    </div>
  );
};

export default Input;
