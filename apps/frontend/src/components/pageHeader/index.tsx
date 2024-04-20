import { Button, Input } from "antd";
import Link from "next/link";

type PageHeaderProps = {
  title: string;
  createLink: string;
};

export const PageHeader = ({ title, createLink }: PageHeaderProps) => {
  return (
    <>
      <div className="">
        <div className="text-priamry mb-5 font-bold">{title}</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex w-[400px] items-center justify-start text-priamry font-bold">
          <Input className="" />
          <Button type="text">Reset</Button>
        </div>
        <div>
          <Link href={createLink}>Create new</Link>
          <Button type="primary"></Button>
        </div>
      </div>
    </>
  );
};
