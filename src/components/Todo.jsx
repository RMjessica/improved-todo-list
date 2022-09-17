import React from "react";
import { IoCheckmark, IoTrashOutline } from "react-icons/io5";

const Todo = ({ todo, todos, setTodos, selected }) => {

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

  const selectedHandler = () => {
    if (selected) {
      setTodos(todos.map(item => {
        if (item.id === todo.id) {
          return {
            ...item, selected: !item.selected
          };
        }
        return item;
      }))
    }
  }

  return (
    <div className="col d-inline-block p-1">
      <li 
        className={`${todo.completed ? "text-decoration-line-through" : ""} d-inline-block text-start fw-light text-wrap p-1 ${todo.selected ? "bg-dark bg-gradient rounded bg-opacity-25" : ""} `} 
        onClick={selectedHandler} 
      >
        {todo.text}
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