import React from "react";
import { useMediaQuery } from "react-responsive";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { CurrentDate } from "./CurrentDate";
import './App.css';

const toDos = [
    { text: 'Prueba 1', completed: false},
    { text: 'Prueba 2', completed: false},
    { text: 'Prueba 3', completed: true},
    { text: 'Prueba 4', completed: false},
    { text: 'Prueba 5', completed: false},
    { text: 'Prueba 6', completed: true},
    { text: 'Prueba 7', completed: false},
    { text: 'Prueba 8', completed: false},
    { text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', completed: true},


];

function App() {
  const isDesktopOrLapton = useMediaQuery({query : '(min-width: 1224px)'});
  const isMobile = useMediaQuery({query: '(max-width: 600px)'});
  return (
    <React.Fragment>

      <TodoCounter />

      <div className="TodoContainer">

        <div className="TodoSearch-CurrentDate_Container">
          <TodoSearch />
          {isDesktopOrLapton && <CurrentDate/>
}
        </div>
        

        <div className="Tasks_container">


          <TodoList>
            {
              toDos.map(todo => (
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
              ))
            }
          </TodoList>

          <CreateTodoButton />
            
        </div>



      </div>



    </React.Fragment>
  );
}

export default App;
