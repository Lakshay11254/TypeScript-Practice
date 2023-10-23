//CONTEXT API

import React, { ReactNode, createContext, useState } from 'react'

export const todosContext = createContext(null) 

export const TodosProvider = (children: {children:ReactNode}) => {
  
  const [todos, setTodos] = useState();
  const handleAddTodo = (task:string) => {

    setTodos(()=> {
      
    })

  }
}