// 단축키 rsf
import {ReactElement} from "react";

function MyHello(): ReactElement { // ReactElement는 return타입인데, 안줘도 에러는 나오지않음
    return (
        <div className="text-3xl m-2 p-2 border-2">
            <div>My Hello World</div>
        </div>
    );
}

export default MyHello;