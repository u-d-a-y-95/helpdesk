"use client";
import { Button, Input } from "antd";
import { signIn } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";

const defaultValues = {
  email: "",
  password: "",
};

export const SignPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues,
  });

  const submitHandler = (values: typeof defaultValues) => {
    signIn("credentials", {
      redirect: false,
      ...values,
    });
  };

  return (
    <div className="h-screen flex justify-center items-center  m-0">
      <div className="w-[500px] border border-solid border-gray-300 px-8 py-16 ">
        <div className="text-center mb-10">
          <h1 className="text-2xl my-0 text-primary">Welcome Back !</h1>
          <p className="text-gray-400 my-0">Sign in to continue.</p>
        </div>
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(submitHandler)}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <div>
                <label className=" block text-sm text-gray-400 mb-1">
                  Email Address
                </label>
                <Input placeholder="Enter your email" size="large" {...field} />
              </div>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <div>
                <label className=" block text-sm text mb-1">Password</label>
                <Input
                  placeholder="Enter your password"
                  size="large"
                  {...field}
                />
              </div>
            )}
          />

          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};
