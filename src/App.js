
import './App.scss';
import ColorBox from './components/Color-Box';
import { useState } from 'react';
import TodoList from './components/Todo-LIst';
import TodoForm from './components/Todo-Form';

function App() {
  const [totoList,setToDoList]=useState([
    {id: 1, title:'PHP'},
    {id: 2, title:'Python'},
    {id: 3, title:'Java'},
  ])

  function handleToDoClick(todo) {
    const index = totoList.findIndex(x =>x.id === todo.id);
    if (index <0) return;

    const newToDoList=[...totoList];
    newToDoList.splice(index, 1);
    setToDoList(newToDoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log('Form submit: ', formValues);
    const newTodo = {
      id: totoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...totoList];
    newTodoList.push(newTodo);
    setToDoList(newTodoList);
  }
  return (
    <div className="App">
      <h1>Welcome to React Hooks</h1>

      <ColorBox />
      <TodoForm
        onSubmit={handleTodoFormSubmit}
      />
      <TodoList
        todos={totoList}
        onToDoClick={handleToDoClick}
      />
    </div>
  );
}

export default App;
