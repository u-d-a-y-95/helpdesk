"use client";
import { useGetStatus } from "@/hooks/service/status.hook";
import { Table } from "antd";

export const StatusList = () => {
  const { isLoading, isFetching, data: res } = useGetStatus();
  return (
    <Table
      loading={isLoading || isFetching}
      size="small"
      columns={[
        {
          title: "#",
          render: (_text, _record, index) => index + 1,
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
      rowKey={(data) => data.id}
      dataSource={res?.data}
    />
  );
};
