import { ButtonProps } from "./index.type";

export const Button = ({ label }: ButtonProps) => {
  return (
    <button className="border border-gray-900 bg-gray-900 px-10 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-gray-900 focus:outline-none focus:ring active:text-gray-900">
      {label}
    </button>
  );
};
