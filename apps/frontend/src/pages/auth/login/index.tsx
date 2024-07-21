import { Controller, useForm } from "react-hook-form";
import { Button } from "../../../components/core/button";
import { FormInput } from "../../../components/core/form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { login } from "../../../services/auth.service";
import { useDispatcher, useSelecteor } from "../../../state";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const state = useSelecteor((state) => state);
  const dispatcher = useDispatcher((state) => state);
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(
      z.object({
        email: z
          .string()
          .min(1, "Email can't be empty")
          .email({ message: "Please enter a valid email" }),
        password: z.string().min(1, "Password can not be empty"),
      })
    ),
  });

  const submitHandler = async (values) => {
    const res = await login(values);
    if (res.data.statusCode === 200) {
      dispatcher.auth.setLogin({
        token: res.data.data.token,
      });
      navigate("/");
    }
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
            <Controller
              name="password"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  onChange={onChange}
                  value={value}
                  error={error}
                />
              )}
            />

            <div className="flex justify-end">
              <Button label="Login" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
