import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

const toDos = [
    { text: 'Prueba 1', completed: false},
    { text: 'Prueba 2', completed: false},
    { text: 'Prueba 3', completed: false},

];

function App() {
  return (
    <React.Fragment>

      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {
          toDos.map(todo => (
            <TodoItem key={todo.text} text={todo.text}/>
          ))
        }
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
