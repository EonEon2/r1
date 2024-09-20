import {IProduct} from "../../types/kiosk.ts";
import {ReactElement} from "react";

// 어떤애들을 받을건지 인터페이스로 뺀다 (props)
interface ProductListProps {
    products: IProduct[];
    addToCart: (product: IProduct) => void;
}

function ProductList({products, addToCart}: ProductListProps): ReactElement {

    const productLI = products.map((product: IProduct) => { // 람다식에 {} 이면 return
        const {pid, pname, price, img} = product; //
        return (
            <li className='border-2 w-1/4' key={pid} onClick={() => addToCart(product)}>
                {img && <img src={img} alt={pname} />}
                {pname} - {price}
            </li>
        ) // img가 있다면 ~
    })

    return (
        <div>
            <ul className='flex flex-wrap'>
                {productLI}
            </ul>
        </div>
    );
}

export default ProductList;