import React from "react"
import { IoCheckmark, IoTrashOutline } from "react-icons/io5";
import { VscChecklist } from "react-icons/vsc";

const Select = ({todos, setTodos, selected, setSelected}) => {
  const deleteAllHandler = () => {
    if (selected) {
      setTodos(todos.filter(todo => !todo.selected));
    } else {
      setTodos([]);
    }
  }

  const completeAllHandler = () => {
    if (selected) {
      setTodos(todos.map(item => {
        if (item.selected) {
          return {...item, completed: !item.completed};
        }
        return item;
    }))
    } else {
      setTodos(todos.map(item => {
          return {...item, completed: !item.completed};
      }))
    }
  }; 

  const selectedHandler = () => {
    if (selected) {
      setSelected(false);
      setTodos(todos.map(item => {
          return {
            ...item, selected: false
          };
      }))
    } else {
      setSelected(true);
    }
  }

  return (
    <>
      <div className="text-center">
        <IoCheckmark
          onClick={completeAllHandler}
          className="me-2"
          size={20}
        />
        <IoTrashOutline
          onClick={deleteAllHandler}
          size={20}
        />
        <VscChecklist
          onClick={selectedHandler}
          className="ms-2"
          size={20}
        />
      </div> 
    </>
  )
}

export default Select