import TodoList from "./TodoList";
import React , {useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import TodoForm from "./TodoForm";

function Todo({todos,completeTodo,removeTodo, updateTodo} ) {
    const [edit, setedit] = useState({
        id : null, 
        value: ''
    });

    const submitUpdate = value =>{
        updateTodo(edit.id, value );
        setedit({
                id:null,
                value:''
            });
        };
        if(edit.id){
            return<TodoForm edit={edit} onSubmit={submitUpdate}/>;
        }

    
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
        key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icon">
                <RiCloseCircleLine
                onClick={() => removeTodo (todo.id)}
                className='delete-icon'
                />
                <TiEdit
                onClick={() => setedit(todo.id,todo.text)}
                className='edit-icon'
                />
            </div>


        </div>
    ))

}

export default Todo

