import {ReactElement} from "react";
import TodoList from "./TodoList.tsx";
import TodoInput from "./TodoInput.tsx";


function TodoIndex():ReactElement {
    return (
        <div className='flex flex-col'>
            <TodoInput></TodoInput>
            <TodoList></TodoList>
        </div>
    );
}

export default TodoIndex;