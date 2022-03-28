import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import TodoModule from "../pages/TodoModule";
import { deleteTodo } from "../slices/todoSlice";
import './TodoItem.css';

const TodoItem = ({todo}) => {
    const dispatch = useDispatch();
    const [updateModuleOpen, setUpdateModuleOpen] = useState(false);


    const handleDelete = () =>{
        dispatch(deleteTodo(todo.id))
        toast.success('Task Deleted Successfully');
    }

    const handleUpdate = () =>{
        setUpdateModuleOpen(true)
    }

    return(
        <>
            <div className="todo-items-container">
                <div className="item-container">
                    <div className="tasks-container">
                        <div className="checkbox-container">[]</div>
                        <div >
                            <p>{todo.title}</p>
                        </div>
                    </div>
                    <div className="action-container">
                        <div className="delete-container"
                            onClick={handleDelete}
                            onKeyDown={handleDelete}
                            tabIndex={0}
                            role="button"
                        >
                            <MdDelete />
                        </div>
                        <div className="edit-container"
                            onClick={handleUpdate}
                            onKeyDown={handleUpdate}
                            tabIndex={0}
                            role="button"
                        >
                            <MdEdit />
                        </div>
                    </div>
                </div>
            </div>

            <TodoModule 
                type="update" 
                todo={todo}
                moduleOpen={updateModuleOpen} 
                setModuleOpen={setUpdateModuleOpen} />
        </>
    )
}

export default TodoItem;