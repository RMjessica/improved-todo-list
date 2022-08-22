import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";

function App() {
  
  const [inputText, setInputText] = useState ("");             //store inputs
  const [todos, setTodos] = useState ([]);                     //store list of inputs
  const [status, setStatus] = useState ("all");                //classify todos by status
  const [filteredTodos, setfilteredTodos] = useState ([]);     //using diff state to filter todos state

  useEffect(() => {

    const filterHandler = () => {
      switch(status){
        case "completed": 
        setfilteredTodos(todos.filter(todo => todo.completed === true))
        break;
        case "uncompleted":
          setfilteredTodos(todos.filter(todo => todo.completed === false))
          break;
          default:
            setfilteredTodos(todos);
            break;
          }
        }  

        filterHandler();
      }, [todos, status]);                                     //it will run again whenever my todos value changes
      
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="card" style={{width:"60rem"}}>
          <div className="card-body">
            <h1 className="card-title m-5">My tasks</h1>

            <Form 
              inputText={inputText}
              setInputText={setInputText} 
              todos={todos}
              setTodos={setTodos}
              setStatus={setStatus}
            />
            <List 
              todos={todos} 
              setTodos={setTodos}
              filteredTodos={filteredTodos}
            />  
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

