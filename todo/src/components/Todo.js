import React from 'react';
const Todo=({text, setTodos, todos, todo})=> {
    const setDeleteHandler=(e)=> {
        console.log("Delete Called",todo)
        console.log("Delete Called ID",todo.id)
        
        setTodos(todos.filter((el)=> el.id!==todo.id))
    }
    return(
        <div className="todo">
            <li className="todo=item">{text}</li>
            <button  className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={setDeleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
export default Todo;