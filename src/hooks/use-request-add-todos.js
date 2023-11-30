import { useState } from "react";
import {ref, push} from 'firebase/database'
import {db} from '../firebase'

export  const useRequestAddTodos = () => {
    const [isCreating, setIsCreating] = useState(false);
    const requestAddTodos = (text) => {
      if(text !== '') {
        setIsCreating(true);

        const todosDbRef = ref(db, 'Tasks')

        push(todosDbRef, {
          title: text,
        })
          .then((response) => {
            console.log('Задача добавлена, ответ от сервера', response)
          })
          .finally(() => setIsCreating(false))
      }
      
    }

      return {
        isCreating,
        requestAddTodos,
      }
  };

