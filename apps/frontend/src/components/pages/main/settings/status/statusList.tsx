"use server";
import { serverHttp } from "@/util/server";
import { Table } from "antd";

export const StatusList = async () => {
  const res = await serverHttp("/settings/status", "get");
  console.log(res);
  return (
    <Table
      size="small"
      columns={[
        {
          title: "#",
        },
        {
          title: "Name",
          key: "#",
          dataIndex: "name",
        },
        {
          title: "Slug",
          key: "slug",
          dataIndex: "slug",
        },
        {
          title: "Actions",
          key: "#",
        },
      ]}
    ></Table>
  );
};
