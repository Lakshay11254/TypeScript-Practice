"use client"
import React, { useState } from "react";

const AddTodo = () => {
const [todo, setTodo] = useState("")


    return (
    <form>
      <input 
       type="text"
       placeholder="Wanna add somethin..?"
       id=""
       value={todo} 
       onChange={(event)=>setTodo(event.target.value)}/>
       


      <button type="submit">ADD</button>
    </form>
  );
};

export default AddTodo;
