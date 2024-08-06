import { useState } from "react";
import {  Main } from "./component/Main";
import { Mycontext } from "./context/Mycontext";
import { Task } from "./type";
import { Add } from "./component/Add";
import './App.css';
function App() {

  const [todo,settodo]=useState(

    [{id:1,description:"Task1",done:false},
    {id:2,description:"Task2",done:false},
    {id:3,description:"Task3",done:false},
    {id:4,description:"Task4",done:false},]
  )

  const deltask = (id: number) => {
    settodo([...todo.filter((elm) => elm.id !== id)]);
  }


  const changeDone=(elm:any)=>{ 
    elm.done = !elm.done; 
    settodo([...todo]) 
  } 
  const addtask = (data: Task) => {
    settodo([...todo, {...data, id: Date.now()}]);
  }
  return (
    <>
    <Mycontext.Provider value={{ deltask ,todo,addtask,changeDone}}>
  <Main />
  <Add/>
    </Mycontext.Provider>
    </>
  );
}

export default App;


















// import React from "react";
// import {  useForm } from "react-hook-form";


// export const Add: React.FC = React.memo((): JSX.Element => {
//   const { handleSubmit, register , formState:{errors}} = useForm();
 
//   const save=()=>{
//     console.log("save");
    
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit(save)}>
//         <input {...register("description")} />
       
//         <button>save</button>
//       </form>
//     </div>
//   );
// });



   



  
