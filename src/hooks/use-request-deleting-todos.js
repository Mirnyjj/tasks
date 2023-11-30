import { useState } from "react";
import {ref, remove} from 'firebase/database';
import {db} from '../firebase';

export const useRequestDeletingTodos = () => {
  const [isDeleting, setIsDeleting] = useState(false);

  const requestDeletingTodos = (id) => {
    setIsDeleting(true);

    const todosDeletDbRef = ref(db, `Tasks/${id}`)
    remove(todosDeletDbRef)
      .then((response) => {
        console.log('Задача УДАЛЕНА, ответ от сервера', response)
      })
      .finally(() => setIsDeleting(false))
  };
return {
    isDeleting,
    requestDeletingTodos,
}
}