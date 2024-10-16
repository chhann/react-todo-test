
export const useGetItem = () => {
    const StorageTodoList = localStorage.getItem('todoList');;
    
    return StorageTodoList ? JSON.parse(StorageTodoList) : [];
}