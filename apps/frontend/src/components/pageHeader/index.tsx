import { Button, Input } from "antd";

type PageHeaderProps = {
  title: string;
};

export const PageHeader = ({ title }: PageHeaderProps) => {
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
          <Button type="primary">Create new</Button>
        </div>
      </div>
    </>
  );
};
