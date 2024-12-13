import { useState,useRef, useContext } from 'react'
import './App.css'
import Todo from './Todo'


function App() {


  const [todoList,setTodoList]=useState([])
 
  const taskTitleRef=useRef("");
  const descpRef=useRef("");
  const addtolist=()=>{
    let title=taskTitleRef.current.value;
    let descp=descpRef.current.value;
    let eachTodo={
      "title":title,
      "description":descp
    }
      
      setTodoList((prev) => {
          const newTodoList = [...prev, eachTodo];
          console.log("Updated todoList:", newTodoList);  // Log to check the array
          return newTodoList;
        });

        taskTitleRef.current.value = '';
    descpRef.current.value = '';

  }

  const handleClosebutton=(id)=>{
    let newList=[...todoList]
    newList.splice(id,1)
    setTodoList(newList)
  }
    

  return (
    <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <h1 style={{ color: 'white', textAlign: 'center', margin: '0', paddingTop: '20px' }}>Todo List</h1>

      <div style={{ marginLeft: '3%', height: 'auto' }}>
        <span style={{ marginRight: '10px' }}>Task : </span><input type="text" style={{ height: '50px', width: '25%',color:'black' }} ref={taskTitleRef}/>
        <span style={{ margin: '0 10px 0 25px' }}>Description : </span><input type="text" style={{ height:  '50px', width: '25%' ,color:'black'}}  ref={descpRef}/><br /><br />
        <button className="addBtn" onClick={addtolist}>Add</button>
      </div>

      <div className="toDoListSection">
        {
          todoList.length>0?(todoList.map((element,index)=>{
         console.log(index)
              return <Todo key={index} title={element.title} descp={element.description} number={index}  handleClosebutton={handleClosebutton}/>
          })):<div style={{backgroundColor:'rgb(255, 74, 74)',margin:'35px 15px 15px 15px',padding:'15px 25px 15px 25px',display:'flex',width:'25%',fontSize:'20px'}}>To-Do List is Empty</div>//what if list is empty
        }
      </div>
    </div>
  )
}

export default App
