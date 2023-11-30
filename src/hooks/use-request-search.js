import {ref, onValue} from 'firebase/database';
import 'firebase/database';
import {db} from '../firebase';
import { useState } from 'react';

export const useFetchBySearchQery = () => {
    const[todosSearch, setTodosSearch] = useState({})
    const[todosSearchLoading, setTodosSearchLoading] = useState({})

    const fetchBySearchQery = (value) => {
        setTodosSearchLoading(true)

        const todosSearchDbRef =ref(db, `Tasks`);

    onValue(todosSearchDbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const loadedTodos = childSnapshot.val() || {};
            const childKey = childSnapshot.key;
            const todos = {};
            todos.id = childKey;
            todos.title = loadedTodos.title;
            if(childSnapshot.val().title.toLowerCase().includes(value) & value !=='') {
                console.log(value)
                setTodosSearch(todos);
                setTodosSearchLoading(false)

            }
        })
       
      })

    }
    
   
        return {
            todosSearch,
            todosSearchLoading,
            fetchBySearchQery,
        }
  }
