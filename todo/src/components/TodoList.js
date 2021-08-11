import React from 'react';
import Todo from './Todo';
const TodoList = ({todos, setTodos, filterTodos}) => {
    console.log("FilteredTodos", filterTodos)
    return(
    <div className="todo-container">
      <ul className="todo-list">
          {filterTodos.map((todo) => (
        <Todo 
        key={todo.id} 
        text={todo.text} 
        setTodos={setTodos} 
        todos={todos} 
        todo={todo}/> 
          ))}
         
      </ul>
    </div>
    )
}
export default TodoList;