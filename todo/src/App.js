import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText]=useState("");
  const [todos, setTodos]=useState([]);
  const [status, setStatus]=useState('all')
  const [filteredTodos, setFilteredTodos]= useState([]);

  const filterHandler= ()=> {
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter(todo=> todo.completed===true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo=> todo.completed===false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }
  useEffect(()=> {
    getLocalStorage();
  }, [])
  useEffect(()=> {
    console.log("Hey")
    filterHandler();
    saveToLocalStorage();
  }, [todos, status])

  const saveToLocalStorage=()=> {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalStorage=()=> {
    if(localStorage.getItem("todos")===null) {
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else {
      let localTodo=JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo)
  
    }
  }
  return (
    <div className="App">
     <header>
       <h1>Shaikh Todo List</h1>
       </header>
       <Form 
       todos={todos} 
       setTodos={setTodos} 
       inputText={inputText} 
       setInputText={setInputText}
       status={status}
       setStatus={setStatus}
       />
       <TodoList 
       todos={todos} setTodos={setTodos} filterTodos={filteredTodos}/>
    </div>
  );
}

export default App;
