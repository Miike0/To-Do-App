import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function ToDoProvider(props) {

    const {item: toDos, 
        saveItem: saveToDos, 
        loading,
        error,
      } = useLocalStorage('toDos', []);
    
      const [searchValue, setSearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(false);
    
      const completedToDos = toDos.filter(todo =>  !!todo.completed).length;
      const totalToDos = toDos.length;
    
      let searchedToDos = [];
    
      if (searchedToDos.length >= 1) {
        searchedToDos = toDos;
      } else {
    
        searchedToDos = toDos.filter(todo => {
          const toDoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
    
          return toDoText.includes(searchText);
        });
    
      }
    
      const completeTodo = (text) => {
        const todoIndex = toDos.findIndex(
            todo => todo.text === text
        );
        
        const newTodDos = [...toDos];
    
        newTodDos[todoIndex].completed = true;
    
        saveToDos(newTodDos);
      };
    
      const deleteToDo = (text) => {
        const todoIndex = toDos.findIndex(
            todo => todo.text === text
        );
        
        const newToDos = [...toDos];
    
        newToDos.splice(todoIndex, 1);
    
        saveToDos(newToDos);
      };

      const addToDo = (text) => {
        const newToDos = [...toDos];
    
        newToDos.push({
          text: text,
          completed: false,

        });
    
        saveToDos(newToDos);
      };
    

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            addToDo,
            completeTodo,
            deleteToDo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, ToDoProvider };