import React, {useState} from 'react'

function TodoForm(props) {
const [input, setinput] = useState(''); 

const HandleChange = e =>{
    setinput(e.target.value)
};

const HandleSubmit = e =>{
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
});
    console.log(input);
    setinput('');
};
return (
        <form className='todo-form' onSubmit={HandleSubmit}>
            <input 
            type="text" 
            placeholder= "Add a ToDo"
            value={input}
            name='text'
            className='todo-input'
            onChange={HandleChange}
            />
            <button className='todo-btn'>add todo</button>
        </form>
    )
}

export default TodoForm;
