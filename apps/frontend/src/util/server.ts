import { cookies } from "next/headers";
export const serverHttp = async (url: string, method: string) => {
  return (
    await fetch(`http://localhost:3000/api/${url}`, {
      headers: {
        cookie: cookies().toString(),
      },
    })
  ).json();
};
