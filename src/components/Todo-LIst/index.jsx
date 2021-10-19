import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todos:PropTypes.array,
  // eslint-disable-next-line react/no-typos
  onToDoClick: PropTypes.function,
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