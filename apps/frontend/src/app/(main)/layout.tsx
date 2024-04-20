import { MainLayout } from "@/components/layout/main";
import { QueryProvider } from "@/state/react-query";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <QueryProvider>
        <MainLayout>{children}</MainLayout>
      </QueryProvider>
    </div>
  );
}
