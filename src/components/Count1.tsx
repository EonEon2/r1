import {ReactElement, useState} from 'react';

function Count1():ReactElement {

    console.log("Count1...............");

    const [count, setCount] = useState<number>(0);

    const handleClick = (): void => {
        setCount(count + 1);
    }

    return (
        <div>
            <div>
                {count}
            </div>
            <button onClick={handleClick}>INC</button>
        </div>
    );
}

export default Count1;