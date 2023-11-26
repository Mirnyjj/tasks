/* eslint-disable react/prop-types */
import { useState } from "react";
import { useRequestAddTodos } from "../hooks";
import './AddTodo.css'


function AddingTask({ requestAddTodos }) {
    const [text, setText] = useState('')
    const { isCreating } = useRequestAddTodos();

    const onChange = ({ target }) => {
        console.log(target.value);
        setText(target.value)
    }


    return (
        <div className="AddTodoStyle">
            <input className="InputAdd"
                name='todo'
                type='text'
                placeholder='Введите новую задачу'
                value={text}
                onChange={onChange}
            />
            <button className="ButtonAdd" disabled={isCreating} onClick={() => requestAddTodos(text)}>
                Добавить задачу
            </button>
        </div>
    )
}

export default AddingTask