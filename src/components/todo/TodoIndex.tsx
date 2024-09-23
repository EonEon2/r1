import {ReactElement, useState} from "react";
import TodoList from "./TodoList.tsx";
import TodoInput from "./TodoInput.tsx";


function TodoIndex():ReactElement {

    const [page, setPage] = useState<number>(2);
    const [refresh, setRefresh] = useState(false)
    const changePage = (pageNum: number) => {
        setPage(pageNum);
        setRefresh(!refresh);
    }

    return (
        <div className='flex flex-col'>
            <TodoInput changePage ={changePage}></TodoInput>
            <TodoList pageNum={page} refresh={refresh} changePage ={changePage}></TodoList>
        </div>
    );
}

export default TodoIndex;