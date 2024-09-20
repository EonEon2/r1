import {IProduct} from "../../types/kiosk.ts";

// 어떤애들을 받을건지 인터페이스로 뺀다 (props)
interface ProductListProps {
    products: IProduct[];
}

function ProductList({products}: ProductListProps): JSX.Element {

    console.log(products);

    const productLI = products.map((product: IProduct) => { // 람다식에 {} 이면 return
        const {pid, pname, price, img} = product; //
        return (
            <li className='border-2 w-1/4' key={pid}>
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