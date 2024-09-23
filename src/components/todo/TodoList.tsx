import React, {ReactElement, useEffect, useState} from "react";
import {IPageResponse, ITodo} from "../../types/todo.ts";
import {getTodoList} from "../../api/todoAPI.ts";
import LoadingComponent from "../common/LoadingComponent.tsx";

const initialState: IPageResponse = {
    content: [],
    first: false,
    last: false,
    number: 0,
    size: 0,
    totalElements: 0
}

interface TodoListProps {
    pageNum:number
    refresh:boolean
}

function TodoList({pageNum, refresh}:TodoListProps):ReactElement {

    const [pageData, setPageData] = useState<IPageResponse>(initialState);
    const [loading, setLoading] = useState(false); // loading모듈

    useEffect(() => { // page || refresh의 값이 변경되면 메소드가 실행되도록

        setLoading(true); // useEffect를 들어왔을때 로딩창 켜짐

        getTodoList(pageNum).then(data => {
            setPageData(data)
            setTimeout(()=> {
                setLoading(false) // 데이터 받고 로딩창꺼짐
            }, 1000)
        })

    },[pageNum, refresh])

    const TodoLI = pageData?.content?.map( (todo:ITodo) => { // 페이지데이터와 컨텐츠가 있을때만 return하기
        return (
            <li key={todo.mno}>
                {todo.mno} -
                {todo.title} -
                {todo.writer} -
                {todo.dueDate}
            </li>
        )

    })


    return (
        <div>
            <div>Todo List</div>
            {loading && <LoadingComponent/>}
            <ul>
                {TodoLI}
            </ul>
        </div>
    );
}

export default TodoList;