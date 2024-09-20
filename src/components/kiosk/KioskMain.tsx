import ProductList from "./ProductList.tsx";
import CartDiv from "./CartDiv.tsx";
import {IProduct} from "../../types/kiosk.ts";


function KioskMain() {

    const products: IProduct[] = [
        {pid:1, pname:'M1', price:3000},
        {pid:2, pname:'M2', price:4000},
        {pid:3, pname:'M3', price:5000},
        {pid:4, pname:'M4', price:6000},
        {pid:5, pname:'M5', price:7000},
    ]

    return (
        <div>
            <ProductList products={products}></ProductList>
            <CartDiv></CartDiv>
        </div>
    );
}

export default KioskMain;