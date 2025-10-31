import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({todo} : { todo: Todo }) {
    
    const dispatch = useDispatch();
    return (
        <ListGroup.Item>
        <Button onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click"> Delete </Button>
        <Button onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click"> Edit </Button>
        {todo.title}
      </ListGroup.Item>
    );}

interface Todo {
        id: string;
        title: string;
}
      