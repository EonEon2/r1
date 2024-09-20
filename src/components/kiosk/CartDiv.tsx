import {ICartItem} from "../../types/kiosk.ts";
import {ReactElement} from "react";


interface CartDivProps {
    cartItems: ICartItem[]
    changeQty: (pid:number, qty:number) => void;
}

function CartDiv({cartItems, changeQty}: CartDivProps): ReactElement {

    console.log(cartItems)

    const listLI = cartItems.map(item => {
        const {product, qty} = item
        return (
            <li key={product.pid} className='flex flex-wrap border-2 gap-3'>
                {product.img && <img className='w-1/4' src={product.img}/>}
                {product.pname} : {qty} : {product.price * qty}
                <button onClick={() => changeQty(product.pid, 1)}> + </button>
                <button onClick={() => changeQty(product.pid, -1)}> - </button>
        </li>
        )
    })


    return (
        <div>
            <ul>
                {listLI}
            </ul>
        </div>
    );
}

export default CartDiv;