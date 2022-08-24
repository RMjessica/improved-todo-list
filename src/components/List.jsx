import React from "react";
import Todo from "./Todo.jsx";

const List = ({ todos, setTodos, filteredTodos }) => {

  return (
    <div className="container">
      <ul className="list-unstyled row row-cols-3 fw-light text-center mx-4">
        {filteredTodos.map(todo => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;