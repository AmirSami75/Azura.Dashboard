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
        to: "/dashboard/users",
      },
      {
        label: "اضافه کردن کاربر",
        to: "/dashboard/users/adduser",
      },
    ],
  },
  {
    label: "مدیریت تسک ها ",
    to: "/dashboard/to-do",
    children: [
      {
        label: "تسک ها ",
        to: "/dashboard/to-do/list",
      },
      {
        label: "افزودن تسک",
        to: "/dashboard/to-do/addTask",
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
];

export default menuData;
