import { PageHeader } from "@/components/pageHeader";
import { StatusList } from "./statusList";

export const Status = () => {
  return (
    <>
      <PageHeader title="Status" link="./status/add" create />
      <StatusList />
    </>
  );
};
