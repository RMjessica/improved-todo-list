import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  
  const deleteHandler = () => {
    setTodos(todos.filter(element => element.id !== todo.id))
  };
  // check if my item.id === todo.id (state)
  const completeHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id){
        return{
          ...item, completed: !item.completed
          //keep everything same - change to opposite of completed.
        }; 
      } 
      return item;
   
    }))
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check">Check</i>
        </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash">Trash</i>
        </button>
    </div>
  );
};

export default Todo;