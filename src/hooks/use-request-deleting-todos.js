import { useState } from "react";

export const useRequestDeletingTodos = (refrechTodos) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const requestDeletingTodos = (id) => {
    setIsDeleting(true);
    fetch(`http://localhost:3000/Tasks/${id}`, {
      method: 'DELETE',
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        refrechTodos();
        console.log('Задача УДАЛЕНА, ответ от сервера', response)
      })
      .finally(() => setIsDeleting(false))
  };
return {
    isDeleting,
    requestDeletingTodos,
}
}