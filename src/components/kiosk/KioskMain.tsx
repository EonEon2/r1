import ProductList from "./ProductList.tsx";
import CartDiv from "./CartDiv.tsx";
import {ICartItem, IProduct} from "../../types/kiosk.ts";
import {useState} from "react";


function KioskMain() {

    const products: IProduct[] = [
        {pid:1, pname:'M1', price:3000, img:'http://localhost:8081/food/M1.jpeg'},
        {pid:2, pname:'M2', price:4000, img:'http://localhost:8081/food/M2.jpeg'},
        {pid:3, pname:'M3', price:5000, img:'http://localhost:8081/food/M3.jpeg'},
        {pid:4, pname:'M4', price:6000, img:'http://localhost:8081/food/M4.jpeg'},
        {pid:5, pname:'M5', price:7000, img:'http://localhost:8081/food/M5.jpeg'},
    ]

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


    return (
        <div className='w-full h-full p-3 flex'>
            <div className='w-2/3 bg-amber-400 m-2 p-2'>
                <ProductList products={products} addToCart={addToCart}></ProductList>
            </div>

            <div className='w-1/3 bg-fuchsia-200 m-2 p-2'>
                <CartDiv cartItems = {cartItems}></CartDiv>
            </div>
        </div>
    );
}

export default KioskMain;