import React from "react";
import { IoCheckmark, IoTrashOutline } from "react-icons/io5";

const Todo = ({ text, todo, todos, setTodos }) => {

  const deleteHandler = () => {
    setTodos(todos.filter(element => element.id !== todo.id))
  };

  // check if my item.id === todo.id (state)
  const completeHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed
          // keep everything same - change to opposite of completed.
        };
      }
      return item;

    }))
  };

  return (
    <div className="my-3">
      <li className={`${todo.completed ? "completed" : ""} d-inline-block me-3`}>{text}</li>
      <button onClick={completeHandler} className="btn btn-sm btn-outline-dark me-1">
        <IoCheckmark />
      </button>
      <button onClick={deleteHandler} className="btn btn-sm btn-outline-dark">
        <IoTrashOutline />
      </button>
    </div>
  );
};

export default Todo;