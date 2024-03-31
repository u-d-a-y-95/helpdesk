import { Button, Input } from "antd";

export default function SignPage() {
  return (
    <div className="h-screen flex justify-center items-center  m-0">
      <div className="w-[500px] border border-solid border-gray-300 px-8 py-16 ">
        <div className="text-center mb-10">
          <h1 className="text-2xl my-0 text-primary">Welcome Back !</h1>
          <p className="text-gray-400 my-0">Sign in to continue.</p>
        </div>
        <form className="flex flex-col gap-6">
          <div>
            <label className=" block text-sm text-gray-400 mb-1">
              Email Address
            </label>
            <Input placeholder="Enter your email" size="large" />
          </div>
          <div>
            <label className=" block text-sm text mb-1">Password</label>
            <Input placeholder="Enter your password" size="large" />
          </div>

          <Button type="primary">Sign in</Button>
        </form>
      </div>
    </div>
  );
}
