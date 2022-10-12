import React, { useState, useEffect } from "react";
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";
import Select from "./components/Select.jsx";
import Tag from "./components/Tag.jsx";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./App.css"

function App() {
  
  const [inputText, setInputText] = useState ("");             //store inputs
  const [todos, setTodos] = useState ([]);                     //store list of inputs
  const [status, setStatus] = useState ("all");                //classify todos by status
  const [filteredTodos, setfilteredTodos] = useState ([]);     //using diff state to filter todos state
  const [selected, setSelected] = useState(false);  

  useEffect(() => {

    const filterHandler = () => {
      switch(status){
        case "completed": 
        setfilteredTodos(todos.filter(todo => todo.completed))
        break;
        case "uncompleted":
          setfilteredTodos(todos.filter(todo => !todo.completed))
          break;
          default:
            setfilteredTodos(todos);
            break;
      }
    }  

    filterHandler();
  }, [todos, status]);                                   
  
  return (
    <>
      <div className="wrapper">
        <div className="icon github">
          <a
            href="https://github.com/RMjessica"
            className="link-dark"
            target="blank"
          >
            <BsGithub size={25}/>
          </a>
        </div>
        <div className="icon linkedin">
          <a
            href="https://www.linkedin.com/in/rmjessica/"
            className="link-dark"
            target="blank"
          >
            <BsLinkedin size={25}/>
          </a>
        </div>
      </div>
      <Tag className="float-start" />
      <div className="row d-flex aligns-items-center justify-content-center">
        <div className="col-10 card position-absolute top-50 start-50 translate-middle shadow p-3">
          <div className="card-body">
            <h1 className="card-title m-2 text-center fw-light mb-5">My tasks</h1>

            <Form 
              inputText={inputText}
              setInputText={setInputText} 
              todos={todos}
              setTodos={setTodos}
              setStatus={setStatus}
            />

            {todos.length > 1 ? (
              <Select 
                todos={todos}
                setTodos={setTodos}
                selected={selected}
                setSelected={setSelected}
              />
              ) : ""}

            <hr className="mx-3 my-4"/>
            
            {filteredTodos.length > 0 ? (
              <List 
                todos={todos} 
                setTodos={setTodos}
                filteredTodos={filteredTodos}
                selected={selected}
              />  
             ) : <div className="text-center">No tasks</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

