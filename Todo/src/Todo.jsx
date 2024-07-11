import {v4 as uuidv4}  from 'uuid';
import { useState } from "react";
import './Todo.css';

export default function Todo() {
  const [todos, setTodos] = useState([{task : "Sample task", id : uuidv4()}]);
  const [input,setInput] = useState("");


   function updateInputVal(e) {
    setInput(e.target.value);
   }

   function addNewTask() {
    if(input == "") {
      alert("Input panel is emply,Kindly enter the task first !")
   } else {
      setTodos(preTodos => [...preTodos, {task : input, id: uuidv4()}]);
      setInput("");
    }
   }
  
   function doneFeature(e) {
        let parent = e.target.parentElement;
        parent.style.textDecoration = "line-through";
    }


   function dltFeature(e) {
    let parent = e.target.parentElement;
    parent.remove();
    }


  return (
    <>
    <div className="container">
      <h1> Todo React App </h1>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter your task" aria-label="Username" aria-describedby="basic-addon1"  onChange={updateInputVal}  value={input}/>
          <button type="button" className="btn btn-success" onClick={addNewTask} >Add task </button>
        </div>
        <hr />
        <ul>
          {todos.map((todo) => 
            (<li key={todo.id}  id='li'>
              <span  >{todo.task}</span>
              <button id='doneBtn' onClick={doneFeature} >Done</button>
              <button id='dltBtn' onClick={dltFeature}>Delete </button>
            </li>
            )
          )}
        </ul>
    </div>
    </>
  )
}