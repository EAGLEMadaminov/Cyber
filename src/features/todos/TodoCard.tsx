import React from "react";

type Todo = {
  todo: string;
  completed: boolean;
};
const TodosCard = ({ todo }: { todo: Todo }) => {
  return (
    <div className="w-[200px] shadow-lg p-3 rounded-lg">
      <p className="p-2">{todo.todo}</p>
      <p className="p-2">
        Iscomplete <span>{todo.completed ? "Yes" : "No"}</span>
      </p>
    </div>
  );
};

export default TodosCard;
