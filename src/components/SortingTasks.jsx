/* eslint-disable react/prop-types */
import { useRequestGetTodos } from "../hooks";
import '../App.css'

function SortTasksAlphabetically({ fetchBySort }) {
    const { isLoadingSort } = useRequestGetTodos();
    console.log(isLoadingSort)


    return (
        <button className="ButtonSort" disabled={isLoadingSort} onClick={() => fetchBySort()}>
            Сортировка
        </button>
    )
}

export default SortTasksAlphabetically