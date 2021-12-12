import React from "react";
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: setTodos,
        loading,
        error
    } = useLocalStorage("TODOS_V1", []);
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const todoTodos = todos.length;
    const searchTodo = todos.filter(todo => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    });

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        setTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = todos.filter(todo => todo.text !== text);
        setTodos(newTodos);
    };
    // console.log('Render before useEffect');
    React.useEffect(() => {
        // console.log('useEffect');
    }, [todoTodos])
    // console.log('Render after useEffect');

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            todoTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchTodo,
            completeTodo,
            deleteTodo,
            todos,
            setTodos,
        }}>
            {props.children}
        </TodoContext.Provider>
    )

}

<TodoContext.Consumer></TodoContext.Consumer>

export { TodoContext, TodoProvider };