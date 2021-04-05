import React from "react";
import { addTodo } from "../redux/Action";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <form className="todo-form">
        <input
          type="text"
          placeholder="Add a todo"
          name="text"
          value={todo}
          className="todo-input"
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button
          className="todo-button"
          onClick={(e) =>
            {
              e.preventDefault();
              dispatch(
              addTodo({
                name: todo,
                id: Math.floor(Math.random() * 10000),
                completed: false,
              })
              
            );
            setTodo("")
          
          }
            
          }
        >
          Add todo
        </button>
      </form>
    </div>
  );
};

export default AddTask;
