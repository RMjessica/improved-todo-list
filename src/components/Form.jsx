import React from "react";
import { IoAddOutline } from "react-icons/io5";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

  const inputTextHandler = (e) => {
    //console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTasksHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="container">
      <form className="row">
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
          <select className="form-select filter'tasks" aria-label="Default select example" onClick={statusHandler} name="tasks" >
            <option defaultValue="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted Tasks</option>
          </select>
        </div>
      </form>
    </div>

  );
};


export default Form;