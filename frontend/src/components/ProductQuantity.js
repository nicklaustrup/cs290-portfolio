import React, { useState } from 'react';
import { TiPlus, TiMinus } from "react-icons/ti";


function ProductQuantity({ product, updateTotalQuantity, updateTotalPrice }) {

    const [quantity, setQuantity] = useState(0);

    const increase = () => {
        setQuantity(quantity + 1);
        updateTotalQuantity(1);
        updateTotalPrice(product.price);
    };
    
    const decrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            updateTotalQuantity(-1);
            updateTotalPrice(-product.price);
        }
    };


    return(<>
    <TiMinus onClick={decrease} />
    {quantity}
    <TiPlus onClick={increase} />
    </>);
}
export default ProductQuantity;