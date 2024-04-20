import { Button } from "antd";

export const FormFooter = () => {
  return (
    <div className="border-solid border-0 border-t border-gray-300 flex justify-end gap-2 p-2 bg-slate-100 ">
      <Button>Reset</Button>
      <Button type="primary">Save</Button>
    </div>
  );
};
