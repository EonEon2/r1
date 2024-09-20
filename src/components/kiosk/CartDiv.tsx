import {ICartItem} from "../../types/kiosk.ts";
import {ReactElement} from "react";


interface CartDivProps {
    cartItems: ICartItem[]
}

function CartDiv({cartItems}: CartDivProps): ReactElement {

    console.log(cartItems)

    const listLI = cartItems.map(item => {
        const {product, qty} = item
        return <li key={product.pid}> {product.pname} : {qty}</li>
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