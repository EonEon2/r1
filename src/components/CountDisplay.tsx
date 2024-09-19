import {ReactElement} from 'react';
import {CountNum} from "../types/count.ts";

interface CountDisplayProps {
    count:CountNum
}

function CountDisplay({count}:CountDisplayProps):ReactElement {
    return (
        <div>
            <h1>{count.num}</h1>
        </div>
    );
}

export default CountDisplay;