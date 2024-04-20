import { Button } from "antd";
import { formHeaderProps } from "./index.type";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";

export const FormHeader = ({ title }: formHeaderProps) => {
  return (
    <div className="min-h-10 border-solid border-0 border-b border-gray-300  flex justify-between items-center p-3 font-semibold text-primary">
      <h2>{title}</h2>
      <Link href={"/status"}>Crearte</Link>
      <Button icon={<ArrowLeftOutlined />}></Button>
    </div>
  );
};
