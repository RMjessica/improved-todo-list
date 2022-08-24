import React from "react";
import { IoCheckmark, IoTrashOutline } from "react-icons/io5";

const Todo = ({ text, todo, todos, setTodos }) => {

  const deleteHandler = () => {
    setTodos(todos.filter(element => element.id !== todo.id))
  };

  const completeHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        };
      }
      return item;
    }))
  };

  return (
    <div className="col d-inline-block p-1">
      <li className={`${todo.completed ? "text-decoration-line-through" : ""} d-inline-block text-start fw-light text-wrap`}>
        {text}
      </li>
      <div className="text-end">
        <IoCheckmark
          onClick={completeHandler}
          className="me-1"
        />
        <IoTrashOutline
          onClick={deleteHandler}
        />
      </div>
    </div>
  );
};

export default Todo;