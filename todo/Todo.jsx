
import "./Todo.css";
import {useState,useEffect} from "react";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import{ getTodoLocal,setTodoLocal} from "./TodoLocal";

export const Todo=()=>{
    const[inputValue,setInputValue]=useState("");
    const[task,setTask]=useState(()=>getTodoLocal());
    //function call
        
    // jo data localstorage pr h usko initial data maniye
    const [dateTime,setDateTime]=useState("");
    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        if(!inputValue) return;
        // if(task.includes(inputValue)) return;
         if (task && task.includes(inputValue)) return;
        setTask((prevTask)=>[...prevTask,{ text: inputValue, completed: false } ]);
        setInputValue("");
    }
    //localStorage
    // ✅ Save to localStorage only when task updates

  setTodoLocal(task);

    //toggle 
    const handleToggleComplete = (index) => {
  const updatedTask = [...task];
  updatedTask[index].completed = !updatedTask[index].completed;
  setTask(updatedTask);
};

    // date-time
    //useEffect is used for memory leak kuki hr second mie chlra hbo timer
    useEffect(()=>{
const interval=  setInterval(()=>{
             const now=new Date();
    const formattedDate=now.toLocaleDateString();
        const formattedTime=now.toLocaleTimeString();

        //  constant date time
        setDateTime(`${formattedDate}-${formattedTime}`);
        },1000);
           return()=>clearInterval(interval);
           //what is the need of cleanup function??
    },[])
    // handle Delete
    const handleDeleteTodo=(value)=>{
        console.log(task);
        console.log(value);
        const updatedTask=task.filter((currElem)=>currElem.text!==value.text);
        setTask(updatedTask);
    }
    //clear All
    const handleClearTodo = () => {
  setTask([]);
};
    return(
        <div>
            <section className="todo-container">
                <header>
                    <h1>Todo List</h1>
                    <h2 className="date-time"> {dateTime}</h2>
                </header>
                <section className="form">
                    <form onSubmit={handleFormSubmit}>
                        
                            <input type="text" className="todo-input"  value={inputValue} onChange={handleInputChange}></input>
                        
                        
                            <button type="submit" className="todo-btn">Add Task</button>
                        
                        {/* It tells the browser this button will submit the form it's inside. */}
                    </form>

                </section>
                <section className="myList">
                     <ul>
                        {
                           task.map((currElem,index)=>{
                            return <li key={index} className="todo-item">
                                 <span style={{ textDecoration: currElem.completed ? "line-through" : "none"}}>
      {currElem.text}
    </span>
                                <button className="check-btn" onClick={() => handleToggleComplete(index)}> <FaCheck /></button>
                                <button className="delete-btn" onClick={()=>handleDeleteTodo(currElem)}> <MdDelete /></button>
                            </li>

                           }) 
                        }
                     </ul>
                </section>
                <button className="clear-btn" onClick={handleClearTodo}>
            Clear All
          </button>
            </section>
        </div>
    );
};  