import React, { useState } from "react";
import ProductRow from "../components/ProductRow";
import products from "../data/products";


function OrderPage() {

    const [totalQuantity, setTotalQuantity] = useState(0);

    const [totalPrice, setTotalPrice] = useState(0);
    const updateTotalPrice = (rowPrice) => {
        setTotalPrice(totalPrice + rowPrice);
    };


    return (
        <>
            <h2>Order</h2>
            <article>
                <p>This page demonstrates passing state value's across multiple React components in a table.</p>
                        <table id="productTable">
                            <caption>Choose any product and quantity that you'd like.</caption>

                            <thead>
                                <tr className="tableHeader">
                                    <th>Brand</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>

                            <tbody>
                                {products.map( (product, i) => 
                                    <ProductRow 
                                        product={product} 
                                        updateTotalQuantity={(quantity) => setTotalQuantity(totalQuantity + quantity)} 
                                        updateTotalPrice={updateTotalPrice}
                                        key={i} 
                                    />)}
                                <tr>
                                    <td></td>
                                    <td>Order Total:</td>
                                    <td>{totalPrice.toFixed(2)}</td>
                                    <td>{totalQuantity}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                            </tfoot>
                        </table>
            </article>
        </>
    );
}
export default OrderPage;