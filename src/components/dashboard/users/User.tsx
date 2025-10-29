import { IoIosMore } from "react-icons/io";

import { UserProps } from "@/models/users/User";
import { TbLock } from "react-icons/tb";
import { TbLockOpen2 } from "react-icons/tb";
import { CiRead } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

type UserComponentProps = {
  user: UserProps;
};

const User = ({ user }: UserComponentProps) => {
  return (
    <tr className="hover:bg-gray-50 transition bg-primary">
      <td className=" px-4 py-2">{user.fullName}</td>
      <td className=" px-4 py-2">{user.roles[0]?.name}</td>
      <td className=" px-4 py-2">{user.roles[0]?.title}</td>
      <td className=" px-auto py-2 text-xl text-center ">
        {user.isActive ? <TbLockOpen2 /> : <TbLock />}
      </td>
      <td className=" flex justify-center ">
        <Button asChild size="icon" className="rounded-full">
          <Link href={"/users/read"}>
            <CiRead />
          </Link>
        </Button>

        <Button asChild size="icon" className="rounded-full">
          <Link href="/users/edit">
            <CiEdit />
          </Link>
        </Button>

        <Button size="icon" className="rounded-full">
          <CiCircleRemove />
        </Button>
        <Button className="rounded-full" variant="outline">
          Default
        </Button>
        <Button color="secondary" variant="outline" className="rounded-full">
          Secondary
        </Button>
        <Button color="success" variant="outline" className="rounded-full">
          Success
        </Button>
        <Button color="info" variant="outline" className="rounded-full">
          Info
        </Button>
        <Button color="warning" variant="outline" className="rounded-full">
          Warning
        </Button>
        <Button color="destructive" variant="outline" className="rounded-full">
          Danger
        </Button>
      </td>
    </tr>
  );
};

export default User;
