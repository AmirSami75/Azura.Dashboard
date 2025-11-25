import { TbLock } from "react-icons/tb";
import { CiRead } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { TbLockOpen2 } from "react-icons/tb";
import { CiCircleRemove } from "react-icons/ci";

import Link from "next/link";
import { useRouter } from "next/navigation";

import useAuthStore from "@/store/auth-store";
import { UserProps } from "@/models/users/User";
import { Button } from "@/components/ui/Button";
import { deleteUserService } from "@/app/api/auth/user";
import { Span } from "next/dist/trace";

type UserComponentProps = {
  user: UserProps;
};

const User = ({ user }: UserComponentProps) => {
  const token = useAuthStore((state) => state.token);

  const router = useRouter();

  const handleDeleteUser = async (id: string) => {
    try {
      if (token) {
        const res = await deleteUserService(token, id);
        router.refresh();
        if (!res.isSuccess) {
          console.error("delete failed");
        }
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <tr className="group hover:bg-gray-100 transition bg-primary-foreground ">
      <td className=" px-4 py-4">{user.fullName}</td>
      <td className=" px-4 py-4">{user.roles[0]?.name}</td>
      <td className=" px-4 py-4">{user.roles[0]?.title}</td>
      <td className="text-xl">
        <span className="flex justify-center">
          {user.isActive ? (
            <span className="text-secondary">
              <TbLockOpen2 />
            </span>
          ) : (
            <span className="text-destructive">
              <TbLock />
            </span>
          )}
        </span>
      </td>
      <td className=" flex justify-center gap-x-2 mt-2 ">
        {/* <Button
          asChild
          title="مشاهده کاربر"
          size="icon"
          className="rounded-full text-2xl"
          color="warning"
        >
          <Link href={`/dashboard/users/${user.id}/read`}>
            <CiRead />
          </Link>
        </Button> */}

        <Button
          asChild
          title="ویرایش کاربر"
          size="icon"
          className="rounded-full text-2xl"
          color="secondary"
        >
          <Link href={`/dashboard/users/${user.id}/edit`}>
            <CiEdit />
          </Link>
        </Button>

        <Button
          onClick={() => handleDeleteUser(user.id)}
          title="حذف کاربر"
          size="icon"
          className="rounded-full text-2xl"
          color="destructive"
        >
          <CiCircleRemove />
        </Button>
      </td>
    </tr>
  );
};

export default User;
