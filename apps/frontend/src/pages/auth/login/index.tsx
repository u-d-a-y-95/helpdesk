import { Controller, useForm } from "react-hook-form";
import { Button } from "../../../components/core/button";
import { FormInput } from "../../../components/core/form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const LoginPage = () => {
  const {
    control,

    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(
      z.object({
        email: z.string().email({ message: "Please enter a valid email" }),
      })
    ),
  });

  const submitHandler = (values) => {
    console.log(values);
  };
  return (
    <section className="bg-transparent">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"></section>
        <div className="col-span-6 flex items-center justify-center ">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className=" w-3/5 flex flex-col gap-5"
          >
            <Controller
              name="email"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormInput
                  name="email"
                  type="text"
                  label="Email"
                  placeholder="Enter a email"
                  onChange={onChange}
                  value={value}
                  error={error}
                />
              )}
            />
            <FormInput name="password" type="password" label="Password" />

            <div className="flex justify-end">
              <Button label="Login" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
