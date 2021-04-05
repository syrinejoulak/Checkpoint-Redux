import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  COMPLETE_TODO,
} from "./ActionType";
import { initialState } from "./states";

export const reducer = (state = initialState, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state.todos];
      newTodos.push(action.payload);
      return { ...state, todos: newTodos };
    case DELETE_TODO:
      newTodos = [...state.todos];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload.id);
      return { ...state, todos: newTodos };
    case COMPLETE_TODO:
      newTodos = [...state.todos];
      newTodos = newTodos.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: !item.completed }
          : item
      );
      return { ...state, todos: newTodos };
    case UPDATE_TODO:
      newTodos = state.todos.map((item) =>
        item.id === action.payload.id
          ? { ...item, name: action.payload.updatedName }
          : item
      );
      return { ...state, todos: newTodos };

    default:
      return state;
  }
};
