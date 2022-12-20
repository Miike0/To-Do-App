import React from "react";
import './App.css';
import { AppUI } from "./AppUI";


function useLocalStorage(itemName, initialValue) {

  const [loading, setLoading] = React.useState(true);
  const [errorLoading, setErrorLoading] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
  
        let parsedItem;
        
      
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
      
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);

      } catch (error) {
        setErrorLoading(error);
      }
    
    }, 1000);
  });


  const saveItem = (newItem) => {
    try {
      const stringifyToDos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyToDos);

      setItem(newItem);

    } catch (error) {
      setErrorLoading(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    errorLoading,
  };
}

function App() {

  const {item: toDos, 
    saveItem: saveTodos, 
    loading,
    error,
  } = useLocalStorage('toDos', []);

  const [searchValue, setSearchValue] = React.useState('');

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

    saveTodos(newTodDos);
  };

  const deleteToDo = (text) => {
    const todoIndex = toDos.findIndex(
        todo => todo.text === text
    );
    
    const newToDos = [...toDos];

    newToDos.splice(todoIndex, 1);

    saveTodos(newToDos);
  };

  
  return (
      <AppUI
        loading={loading}
        error={error}
        totalToDos={totalToDos}
        completedToDos={completedToDos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedToDos={searchedToDos}
        completeTodo={completeTodo}
        deleteToDo={deleteToDo}
      />
  );
}

export default App;
