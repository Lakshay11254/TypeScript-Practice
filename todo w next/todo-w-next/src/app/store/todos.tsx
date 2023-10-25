//CONTEXT API

import React, { ReactNode, createContext, useState } from 'react'
export type Todo = {
  id:string;
  task:string;
  completed:boolean;
  createdAt:Date;  
}
export type TodosContext= {
  todos:Todo[];

  //call signature
  handleAddTodo : (task:string) => void ;
}


export const todosContext = createContext(null) 

export const TodosProvider = (children: {children:ReactNode}) => {
  
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAddTodo = (task:string) => {

    setTodos((prev)=> {
      const newTodos: Todo[] = [{
        id: Math.random().toString(),
        task,
      completed: false,
      createdAt: new Date() 
      },
      ...prev
    ]
    
    return newTodos;
  }
  
    )

  }
return 
(
  <todosContext.Provider value={{todos,handleAddTodo}}>
    {children}
  </todosContext.Provider>
)
}