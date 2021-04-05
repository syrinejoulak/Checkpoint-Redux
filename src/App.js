import "./App.css";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";
import { useState } from "react";

function App() {
  let [filterValue, setFilterValue] = useState("all");

  return (
    <div className="todo-app">
      <h1>What's the plan?</h1>
      <div className="top-app">
        <AddTask />
        <select
          name="todos"
          className="filter-todo"
          onChange={(e) => {
            console.log("filterChange", e.target.value);
            setFilterValue(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <TaskList filterValue={filterValue} />
    </div>
  );
}

export default App;
