export interface MenuDataProps {
  label: string;
  to: string;
  children?: MenuDataProps[];
}

const menuData: MenuDataProps[] = [
  {
    label: "داشبورد",
    to: "/dashboard",
  },
  {
    label: "مدیریت کاربران",
    to: "",
    children: [
      {
        label: "کاربران",
        to: "dashboard/users",
      },
      {
        label: "اضافه کردن کاربر",
        to: "/users/add",
      },
      {
        label: "تنظیمات",
        to: "/users/settings",
        children: [
          {
            label: "شخصی",
            to: "/users/settings/profile",
          },
          {
            label: "حریم شخصی",
            to: "/users/settings/privacy",
          },
        ],
      },
    ],
  },
  {
    label: "تنظیمات",
    to: "/settings",
    children: [
      {
        label: "عمومی",
        to: "/settings/general",
      },
      {
        label: "ظاهری",
        to: "/settings/appearance",
      },
    ],
  },
  {
    label: "گزارشات",
    to: "/reports",
    children: [
      {
        label: "گزرشات فروش",
        to: "/reports/sales",
      },
      {
        label: "گزارشات کاربران",
        to: "/reports/users",
      },
    ],
  },
];

export default menuData;
