import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../global.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

export default function RootLayout({ children, modal }: RootLayoutProps) {
  console.log(modal);
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#204983",
                colorInfo: "#204983",
                colorTextBase: "#1e293b",
                borderRadius: 0,
              },
              components: {
                Input: {},
                Button: {
                  controlHeight: 45,
                  fontSize: 16,
                  fontWeight: 500,
                },
              },
            }}
          >
            <div>{children}</div>
            {modal}
          </ConfigProvider>
        </AntdRegistry>
        <div id="modal-root" />
      </body>
    </html>
  );
}
