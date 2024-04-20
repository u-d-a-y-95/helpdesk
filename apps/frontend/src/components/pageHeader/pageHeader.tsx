import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import Link from "next/link";
import { PageHeaderProps } from "./index.type";

export const PageHeader = ({ title, link, create, back }: PageHeaderProps) => {
  return (
    <div className="min-h-10 border-solid border border-gray-300  flex justify-between items-center p-3 font-semibold text-primary bg-white mb-5">
      <h2>{title}</h2>

      <Link href={link} passHref>
        {create && <Button type="primary">Create new</Button>}
        {back && <Button icon={<ArrowLeftOutlined />}></Button>}
      </Link>
    </div>
  );
};
