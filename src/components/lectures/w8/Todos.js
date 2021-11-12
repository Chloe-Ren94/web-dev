import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
    const [todo, setTodo] = useState({do: '', done: false});
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const createHandler = () => {
        const action = {
            type: 'create-todo',
            todo
        };
        dispatch(action);
    }
    const deleteHandler = (todo) => {
        const action = {
            type: 'delete-todo',
            todo
        };
        dispatch(action);
    }

    return(
        <div>
            <h2>Todos</h2>
            <input value={todo.do}
                   onChange={event => setTodo({...todo, do: event.target.value})}/>
            <button onClick={createHandler}>Create</button>
            <ul className='list-group'>
                {
                    todos.map(todo =>
                        <li className='list-group-item'>
                            {todo.do}
                            <button onClick={() => deleteHandler(todo)}>Delete</button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
export default Todos;