import { useRequestDeletingTodos, useRequestUpdateTodos } from '../hooks'
import { useState } from 'react';

import './ListItem.css'

// eslint-disable-next-line react/prop-types
function ListItem({ id, title, refrechTodos }) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [newText, setNewText] = useState('')
    const { isUpdating, requestUpdateTodos } = useRequestUpdateTodos(refrechTodos);
    const { isDeleting, requestDeletingTodos } = useRequestDeletingTodos(refrechTodos);


    const onChange = ({ target }) => {
        console.log(target.value);
        setNewText(target.value)
    }

    const onChangeTask = () => setIsEditMode(true);

    return (
        <li key={id} id={id} className='todos'>
            {isEditMode ?
                <>
                    <input
                        name='todo'
                        type='text'
                        placeholder={title}
                        value={newText}
                        onChange={onChange}
                    />
                    <button className='ButtonReady' onClick={() => requestUpdateTodos(id, newText)}>
                        Готово
                    </button>
                </>

                : <>
                    {title}
                    <button className='ButtonEdit' disabled={isUpdating && isEditMode} onClick={onChangeTask}>
                        Редактировать
                    </button>
                    <button className='ButtonDelete' disabled={isDeleting && isEditMode} onClick={() => requestDeletingTodos(id)}>
                        Удалить
                    </button>
                </>
            }
        </li>
    )
}
export default ListItem
