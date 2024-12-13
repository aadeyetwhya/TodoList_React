import React from 'react'
import './Todo.css'
import { AiOutlineClose } from 'react-icons/ai';


export default function Todo(props) {
 
  
  return (
    <div className='eachTodo'>
      <div className="modal">
        <button
          className="close-btn" onClick={()=>props.handleClosebutton(props.number)}
        // Makes the button focusable
        >
          <AiOutlineClose size={14} className="close-icon" />
        </button>

      </div>
      <h1>List Number : {props.number + 1} </h1>
      <p>Title: {props.title}</p>
      <p>Description: {props.descp}</p>

    </div>
  )
}
