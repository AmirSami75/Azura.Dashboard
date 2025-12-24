import { Button } from "@/components/ui/Button";
import TodolistNotCompleted from "@/components/dashboard/todolist/TodolistNotCompleted";
import TodolistCompleted from "@/components/dashboard/todolist/TodolistCompleted";
import Link from "next/link";

const Todolist = () => {
  return (
    <div className="grid grid-cols-2 grid-row-4 gap-4">
      {/* top container */}
      <div className="container col-span-2">
        <div className=" flex flex-row items-center">
          <h3 className="text-xl lg:text-2xl font-medium flex-1 pr-2 mb-0 ">
            مدیریت تسک ها
          </h3>
          <Button
            size="xl"
            color="success"
            variant="outline"
            className=" rounded-xl"
          >
            <Link href="/dashboard/to-do/addTask">افزودن تسک جدید</Link>
          </Button>
        </div>
      </div>
      {/* right container */}
      <div className="container row-span-3">
        <div className="">
          <TodolistNotCompleted />
        </div>
      </div>
      {/* left top container */}
      <div className="container">
        <div className="overflow-x-auto">hi 2</div>
      </div>
      {/* left buttom container */}
      <div className="container row-span-2">
        <div className="overflow-x-auto">
          <TodolistCompleted />
        </div>
      </div>
    </div>
  );
};

export default Todolist;
