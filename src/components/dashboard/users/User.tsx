import { UserProps } from "@/models/users/User";
import { TbLock } from "react-icons/tb";
import { TbLockOpen2 } from "react-icons/tb";
import { CiRead } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteUserService } from "@/app/api/auth/auth";

type UserComponentProps = {
  user: UserProps;
};

const User = ({ user }: UserComponentProps) => {
  const [token, setToken] = useState("");

  const handleDeleteUser = async (id: string) => {
    const res = await deleteUserService(token, id);
    console.log(res);
  };

  // برای دریافت توکن از کوکی در زمان ورود به صفحه
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("../../api/auth/get-token", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        // console.log(data);
        const jwtToken = data.token;
        setToken(jwtToken);
      } catch (err: any) {
        console.log("خطا در بررسی توکن :", err.message);
      }
    };
    checkAuth();
  }, []);

  return (
    <tr className="group hover:bg-gray-100 transition bg-primary-foreground ">
      <td className=" px-4 py-3">{user.fullName}</td>
      <td className=" px-4 py-3">{user.roles[0]?.name}</td>
      <td className=" px-4 py-3">{user.roles[0]?.title}</td>
      <td className="text-xl">
        <span className="flex justify-center">
          {user.isActive ? <TbLockOpen2 /> : <TbLock />}
        </span>
      </td>
      <td className=" flex justify-center ">
        <Button asChild size="icon" className="rounded-full text-2xl">
          <Link href={"/users/read"}>
            <CiRead />
          </Link>
        </Button>

        <Button asChild size="icon" className="rounded-full text-2xl">
          <Link href="/users/edit">
            <CiEdit />
          </Link>
        </Button>

        <Button
          onClick={() => handleDeleteUser(user.id)}
          size="icon"
          className="rounded-full text-2xl"
        >
          <CiCircleRemove />
        </Button>
      </td>
    </tr>
  );
};

export default User;
