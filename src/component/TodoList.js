

import React from 'react';

const TodoList = (props,onTodoClick,completed) =>{
    console.log(props.addTodo)
    const { addTodo }= props;
    const text = addTodo.map((item, index)=><li key={index}
    style = {{textDecoration: item.completed ? 'line-through' : 'none'}}
    onClick={()=>props.onTodoClick(item.id)}
    >{item.text} </li>)
    return (
        <ul>
        {text}
        </ul>
    )
}

export default TodoList;