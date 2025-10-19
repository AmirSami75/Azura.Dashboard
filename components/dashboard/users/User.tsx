import { IoIosMore } from "react-icons/io";

import { UserProps } from "@/src/models/users/User";

type UserComponentProps = {
  user: UserProps;
};

const User = ({ user }: UserComponentProps) => {
  return (
    <tr className="hover:bg-gray-50 transition">
      <td className=" px-4 py-2">{user.fullName}</td>
      <td className=" px-4 py-2">{user.roles[0]?.name}</td>
      <td className=" px-4 py-2">{user.email}</td>
      <td className=" px-4 py-2">{user.roles[0]?.title}</td>
      <td
        className=" px-4 py-2 text-left
      "
      >
        <button className="text-2xl font-medium">
          <IoIosMore />
        </button>
      </td>
    </tr>
  );
};

export default User;
