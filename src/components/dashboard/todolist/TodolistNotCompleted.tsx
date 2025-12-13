import { MdOutlinePendingActions } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import todolistData from "@/data/todolistData";
import Todo from "./TodoItem";

const TodolistNotCompleted = () => {
  const hasTodos = todolistData && todolistData.length > 0 && todolistData;

  return (
    <div>
      {/* header */}
      <div className="flex mb-6">
        <div className="flex-1 flex gap-x-2 ">
          <span className="text-2xl text-primary">
            <MdOutlinePendingActions className="" />
          </span>
          <span className="text-xl">تسک ها</span>
        </div>
        <div className="text-primary flex gap-x1 items-center">
          <span>
            <GoDotFill />
          </span>
          <span>امروز</span>
        </div>
      </div>
      {/* tasks */}
      <div className="px-3">
        {hasTodos
          ? todolistData
              .filter((todo) => todo.status !== "done")
              .slice(0, 4)
              .map((todo) => <Todo key={todo.id} todo={todo} />)
          : "null"}
      </div>
    </div>
  );
};

export default TodolistNotCompleted;
