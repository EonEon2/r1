import {ReactElement} from "react";

interface Props {
    fn: () => void;
}

function CountButtons(props:Props):ReactElement { // props : 하위에게 물려주기

    console.log(props);
    return (
        <div>
            <button onClick={props.fn}>INC</button>
        </div>
    );
}

export default CountButtons;