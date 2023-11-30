/* eslint-disable react/prop-types */
import { useRequestGetTodos } from "../hooks";
import '../App.css'
import SortIcon from '@mui/icons-material/Sort';

function SortTasksAlphabetically({ fetchBySort }) {
    const { isLoadingSort } = useRequestGetTodos();


    return (
        <button className="ButtonSort" disabled={isLoadingSort} onClick={() => fetchBySort()}>
            <SortIcon />
        </button>
    )
}

export default SortTasksAlphabetically