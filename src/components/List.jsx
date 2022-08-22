import React from "react";
import Todo from "./Todo.jsx";

const List = ({ todos, setTodos, filteredTodos }) => {

  return (
    <div>
      <ul className="list-unstyled">
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
// in ul instead of using todos.map, I use filteredTodos for cate to work
export default List;