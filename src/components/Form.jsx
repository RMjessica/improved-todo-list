import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

  const [errors, setErrors] = useState(
    {
      'error': false,
      'msg': ""
    }
  );

  const inputTextHandler = (e) => {
    if (e.target.value.length < 25) {
      setInputText(e.target.value);
      setErrors(    {
        'error': false,
        'msg': ""
      })
    } else {
      let d_error = {
        'error': true,
        'msg': "The task cannot exceed 25 characters"
      }
      setErrors({...d_error})
    }
  };
 
  const submitTasksHandler = (e) => {
    e.preventDefault();
    if (inputText.trim().length === 0) {
      let d_error = {
        'error': true,
        'msg': "You forgot to add your task"
      }
      setErrors({...d_error})
      setInputText("");
      return;
    }

    setTodos([
      ...todos,
      { text: inputText.trim(), completed: false, id: Math.random() * 1000, selected: false }
    ]);
    setInputText("");
    setErrors(    {
      'error': false,
      'msg': ""
    })
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

        {errors.error ? (
          <div className="ms-2 mt-2 text-danger">{errors.msg}</div>
        ) : null}
      </form>
    </div>

  );
};


export default Form;