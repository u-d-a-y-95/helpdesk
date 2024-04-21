import { MainLayout } from "@/components/layout/main";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <MainLayout>{children}</MainLayout>
    </div>
  );
}
