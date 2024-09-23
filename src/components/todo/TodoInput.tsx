import {ITodo} from "../../types/todo.ts";
import {ChangeEvent, useState} from "react";
import {postTodo} from "../../api/todoAPI.ts";
import LoadingComponent from "../common/LoadingComponent.tsx";
import ResultModal from "../common/ResultModal.tsx";


const initState:ITodo = {
    title: '',
    writer: '',
    dueDate: '',
}

interface TodoInputProps {
    changePage: (p:number) => void
}

function TodoInput({changePage}: TodoInputProps) {

    const [todo, setTodo] = useState<ITodo>({...initState})
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState<number>(0);

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        // react는 1way이므로 input 처리할때 state를 따로따로 만들어줘야하므로 이러한 방법을 사용하지않고, 하나의 객체로 사용하기 위해서 해당 이벤트를 사용한다.
        console.log(e.target.value)
        console.log(e.target.name)

        // @ts-ignore
        todo[e.target.name] = e.target.value

        setTodo({...todo})
    }

    const handleClick = () => {
        setLoading(true)

        postTodo(todo).then(number => {
            setLoading(false)
            setResultData(number)
        })
    }

    const clearResult = ():void => {
        setResultData(0)
        setTodo(initState) // 내용초기화
        changePage(1) // 1번 페이지으로
    }

    return (
        <div className="flex flex-col space-y-4 w-96 mx-auto">

            {loading && <LoadingComponent/>}

            {resultData !== 0 && <ResultModal msg={`${resultData}번 등록완료`} callback={clearResult} /> }

            <label  className="text-sm font-semibold text-gray-700">Title</label>
            <input
                type="text"
                name="title"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter Title"
                value={todo.title}
                onChange={e => handleChange(e)}
            />

            <label  className="text-sm font-semibold text-gray-700">Writer</label>
            <input
                type="text"
                name="writer"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter Title"
                value={todo.writer}
                onChange={e => handleChange(e)}
            />

            <label className="text-sm font-semibold text-gray-700">DueDate</label>
            <input
                type="date"
                name="dueDate"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter Title"
                value={todo.dueDate}
                onChange={e => handleChange(e)}
            />

            <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
                onClick={handleClick}
            >
                Submit
            </button>
        </div>
    );
}

export default TodoInput;