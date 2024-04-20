import { Input } from "antd";
import { formProps } from "./index.type";
import { FormHeader } from "./formHeader";
import { FormFooter } from "./formFooter";
import { PageHeader } from "../pageHeader";

export const Form = ({ title }: formProps) => {
  return (
    <div>
      <PageHeader title={title} link="." back />
      <div className="border border-solid border-gray-300 bg-white">
        <div className="grid grid-cols-4 p-3 min-h-32">
          <div>
            <label className=" block text-sm text-gray-400 mb-1">Name</label>
            <Input placeholder="Enter your status name" />
          </div>
        </div>
        <FormFooter />
      </div>
    </div>
  );
};
