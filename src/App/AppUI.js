import React from "react";
import { useMediaQuery } from "react-responsive";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { CurrentDate } from "../CurrentDate";
import './AppUI.css';

function AppUI (props) {
    const isDesktopOrLapton = useMediaQuery({query : '(min-width: 1224px)'});
    const isMobile = useMediaQuery({query: '(max-width: 600px)'});
    return (
        <React.Fragment>

            <TodoCounter 
                total={props.totalToDos}
                completed={props.completedToDos}
            />

            <div className="TodoContainer">

                <div className="TodoSearch-CurrentDate_Container">
                <TodoSearch 
                    searchValue={props.searchValue}
                    setSearchValue={props.setSearchValue}
                />
                {isDesktopOrLapton && <CurrentDate/>}
                
                </div>
                

                <div className="Tasks_container">


                <TodoList>
                    {props.error && <p className="State-p">Error!</p>}

                    {props.loading && <p className="State-p">Loading...</p>}

                    {(!props.loading && !props.searchedToDos.length) && <p className="State-p">Create your first To Do!</p>}

                    {
                    props.searchedToDos.map(todo => (
                        <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed} 
                        onComplete={() => props.completeTodo(todo.text)}
                        onDelete={() => props.deleteToDo(todo.text)}

                        />
                    ))
                    }
                </TodoList>

                <CreateTodoButton />
                    
                </div>



            </div>



    </React.Fragment>
    );
}

export { AppUI }