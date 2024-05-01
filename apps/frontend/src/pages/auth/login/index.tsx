import { Button } from "../../../components/core/button";
import { FormInput } from "../../../components/core/form-input";

export const LoginPage = () => {
  return (
    <section className="bg-transparent">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"></section>
        <div className="col-span-6 flex items-center justify-center ">
          <form className=" w-3/5 flex flex-col gap-5">
            <FormInput name="email" type="email" label="Email" />
            <FormInput name="password" type="password" label="Password" />

            <div className="flex justify-end">
              <Button label="Login" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
