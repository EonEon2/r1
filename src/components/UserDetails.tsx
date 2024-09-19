import {ReactElement, ReactNode} from 'react';
import {UserData} from "../types/count.ts";

interface UserProps {
    target:UserData
    showUser:(user:UserData) => void
    children:ReactNode
}

function UserDetails({target, showUser, children}: UserProps): ReactElement {

    console.log(target);

    console.log(showUser);

    if(target.age <= 18){
        return (
            <h1>Minor</h1>
        )
    }


    return (
        <div>
            <h1>AAAAAAAAA</h1>

            <div className='row text-7xl bg-red-500'>
                {children}
            </div>

        </div>
    );
}

export default UserDetails;