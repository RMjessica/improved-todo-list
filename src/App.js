import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";

function App() {
  
  //state
  const [inputText, setInputText] = useState (""); //store inputs
  const [todos, setTodos] = useState ([]); //store list of inputs
  const [status, setStatus] = useState ("all"); //classify todos by status
  const [filteredTodos, setfilteredTodos] = useState ([]); //using diff state to filter todos state

  //useEffect to refresh on changes
  useEffect(() => {
    filterHandler()
  }, [todos, status]); //it will run again whenever my todos value changes

  //functions
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

  return (
    <div className="App">
      <header>
        <h1> My tasks</h1>
      </header>
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
      filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;

