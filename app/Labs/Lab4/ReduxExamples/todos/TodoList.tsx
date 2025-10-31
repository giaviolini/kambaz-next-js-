import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import type { Todo } from "./todosReducer";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import type { RootState } from "../../../store";
export default function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup>
      <TodoForm />
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ListGroup><hr/>
</div>);}