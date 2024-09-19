import {ReactElement, useState} from 'react';

function Count1():ReactElement {

    console.log("Count1...............");

    const [count, setCount] = useState({num:1});

    // count : 현재값 , setCount: 변경되는값
    const handleClick = (): void => {

        setCount({num: count.num + 1});
    }

    return (
        <div className="border-2 w-full h-1/4 bg-amber-200 justify-center flex m-3 p-3">
            <div className="text-7xl">
                {count.num * 2}
            </div>
            <button className="border-2 p-2 justify-center" onClick={handleClick}>INC</button>
        </div>
    );
}

export default Count1;