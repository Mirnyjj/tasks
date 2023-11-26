import { useState } from 'react';
import './App.css';
import { useRequestAddTodos, useRequestGetTodos } from './hooks'
import ListItem from './components/ListItem';
import SearchForTodos from './components/SearchTodos';
import SortTasksAlphabetically from './components/SortingTasks';
import AddingTask from './components/AddTodo';

function App() {
  const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
  const refrechTodos = () => setRefreshTodosFlag(!refreshTodosFlag);
  const { isLoading, todos, fetchBySearchQery, fetchBySort } = useRequestGetTodos(refreshTodosFlag);
  const { requestAddTodos } = useRequestAddTodos(refrechTodos);

  console.log(todos.length)
  console.log(refreshTodosFlag, 'refreshTodosFlag')

  return (
    <div className='board'>
      <h1> Список дел</h1>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <AddingTask requestAddTodos={requestAddTodos} />
          <div className='SortAndSearch'>
            <SortTasksAlphabetically fetchBySort={fetchBySort} />
            <SearchForTodos fetchBySearchQery={fetchBySearchQery} />
          </div>
          {todos.length === 0 ? 'Дела не запланированы' :
            todos.map(({ id, title }) => <ListItem key={id} id={id} title={title} refrechTodos={refrechTodos} />)}
        </>
      )}
    </div>
  );
}


export default App
