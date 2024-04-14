import { ReactNode } from "react";
import { LeftBar } from "./leftbar";

type LayoutProps = {
  children: ReactNode;
};
export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex bg-gray-100">
      <LeftBar />
      <div className=" flex-1 flex flex-col">
        <div className="h-[50px] border-0 border-b border-gray-200 border-solid bg-white"></div>
        <div className="w-full p-5 flex-1">
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};
