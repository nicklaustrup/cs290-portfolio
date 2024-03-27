import React from "react";
import ProductQuantity from "./ProductQuantity";

function ProductRow({ product, updateTotalQuantity, updateTotalPrice }) {

    return (<>
    <tr>
        <td>{product.company}</td>
        <td>{product.product}</td>
        <td>{product.price.toLocaleString()}</td>
        <td><ProductQuantity product={product} updateTotalQuantity={updateTotalQuantity} updateTotalPrice={updateTotalPrice} /></td>
    </tr>
        </>);
}

export default ProductRow;