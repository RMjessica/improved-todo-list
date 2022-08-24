import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

  const [error, setError] = useState(false);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTasksHandler = (e) => {
    e.preventDefault();
    if (inputText.trim().length === 0) {
      setError(true);
      return;
    }

    setError(false);
    setTodos([
      ...todos,
      { text: inputText.trim(), completed: false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="container">
      <form className="row p-3">
        <div className="col input-group">

          <input
            className="form-control"
            type="text"
            placeholder="Add new task"
            aria-describedby="button-addon2"
            value={inputText}
            onChange={inputTextHandler}
          />

          <button onClick={submitTasksHandler} className="btn btn-outline-dark" id="button-addon2">
            <IoAddOutline className="mb-1" />
          </button>
        </div>

        <div className="col">
          <select className="form-select" onClick={statusHandler} name="tasks" >
            <option defaultValue="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted Tasks</option>
          </select>
        </div>

        {error ? (
          <div className="ms-2 mt-2">You forgot to add your task</div>
        ) : null}
      </form>
    </div>

  );
};


export default Form;