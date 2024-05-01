import { Input } from "../input";
import { FromInputProps } from "./index.type";

export const FormInput = ({
  label,
  type,
  name,
  onChange,
  error,
  value,
  placeholder,
}: FromInputProps) => {
  return (
    <div className="">
      <label htmlFor={name} className="block text-sm font-medium text-gray-500">
        {label}
      </label>
      <div className="mt-2">
        <Input
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
      {error?.message && (
        <span className="text-rose-500 text-sm">*{error?.message}</span>
      )}
    </div>
  );
};
