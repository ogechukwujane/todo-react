import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";
import './TodoContent.css'

const TodoContent = () => {
    const todoList = useSelector((state) => state.todo.todoList);
    const sortedTodoList = [...todoList];
    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

    return(
        <div className="todo-content-container">
            {sortedTodoList && sortedTodoList.length > 0 
                ? sortedTodoList.map((todo) => <TodoItem key={todo.id} todo={todo}/>)
                : ''}
        </div>
    )
}

export default TodoContent;