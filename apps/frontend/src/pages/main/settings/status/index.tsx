import { Button } from "../../../../components/core/button";

export const StatusPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-gray-200 p-2">
        <h1 className="text-lg capitalize font-bold">status</h1>
        <Button label="Add" />
      </div>
      <div>
        <div></div>
        <div>
          <table className="table table-auto w-full">
            <thead className="table-row bg-gray-800 text-white">
              <th className="border table-cell py-2">#</th>
              <th className="border table-cell py-2">Name</th>
              <th className="border py-2 ">Slug</th>
              <th className="border py-2 ">Action</th>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};
