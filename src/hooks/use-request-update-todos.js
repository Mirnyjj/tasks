import { useState } from "react";
import {ref, set} from 'firebase/database';
import {db} from '../firebase'

export const useRequestUpdateTodos = () => {
  const [isUpdating, setIsUpadating] = useState(false);

  const requestUpdateTodos = (id, newText) => {
    setIsUpadating(true);

    const todosUpdateDbRef = ref(db, `Tasks/${id}`)
    set(todosUpdateDbRef, {
      title: newText,
    })
      .then((response) => {
        console.log('Задача изменена, ответ от сервера', response)
      })
      .finally(() => setIsUpadating(false))
  };
return {
    isUpdating,
    requestUpdateTodos,
}
}