import { InputProps } from "./index.type";

export const Input = ({
  type,
  name,
  value,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      className="border p-2 py-2 w-full border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-gray-400"
      onChange={onChange}
      value={value}
    />
  );
};
