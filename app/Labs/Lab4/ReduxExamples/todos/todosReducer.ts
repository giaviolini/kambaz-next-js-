import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  title: string;
}

interface TodosState {
  todos: Todo[];
  todo: Todo;
}

const initialState: TodosState = {
  todos: [],
  todo: { id: "0", title: "" },
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        ...action.payload,
        id: new Date().getTime().toString(),
      };
      state.todos = [...state.todos, newTodo];
      state.todo = { id: "0", title: "" }; // Reset with id
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      state.todo = { id: "0", title: "" }; // Reset with id
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;