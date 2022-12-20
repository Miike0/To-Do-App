import React from "react";
import './App.css';
import { AppUI } from "./AppUI";

// const defaultToDos = [
//     { text: 'Prueba 1', completed: false},
//     { text: 'Prueba 2', completed: false},
//     { text: 'Prueba 3', completed: true},
//     { text: 'Prueba 4', completed: false},
//     { text: 'Prueba 5', completed: false},
//     { text: 'Prueba 6', completed: true},
//     { text: 'Prueba 7', completed: false},
//     { text: 'Prueba 8', completed: false},
//     { text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', completed: true},


// ];

function App() {

  const localStorageToDos = localStorage.getItem('TODOS_V1');
  
  let parsedToDos;

  if(!localStorageToDos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedToDos = [];

  } else {
    parsedToDos = JSON.parse(localStorageToDos);
  }

  const [toDos, setToDos] = React.useState(parsedToDos);

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

    saveChangesInLS(newTodDos);
  };

  const deleteToDo = (text) => {
    const todoIndex = toDos.findIndex(
        todo => todo.text === text
    );
    
    const newToDos = [...toDos];

    newToDos.splice(todoIndex, 1);

    saveChangesInLS(newToDos);
  };

  const saveChangesInLS = (saveChanges) => {
    const stringifyToDos = JSON.stringify(saveChanges);
    localStorage.setItem('TODOS_V1', stringifyToDos);

    setToDos(saveChanges);
  };

  
  return (
      <AppUI
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
