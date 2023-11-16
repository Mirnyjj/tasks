import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((loadedData) => loadedData.json())
      .then((loadedProducts) => {
        setTodos(loadedProducts[0]);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <>
      <h1> Список дел</h1>
      <div className='header'>
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <li key={todos.id} className='todos'>
            Дело №{todos.id} - {todos.title}
          </li>
        )}
      </div>
    </>

  );
}


export default App
