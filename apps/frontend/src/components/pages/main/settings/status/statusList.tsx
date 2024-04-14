import { Table } from "antd";
import { cookies } from "next/headers";

export const StatusList = async () => {
  const res = await (
    await fetch("http://localhost:3000/api/settings/status", {
      headers: { Cookie: cookies().toString() },
    })
  ).json();

  return (
    <Table
      size="small"
      columns={[
        {
          title: "#",
          key: "#",
          dataIndex: "count",
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
      dataSource={res.data}
    />
  );
};
