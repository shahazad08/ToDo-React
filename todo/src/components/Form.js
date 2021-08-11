import React from 'react';
const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {

    const inputTextHandler=(e)=> {
        console.log(e.target.value);
        setInputText(e.target.value)
    }

    const submitToHandler=(e)=> {
      console.log("Submit Button CLick",todos)
        e.preventDefault();
        setTodos([
            ...todos,
            { text:inputText, completed:false, id:Math.random()*1000}
        ])
        setInputText("")
        
    }
    const setHandlerStatus=(e)=> {
      console.log(e.target.value);
      setStatus(e.target.value)
    }
    return(
        <div>
             <form>
      <input 
      value={inputText}
      type="text"  
      onChange={inputTextHandler} 
      className="todo-input" />
      <button onClick={submitToHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={setHandlerStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
        </div>
    )
}
export default Form;