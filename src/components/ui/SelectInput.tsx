import { FC } from "react";
import { Controller } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};

type SelectInputProps = {
  control: any;
  name: string;
  label: string;
  options: Option[];
  // برای امکان انتحاب چند گزینه
  multiple?: boolean;
  error?: string;
};

const SelectInput: FC<SelectInputProps> = ({
  control,
  name,
  label,
  options,
  multiple = false,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-gray-700 pr-2 font-medium">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            {...field}
            multiple={multiple}
            className="border rounded-lg px-3 py-2"
            onChange={(e) => {
              multiple
                ? field.onChange(
                    Array.from(e.target.selectedOptions, (o: any) => o.value)
                  )
                : field.onChange(e.target.value);
            }}
          >
            {!multiple && <option value="">انتخاب کنید</option>}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default SelectInput;
