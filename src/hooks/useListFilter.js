import { useState } from "react";

export const useListFilter = () => {
    const [showTodoList, setShowTodoList] = useState([]);

    const todoListFilter  = (todoList, filterValue) => {

        const filteredList = todoList
            .filter((todo) => {
            switch(filterValue) {
                case "전체" : 
                return true;
                break;
        
                case "완료" : 
                return todo.status === true;
                break;
        
                case "미완료" : 
                return todo.status === false; 
                break;
                
                default:
                return true;
                }
            }).map((todo) => ({
                ...todo,
                showStatus: filterValue,
            }))
        
        setShowTodoList(filteredList);
    };

    return { showTodoList, todoListFilter };
}