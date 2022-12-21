import React from "react";
import { useMediaQuery } from "react-responsive";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { CurrentDate } from "../CurrentDate";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import './AppUI.css';

function AppUI () {
    const value = React.useContext(TodoContext);

    const isDesktopOrLapton = useMediaQuery({query : '(min-width: 1224px)'});
    const isMobile = useMediaQuery({query: '(max-width: 600px)'});
    return (
        <React.Fragment>

            <TodoCounter/>

            <div className="TodoContainer">

                <div className="TodoSearch-CurrentDate_Container">
                <TodoSearch/>
                {isDesktopOrLapton && <CurrentDate/>}
                
                </div>
                

                <div className="Tasks_container">


                    <TodoList>
                    {value.error && <p className="State-p">Error!</p>}

                    {value.loading && <p className="State-p">Loading...</p>}

                    {(!value.loading && !value.searchedToDos.length) && <p className="State-p">Create your first To Do!</p>}

                    {
                    value.searchedToDos.map(todo => (
                        <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed} 
                        onComplete={() => value.completeTodo(todo.text)}
                        onDelete={() => value.deleteToDo(todo.text)}

                        />
                    ))
                    }
                </TodoList>

                    {!!value.openModal && (
                        <Modal>
                            <p>Prueba</p>
                        </Modal>
                    )}

                <CreateTodoButton 
                    setOpenModal={value.setOpenModal}
                />
                    
                </div>



            </div>



    </React.Fragment>
    );
}

export { AppUI }