import { useEffect, useState} from "react";
import {ref, onValue} from 'firebase/database';
import 'firebase/database';
import {db} from '../firebase';

export const useRequestGetTodos = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingSort, setIsLoadingSort] = useState(false);
    const [todos, setTodos] = useState({});
    useEffect(() => {
      setIsLoading(true)
      const todosDbRef = ref(db, 'Tasks')
      return onValue(todosDbRef, (snapshot) => {
        const loadedTodos = snapshot.val() || {};
        setTodos(loadedTodos);
        setIsLoading(false)
      })
  }, []);
  
  const fetchBySort = () => {
    setIsLoadingSort(true);

    const todosDbRef = ref(db, 'Tasks')
    return onValue(todosDbRef, (snapshot) => {

      const loadedTodos = snapshot.val() || {};
      console.log(loadedTodos)
      const loadedTodosArray = Object.keys(loadedTodos).map((key) => ({id: key, title: loadedTodos[key].title}))
      const sortArray = loadedTodosArray.sort((a, b) => a.title.localeCompare(b.title));
      console.log(sortArray)
     const sortedObject = {}
     sortArray.forEach((item) => {
      sortedObject[item.id] = {title: item.title}
     })
      console.log(sortedObject)
      setTodos(sortedObject);
      setIsLoading(false)
    })
  }

  return {
    isLoading,
    isLoadingSort,
    todos,
    fetchBySort,
  }
}