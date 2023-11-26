import { useEffect, useState } from "react";

export const useRequestGetTodos = (refreshTodosFlag) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingSort, setIsLoadingSort] = useState(false);

  const [todos, setTodos] = useState([]);

    useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3000/Tasks')
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => {
        setTodos(loadedTodos);
      })
      .finally(() => setIsLoading(false));
  }, [refreshTodosFlag]);
  
  const fetchBySort = () => {
    setIsLoadingSort(true);
    fetch(`http://localhost:3000/Tasks?_sort=title&_order=asc`)
        .then((loadedData) => loadedData.json())
        .then((loadedTodos) => {
            setTodos(loadedTodos);
            [refreshTodosFlag]
            console.log('Задачи отсортированы', loadedTodos)
        })
        .finally(() => setIsLoadingSort(false));
  }

  const fetchBySearchQery = (value) => {
    fetch(`http://localhost:3000/Tasks?title_like=${value}`)
        .then((loadedData) => loadedData.json())
        .then((loadedTodos) => {
            setTodos(loadedTodos);
            console.log('Задача найдена', loadedTodos)
        })
        .finally(() => value = null);
  }
  

  return {
    isLoading,
    isLoadingSort,
    todos,
    fetchBySearchQery,
    fetchBySort,
  }
}