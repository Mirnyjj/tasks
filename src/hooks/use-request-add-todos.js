import { useState } from "react";

export  const useRequestAddTodos = (refrechTodos) => {
    const [isCreating, setIsCreating] = useState(false);
console.log(isCreating)
    const requestAddTodos = (text) => {
        setIsCreating(true);
        fetch('http://localhost:3000/Tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=utf-8' },
          body: JSON.stringify({
            title: text,
          })
        })
          .then((rawResponse) => rawResponse.json())
          .then((response) => {
            refrechTodos();
            console.log('Задача добавлена, ответ от сервера', response)
          })
          .finally(() => setIsCreating(false))
    }

      return {
        isCreating,
        requestAddTodos,
      }
  };

