

export useRequestSorting = () => {
    const [isLoadingSort, setIsLoadingSort] = useState(false);


     const fetchBySort = () => {
    setIsLoadingSort(true);

    const todosSortDbRef = ref(db, 'Tasks?_sort=title&_order=asc')
    return onValue(todosSortDbRef, (snapshot) => {
      const loadedTodos = snapshot.val() || null;
      console.log(loadedTodos)
      setTodos(loadedTodos);
      setIsLoading(false)
    })
        .then((loadedTodos) => {
            setTodos(loadedTodos);
            console.log('Задачи отсортированы', loadedTodos)
        })
        .finally(() => setIsLoadingSort(false));
  }

  return {
    
  }
}
 