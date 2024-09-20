import {useState} from "react";
import {ICartItem, IProduct} from "../types/kiosk.ts";


export interface IUseKiosk {
    cartItems: ICartItem[];
    addToCart(product: IProduct): void;
    changeQty(pid: number, qty: number): void;
}

const useKiosk = ():IUseKiosk => {

    const [ cartItems, setCartItems] = useState<ICartItem[]>([]) // useState가 여러종류의 데이터타입을 사용하므로 ICartItem을 데이터타입으로 사용한다.

    //addToCart - 상태를 변경하는것이지 다른걸 변경하는것이 아니므로 void
    const addToCart = (product: IProduct) :void => {

        // 선택한 물건이 카트안에 있는지 확인해서 수량증가
        const target: ICartItem|undefined = cartItems.find( item => item.product.pid === product.pid )

        if(!target) {
            setCartItems([...cartItems, {product:product, qty:1}])
            return;
        }
        else{
            target.qty += 1
            setCartItems([...cartItems])
        }

    }

    // 수량변경 버튼
    const changeQty = (pid:number, qty:number):void => {

        const target : ICartItem | undefined = cartItems.find(item => {
            return item.product.pid === pid
        })

        if(!target) {return}

        target.qty += qty
        setCartItems([...cartItems])

    }


    return {cartItems, addToCart, changeQty}
}

export default useKiosk