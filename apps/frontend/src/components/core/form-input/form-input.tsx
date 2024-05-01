import { Input } from "../input";
import { FromInputProps } from "./index.type";

export const FormInput = ({ label, type, name }: FromInputProps) => {
  return (
    <div className="">
      <label htmlFor={name} className="block text-sm font-medium text-gray-500">
        {label}
      </label>
      <div className="mt-2">
        <Input type={type} name={name} />
      </div>
    </div>
  );
};
