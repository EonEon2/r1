import {ReactElement, useState} from 'react';
import CountButtons from "./CountButtons.tsx";
import CountDisplay from "./CountDisplay.tsx";
import {CountNum} from "../types/count.ts";





function Count1():ReactElement {

    console.log("Count1...............");

    const [count, setCount] = useState<CountNum>({num:1});

    // count : 현재값 , setCount: 변경되는값
    const changeNum = (): void => {

        setCount({num: count.num + 1});
    }

    return (
        <div className="border-2 w-full h-1/4 bg-amber-200 justify-center flex m-3 p-3">
            <CountDisplay count={count}></CountDisplay>
            <CountButtons fn={changeNum}></CountButtons>
        </div>
    );
}

export default Count1;