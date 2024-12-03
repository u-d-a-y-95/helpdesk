import { useEffect } from "react";
import { useSelecteor } from "../../state";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const routes = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Ticket",
    path: "/dashboard",
  },
  {
    label: "Customer",
    path: "/dashboard",
  },
  {
    label: "HR",
    path: null,
    children: [
      {
        label: "Role",
        path: "/hr/role",
      },
      {
        label: "Deparment",
        path: "/settings/department",
      },
      {
        label: "Employee",
        path: "/settings/department",
      },
    ],
  },
  {
    label: "Settings",
    path: null,
    children: [
      {
        label: "Status",
        path: "/settings/status",
      },
      {
        label: "Priority",
        path: "/settings/priority",
      },
    ],
  },
];

const getNavbar = (routes, level) => {
  return routes.map((item, index) => {
    if (!item.children)
      return (
        <div className={`text-gray-400 px-${level * 4} py-2`}>
          <NavLink to={item.path}>{item.label}</NavLink>
        </div>
      );
    return (
      <div className="">
        <div className={`text-gray-400 px-${level * 4} py-2`}>{item.label}</div>
        <div className="">{getNavbar(item.children, level + 1)}</div>
      </div>
    );
  });
};

export const Main = () => {
  const navigate = useNavigate();
  const { isLogged } = useSelecteor((state) => state.auth);

  useEffect(() => {
    if (!isLogged) {
      navigate("/auth/login");
    }
  }, [isLogged, navigate]);

  return (
    <div className="flex">
      <aside className="w-72 bg-gray-800 h-screen shadow">
        <div className="text-white flex justify-center items-center h-14 text-lg bolder tracking-wider">
          HelpDesk
        </div>
        <div className="">{getNavbar(routes, 1)}</div>
      </aside>
      <section className="flex-1 flex flex-col">
        <header className="bg-gray-800 h-14">header</header>
        <main className="m-4 shadow flex-1">
          <Outlet />
        </main>
      </section>
    </div>
  );
};
