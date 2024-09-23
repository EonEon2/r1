import React, {ReactElement, useEffect, useState} from "react";
import {IPageResponse, ITodo} from "../../types/todo.ts";
import {getTodoList} from "../../api/todoAPI.ts";
import LoadingComponent from "../common/LoadingComponent.tsx";
import PageComponent from "../common/PageComponent.tsx";

const initialState: IPageResponse = {
    content: [],
    first: false,
    last: false,
    number: 0,
    size: 0,
    totalElements: 0,
    totalPages: 0
}

interface TodoListProps {
    pageNum:number
    refresh:boolean
    changePage: (p:number) => void
}

function TodoList({pageNum, refresh, changePage}:TodoListProps):ReactElement {

    const [pageData, setPageData] = useState<IPageResponse>(initialState);
    const [loading, setLoading] = useState(false); // loading모듈

    useEffect(() => { // page || refresh의 값이 변경되면 메소드가 실행되도록

        setLoading(true); // useEffect를 들어왔을때 로딩창 켜짐

        getTodoList(pageNum).then(data => {
            setPageData(data)
            setTimeout(()=> {
                setLoading(false) // 데이터 받고 로딩창꺼짐
            }, 600)
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
            <div>
                <PageComponent pageResponse={pageData} changePage={changePage}></PageComponent>
            </div>
        </div>
    );
}

export default TodoList;