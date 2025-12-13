import { AiOutlineFileDone } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import todolistData from "@/data/todolistData";
import Todo from "./TodoItem";

const TodolistNotCompleted = () => {
  const hasTodos = todolistData && todolistData.length > 0;

  return (
    <div>
      {/* header */}
      <div className="flex mb-6">
        <div className="flex-1 flex gap-x-2 ">
          <span className="text-2xl text-primary">
            <AiOutlineFileDone />
          </span>
          <span className="text-xl">تسک های انجام شده </span>
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
              .filter((todo) => todo.status === "done")
              .slice(0, 3)
              .map((todo) => <Todo key={todo.id} todo={todo} />)
          : "null"}
      </div>
    </div>
  );
};

export default TodolistNotCompleted;
