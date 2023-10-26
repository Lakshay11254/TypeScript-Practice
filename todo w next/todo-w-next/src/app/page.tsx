import "./globals.css";
import React from 'react'
import { RiTodoLine } from "react-icons/ri";
import AddTodo from './component/AddTodo'
import {Todos} from './component/Todos'
import Navbar from "./component/navbar";


const page = () => {
  return (
    <main>
       <h2><RiTodoLine className="icons" /> TODO NEXT + TYPESCRIPT <RiTodoLine className="icons" /> </h2>
<Navbar />
      <AddTodo/>
      <Todos/>
    </main>
  )
}

export default page

// import AddTodo from "@/components/add-todo";
// import {Todos} from "@/components/todos";
// import Navbar from "@/components/navbar";
// // thapa technical SUBSCRIBE
// const Page = () => {
//     return (
//       <main>
//           <AddTodo />
//           <Todos />
//       </main>
//     );
// };

// export default Page;