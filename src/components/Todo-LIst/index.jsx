import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todos:PropTypes.array,
  onToDoClick: PropTypes.func,
};

TodoList.defaultProps={
  todos: [],
  onToDoClick:null
}
function TodoList(props) {
  const {todos , onToDoClick}= props

  function handleClick(todo) {
    if (onToDoClick){
      onToDoClick(todo);
    }
  }

  return (
    <div className="todo-list">
      {todos.map(todo =>{
        return (
          <li
            key={todo.id}
            onClick={()=>handleClick(todo)}
          >
            {todo.title}
          </li>
        )})}
    </div>
  );
}

export default TodoList;