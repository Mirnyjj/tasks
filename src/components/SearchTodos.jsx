/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks";
function SearchForTodos({ fetchBySearchQery }) {
    const [seachText, setSeachText] = useState('')

    const onChange = ({ target }) => {
        setSeachText(target.value)
    }

    const debouncedSearchText = useDebounce(seachText)

    useEffect(() => {
        fetchBySearchQery(seachText)
    }, [debouncedSearchText])

    return (
        <input
            name='seachTodos'
            type='text'
            placeholder='Введите задачу для поиска'
            value={seachText}
            onChange={onChange}
        />
    )
}

export default SearchForTodos