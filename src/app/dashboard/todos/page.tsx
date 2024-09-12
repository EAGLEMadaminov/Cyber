"use client";
import React, { useState, useEffect } from "react";
import { getAllTodos } from "../../../services/todos";
import TodoCard from "../../../features/todos/TodoCard";
import { Todo } from "../../../types/todos";

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getTodos() {
      try {
        const data = await getAllTodos();
        if (data) {
          setTodos(data.todos);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getTodos();
  }, []);
  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl font-semibold">Todos</h1>
      <div className="ml-10 mt-10 flex flex-wrap gap-3">
        {todos.map((todo) => {
          return <TodoCard todo={todo} key={todo.id} />;
        })}
      </div>
    </div>
  );
};

export default Todos;
