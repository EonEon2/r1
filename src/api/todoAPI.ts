import {IPageResponse, ITodo} from "../types/todo.ts";
import axios from "axios";


const host:string = 'http://localhost:8088/api/v1/todos'


export const getTodoList = async (page?: number, size?: number): Promise<IPageResponse> => {

    const pageValue:number = page || 1 // 없으면 1
    const sizeValue:number = size || 10 // 없으면 10

    const res = await axios.get(`${host}/list?page=${pageValue}&size=${sizeValue}`)

    console.log(res.data)
    return res.data


}

export const postTodo = async (todo:ITodo): Promise<number> => {

    const res = await axios.post(`${host}`, todo)

    return res.data.mno
    // number타입의 mno 반환
}