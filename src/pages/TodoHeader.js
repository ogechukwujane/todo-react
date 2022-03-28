import React, {useState} from 'react';
import Button from '../components/Button';
import './TodoHeader.css';
import TodoContent from './TodoContent';
import TodoModule from './TodoModule';

const Todo = () => {

const [moduleOpen, setModuleOpen] = useState(false);

    return (
        <div className='todo-big-container'>
                {/* <h1>welcome to todo</h1> */}
                <div className='button-container'>
                    <Button className='add-task-btn'
                    onClick={()=> setModuleOpen(true)}>
                        Add task
                    </Button>
                    <select className='select-btn'>
                        <option value='all'>All</option>
                        <option value='incomplete'>Incomplete</option>
                        <option value='complete'>Complete</option>
                    </select>
                </div>
                <TodoContent />
                <TodoModule type="add" moduleOpen={moduleOpen} setModuleOpen={setModuleOpen}/>
        </div>
    )
}

export default Todo;
