import {ReactElement} from "react";
import TodoList from "./TodoList.tsx";


function TodoIndex():ReactElement {
    return (
        <div>
            <TodoList></TodoList>
        </div>
    );
}

export default TodoIndex;