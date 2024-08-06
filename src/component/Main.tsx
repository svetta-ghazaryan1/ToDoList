import { Mycontext } from '../context/Mycontext';
// import './App.css';
import React, { useContext, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

export const Main: React.FC = React.memo((): JSX.Element => {

  const { todo, deltask,changeDone } = useContext(Mycontext)
  return (
<div  className='div2'>
 
  <table className='main'>

<thead>
  <tr>
    <th>To do list</th>
   
  </tr>

</thead>
<tbody className='tbody'>
  {
    todo.map((elm) =>
      <tr key={elm.id} style={elm.done ? { textDecoration: "line-through" ,}  : { textDecoration: "none" } }>
        <td  onClick={()=>changeDone(elm)}>{elm.description}</td>
        <td>
      {elm.done ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square" viewBox="0 0 16 16">
        <path d="M0 0h16v16H0V0zm9.096 4.904a.5.5 0 0 1 .698.1l1.297 1.622a.5.5 0 1 0 .786-.618l-1.297-1.622a.5.5 0 0 1-.1-.698l.092-.094a1 1 0 0 1 1.415-.083l1.302 1.627a1 1 0 0 1-.083 1.414l-.092.094-2.002 1.997-1.626-1.302a1 1 0 0 1-1.414.083l-.094-.092-1.625-1.302a1 1 0 0 1 .083-1.414l.094-.092 1.622-1.298a.5.5 0 0 1 .618.785l-1.622 1.297a.5.5 0 0 0-.1.698l.092.094 2.002 1.996 2.003-1.996-1.996-2.002a1 1 0 0 0-1.415-.083l-.094.092-2.003 1.996-1.296-1.622a1 1 0 0 0-1.414-.083l-.094.092-1.627 1.302a1 1 0 0 0 .083 1.414l.094.092 1.301 1.625a1 1 0 0 0 1.414-.083l.094-.092 1.997-1.997z"/>
      </svg>
      ) : null}
    </td>
       <td><button onClick={() => deltask(elm.id)} className='btn1'>Delete</button>
        </td>
      </tr>
    )
  }


</tbody>
</table>

</div>
    
  )
})







