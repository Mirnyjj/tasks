import './App.css';
import { useRequestAddTodos, useRequestGetTodos } from './hooks'
import ListItem from './components/ListItem';
import SearchForTodos from './components/SearchTodos';
import SortTasksAlphabetically from './components/SortingTasks';
import AddingTask from './components/AddTodo';
import { useFetchBySearchQery } from './hooks/use-request-search';

function App() {
  const { isLoading, todos, fetchBySort } = useRequestGetTodos();
  const { requestAddTodos } = useRequestAddTodos();
  const { todosSearch, todosSearchLoading, fetchBySearchQery } = useFetchBySearchQery()

  return (

    <div className='boardWrapper'>
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <div className='board'>
          <h1> Список дел</h1>

          <>
            <AddingTask requestAddTodos={requestAddTodos} />
            <div className='SortAndSearch'>
              <SearchForTodos fetchBySearchQery={fetchBySearchQery} />
              <SortTasksAlphabetically fetchBySort={fetchBySort} />
            </div>
            {todos === {} ? 'Дела не запланированы' :
              (<ul className='todos'>

                {todosSearchLoading === true ?
                  Object.entries(todos)
                    .map(([id, { title }]) =>
                      <ListItem key={id} id={id} title={title} />
                    )

                  :

                  <ListItem key={todosSearch.id} id={todosSearch.id} title={todosSearch.title} />

                }

              </ul>)
            }

          </>

        </div>
      )}
    </div>

  );
}


export default App
