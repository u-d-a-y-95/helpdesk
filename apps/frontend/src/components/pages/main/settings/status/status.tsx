import { PageHeader } from "@/components/pageHeader";
import { StatusList } from "./statusList";

export const Status = () => {
  return (
    <div>
      <PageHeader title="Status" createLink="./status/add" />
      <div className="mt-5">
        <StatusList />
      </div>
    </div>
  );
};
