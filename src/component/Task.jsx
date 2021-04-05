import React from "react";
import { TiEdit } from "react-icons/ti";
import { BiCheckCircle, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo, updateTodo } from "../redux/Action";
import { useState } from "react";

const Task = ({ todo }) => {
  const [editTodo, seteditTodo] = useState(false);

  const dispatch = useDispatch();
  return (
    <div className={`todo-row ${todo.completed ? "completed" : ""}`}>
      <div className="todo-text">
        {editTodo ? (
          <input
            type="text"
            value={todo.name}
            onChange={(e) =>
              dispatch(updateTodo({ ...todo, updatedName: e.target.value }))
            }
          />
        ) : (
          <h3>{todo.name}</h3>
        )}
      </div>
      <div className="icons"></div>
      <BiCheckCircle
        className="check-icon"
        onClick={() => dispatch(completeTodo(todo))}
      />
      <TiEdit
        className="edit-icon"
        onClick={() => {
          seteditTodo(!editTodo);
        }}
      />
      <BiTrash
        className="delete-icon"
        onClick={() => dispatch(deleteTodo(todo))}
      />
    </div>
  );
};

export default Task;
