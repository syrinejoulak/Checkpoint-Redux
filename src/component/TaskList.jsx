import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const TaskList = ({ filterValue }) => {
  const todos = useSelector((state) => state.todos);

  console.log("listTodosFiltered", todos);

  return (
    <div>
      {todos
        .filter((element) => {
          switch (filterValue) {
            case "completed":
              return element.completed === true;
            case "uncompleted":
              return element.completed === false;
            default:
              return element;
          }
        })
        .map((todo) => {
          return <Task key={todo.id} todo={todo} />;
        })}
    </div>
  );
};

export default TaskList;
