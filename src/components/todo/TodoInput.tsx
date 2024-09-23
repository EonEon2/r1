import {ITodo} from "../../types/todo.ts";
import {ChangeEvent, useState} from "react";


const initState:ITodo = {
    title: '',
    writer: '',
    dueDate: '',
}

function TodoInput() {

    const [todo, setTodo] = useState<ITodo>(initState)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        // react는 1way이므로 input 처리할때 state를 따로따로 만들어줘야하므로 이러한 방법을 사용하지않고, 하나의 객체로 사용하기 위해서 해당 이벤트를 사용한다.
        console.log(e.target.value)
        console.log(e.target.name)

        todo[e.target.name] = e.target.value

        setTodo({...todo})
    }

    return (
        <div className="flex flex-col space-y-4 w-96 mx-auto">
            <label htmlFor="title" className="text-sm font-semibold text-gray-700">Title</label>
            <input
                type="text"
                name="title"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter Title"
                value={todo.title}
                onChange={e => handleChange(e)}
            />

            <label htmlFor="writer" className="text-sm font-semibold text-gray-700">Writer</label>
            <input
                type="text"
                name="writer"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter Title"
                value={todo.writer}
                onChange={e => handleChange(e)}
            />

            <label htmlFor="dueDate" className="text-sm font-semibold text-gray-700">DueDate</label>
            <input
                type="date"
                name="dueDate"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter Title"
                value={todo.dueDate}
                onChange={e => handleChange(e)}
            />
        </div>
    );
}

export default TodoInput;