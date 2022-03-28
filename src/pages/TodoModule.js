import react,{useEffect, useState} from "react";
import toast from 'react-hot-toast';
import {MdOutlineClose} from 'react-icons/md';
import {useDispatch} from 'react-redux';
import Button from "../components/Button";
import { addTodo, updateTodo } from "../slices/todoSlice";
import {v4 as uuid} from 'uuid';
import './TodoModule.css';


const TodoModule = ({type, moduleOpen, setModuleOpen, todo}) => {

const [title, setTitle] = useState('');
const [status, setStatus] = useState('incomplete');
const dispatch = useDispatch();

useEffect(() => {
    if (type === 'update' && todo){
        setTitle(todo.title);
        setStatus(todo.status)
    } else {
        setTitle('');
        setStatus('incomplete');
    }
}, [type, todo, moduleOpen])

const handleSubmit = (e) =>{
    e.preventDefault();
    if(title === ''){
        toast.error("please enter a title");
        return;
    }
    if(title && status){
        if(type === 'add'){
        dispatch(
            addTodo({
                id: uuid(),
                title,
                status,
                time: new Date(). toLocaleString(),
            })
        );
            toast.success('Task Added Successfully');
            setModuleOpen(false);
        }
        if(type === 'update'){
            if( todo.title !== title || todo.status !== status){
                dispatch(
                    updateTodo({
                        ...todo,
                        title,
                        status
                    })
                );
                toast.success('Task Updated Successfully');
                setModuleOpen(false);
            }else {
                toast.error('No Changes Made')
                // setModuleOpen(false);
            }
        }
    } 
    
}

    return(
        <div>
            {moduleOpen && (
                <div className="todo-module-container">
                        <div className="close-container"
                        onClick={()=> setModuleOpen(false)}
                        onKeyDown={()=> setModuleOpen(false)}
                        tabIndex={0}
                        role="button">
                            <MdOutlineClose className="exit-icon"/>
                        </div>
                       
                        <form className="add-todo-container" onSubmit={(e)=> handleSubmit(e)}>
                            <h1 className="add-todo-title">
                                {type === 'update' ? 'Update' : 'Add'} Task</h1>
                            <label htmlFor="title" className="module-label">
                                Title <br/>
                                <input 
                                    type="title" 
                                    id="title" 
                                    value={title}
                                    className="todo-title" 
                                    placeholder="eg. Learn Redux "
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </label> <br/><br/>

                            <label htmlFor="status" className="module-label">
                                Status <br />
                                <select 
                                    name="status" 
                                    id="status" 
                                    className="form-select-btn"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                        <option value='incomplete'>Incomplete</option>
                                        <option value='complete'>Complete</option>
                                </select>
                            </label>
                            <div className="btn-container">
                                <Button className='add-task-btn2' type='submit'>
                                   {type === 'update' ? 'Update' : 'Add'} Task
                                </Button>
                                <Button  className='cancel-btn'
                                onClick={()=> setModuleOpen(false)}
                                onKeyDown={()=> setModuleOpen(false)}>
                                    cancel
                                </Button>
                            </div>
                        
                        </form>
                </div>
                        
            )} 
        </div>
               
            
        
    )
}

export default TodoModule;