import { Menu } from "antd";
import Link from "next/link";
import { MenuType } from "./index.type";
import { MenuItemType } from "antd/es/menu/hooks/useItems";

const menus = [
  {
    label: "Dashboard",
    url: "/",
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
        url: "/settings/status",
      },
    ],
  },
];

const generateMenu = (menus: MenuType[]): MenuItemType[] => {
  return menus.map((menu) => {
    if (!menu.children) {
      return {
        ...menu,
        label: <Link href={menu.url}>{menu.label}</Link>,
      };
    }
    return {
      ...menu,
      children: generateMenu(menu.children),
    };
  });
};

export const LeftBar = () => {
  return (
    <div className="w-[230px] h-screen border-gray-200 border-0 border-r border-solid bg-white">
      <div className="text-center text-primary font-bold text-2xl my-2 tracking-wider">
        iHelpDesk
      </div>
      <Menu mode="inline" items={generateMenu(menus)}></Menu>
    </div>
  );
};
