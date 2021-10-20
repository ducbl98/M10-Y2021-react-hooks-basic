
import './App.scss';
import ColorBox from './components/Color-Box';
import { useEffect, useState } from 'react';
import TodoList from './components/Todo-LIst';
import TodoForm from './components/Todo-Form';
import PostList from './components/PostList';
import Pagination from './components/Pagination-Post-List';
import * as queryString from 'querystring';

function App() {
  const [totoList,setToDoList]=useState([
    {id: 1, title:'PHP'},
    {id: 2, title:'Python'},
    {id: 3, title:'Java'},
  ])

  const [postList,setPostList] =useState([]);

  const [pagination,setPagination]=useState({
    _page:1,
    _limit:10,
    _totalRows:1,
  })
  const [filters,setFilters]=useState({
    _limit:10,
    _page:1,
  })

  useEffect(()=>{
    async function fetchPostList(){
      const paramsString =queryString.stringify(filters)
      const requestUrl=`http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      console.log({responseJSON});
      const {data} =responseJSON;
      setPostList(data);
      setPagination(pagination)
    }

    console.log('Post List Effect');
    fetchPostList().catch((error)=>{
      console.log(error);
    })
  },[filters])

  useEffect(()=>{
    console.log('Todo List Effect');
  },[])


  function handleToDoClick(todo) {
    const index = totoList.findIndex(x =>x.id === todo.id);
    if (index <0) return;

    const newToDoList=[...totoList];
    newToDoList.splice(index, 1);
    setToDoList(newToDoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log(formValues);

    const newTodo={
      id:formValues.length+1,
      ...formValues
    }
    const newTodoList=[...totoList];
    newTodoList.push(newTodo);
    setToDoList(newTodoList)
  }
  
  function handlePageChange(newPage) {
    console.log(newPage);
    setFilters({
      ...filters,
      _page:newPage,
    })
  }
  return (
    <div className="App">
      <h1>Welcome to React Hooks</h1>

      {/*<ColorBox />
      <TodoForm
        onSubmit={handleTodoFormSubmit}
      />
      <TodoList
        todos={totoList}
        onToDoClick={handleToDoClick}
      />*/}
      <PostList
        posts={postList}
      />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
