import ProductList from "./ProductList.tsx";
import CartDiv from "./CartDiv.tsx";
import {IProduct} from "../../types/kiosk.ts";
import useKiosk, {IUseKiosk} from "../../hooks/useKiosk.ts";


function KioskMain() {

    const products: IProduct[] = [
        {pid:1, pname:'M1', price:3000, img:'http://localhost:8081/food/M1.jpeg'},
        {pid:2, pname:'M2', price:4000, img:'http://localhost:8081/food/M2.jpeg'},
        {pid:3, pname:'M3', price:5000, img:'http://localhost:8081/food/M3.jpeg'},
        {pid:4, pname:'M4', price:6000, img:'http://localhost:8081/food/M4.jpeg'},
        {pid:5, pname:'M5', price:7000, img:'http://localhost:8081/food/M5.jpeg'},
    ]

    const {changeQty,cartItems,addToCart}:IUseKiosk = useKiosk()



    return (
        <div className='w-full h-full p-3 flex'>
            <div className='w-2/3 bg-amber-400 m-2 p-2'>
                <ProductList products={products} addToCart={addToCart}></ProductList>
            </div>

            <div className='w-1/3 bg-fuchsia-200 m-2 p-2'>
                <CartDiv cartItems={cartItems} changeQty={changeQty}></CartDiv>
            </div>
        </div>
    );
}

export default KioskMain;