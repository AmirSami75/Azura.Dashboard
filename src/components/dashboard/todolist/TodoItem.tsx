"use client";

import { todoItemProps } from "@/models/todolist/todo";
import { useUIstore } from "@/store/ui-store";
import { IoIosMore } from "react-icons/io";

type todoProps = {
  todo: todoItemProps;
};

const Todo = ({ todo }: todoProps) => {
  const toggleStatus = useUIstore((state) => state.toggleStatus);
  const status = useUIstore((state) => state.status);
  console.log(status);

  const fullFormattedDate = todo.date?.toLocaleString("fa-IR");
  const formattedDate = fullFormattedDate?.split(",")[0];
  // console.log(formattedDate);

  const priorityColor =
    todo.priority === "extrime"
      ? "destructive"
      : todo.priority === "moderate"
      ? "info"
      : "primary";

  const statusColor =
    todo.status === "not Started"
      ? "border-destructive "
      : todo.status === "in progress"
      ? "border-info "
      : "border-success ";

  return (
    <article className={`container relative my-3 border ${statusColor} `}>
      {/* icons and title */}
      <button
        onClick={toggleStatus}
        className={`absolute top-6 right-1 lg:right-2  p-1.5 border-2 ${statusColor} rounded-full   `}
      ></button>
      <div className="absolute top-2 left-2 ">
        <IoIosMore />
      </div>
      {/* content */}
      <div className=" px-1  lg:px-3">
        <div className="flex items-center gap-x-2 2xl:gap-x-5">
          <div className="flex-3/4">
            <h3 className="font-semibold 2xl:text-xl ">{todo.title}</h3>
            <p className="text-sm my-2 line-clamp-3 2xl:line-clamp-5 text-muted-foreground">
              {todo.description}
            </p>
          </div>
          <div className="flex-1/4">
            <img src={todo.image} alt={todo.title} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2 text-xs">
            <span>شدت اهمیت:</span>
            <span className={`text-${priorityColor}`}>{todo.priority}</span>
          </div>
          <p className="text-xs ">{formattedDate}</p>
        </div>
      </div>
    </article>
  );
};

export default Todo;
