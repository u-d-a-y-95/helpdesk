export type MenuType = {
  label: string;
  key: string;
  url: string;
  children?: MenuType[];
};
