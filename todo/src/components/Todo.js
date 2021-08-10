import React from 'react';
const Todo=({text, setTodos, todos, todo})=> {
    const setDeleteHandler=(e)=> {
        console.log("Delete Called",todo)
        console.log("Delete Called ID",todo.id)
        
         setTodos(todos.filter((el)=> el.id!==todo.id))
    };
    const setCompleteHandler=(e)=> {
        console.log("Complete")
        setTodos(todos.map((item)=> {
            if(item.id===todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                };
            }
            return item
        })
        );
    }
    return(
        <div className="todo">
            <li className={`todo=item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={setCompleteHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={setDeleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
export default Todo;