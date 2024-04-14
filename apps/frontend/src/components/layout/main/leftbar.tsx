import Menu from "antd/es/menu";

import MenuItem from "antd/es/menu/MenuItem";
import SubMenu from "antd/es/menu/SubMenu";
import Link from "next/link";
import { MenuType } from "./index.type";

const menus = [
  {
    label: "Dashboard",
    url: "",
    key: "dashboard",
  },
  {
    label: "Settings",
    key: "s",
    url: "",
    children: [
      {
        label: "status",
        key: "",
        url: "settings/status",
      },
    ],
  },
];

const renderMenu = (menu: MenuType) => {
  if (!menu.children)
    return (
      <MenuItem>
        <Link href={menu.url}>{menu.label}</Link>
      </MenuItem>
    );
  return <SubMenu title={menu.label}>{generateMenu(menu.children)}</SubMenu>;
};

const generateMenu = (menus: MenuType[]) => {
  return (
    <>
      {menus.map((menu) => (
        <>{renderMenu(menu)}</>
      ))}
    </>
  );
};

export const LeftBar = () => {
  return (
    <div className="w-[230px] h-screen border-gray-200 border-0 border-r border-solid bg-white">
      <div className="text-center text-primary font-bold text-2xl my-2 tracking-wider">
        iHelpDesk
      </div>
      <Menu mode="inline">{generateMenu(menus)}</Menu>
    </div>
  );
};
