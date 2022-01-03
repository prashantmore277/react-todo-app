import React, {useState} from 'react'

function TodoForm() {
const [input, setinput] = useState('')    

const HandleChange = e =>{
    setinput(e.target.value)
};

const HandleSubmit = e =>{
    e.presentDefault();

    this.props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
});

    setinput('');
};
return (
        <form className='todo-form' onSubmit={HandleSubmit}>
            <input value={input}
            type="text" 
            placeholder= "Add a ToDo"
            name='text'
            className='todo-input'
            onChange={HandleChange}
            />
            <button className='todo-btn'>add</button>
        </form>
    )
}

export default TodoForm;
