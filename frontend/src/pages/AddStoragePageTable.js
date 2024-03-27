import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddStoragePageTable = () => {

    const [item, setItem]           = useState('');
    const [quantity, setQuantity]    = useState('');
    const [depositDate, setDate]     = useState('');
    const [category, setCategory]    = useState('');
    
    const redirect = useNavigate();

    const addProperty = async () => {
        const newProperty = { item, quantity, depositDate, category };
        const response = await fetch('https://nicklaustrup-cs290-portfolio.onrender.com/properties', {
            method: 'post',
            body: JSON.stringify(newProperty),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Successfully added ${newProperty.item}!`);
        } else {
            alert(`Problem adding item. Response status = ${response.status}`);
        }
        redirect("https://nicklaustrup-cs290-project.onrender.com/storage");
    };


    return (
        <>
        <article>
            <h2>Add Item</h2>
            <p>Add an item to storage.</p>
            
            <table id="properties">
                <caption>Which item are you adding?</caption>
                <thead>
                    <tr className='tableHeader'>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Deposit Date</th>
                        <th>Category</th>
                        <th>Save</th>
                    </tr>
                </thead>
                <tbody>
                <tr className='editRow'>
                <td className='editCell'>
                        <input
                            type="text"
                            placeholder="Name"
                            value={item}
                            onChange={e => setItem(e.target.value)} 
                            id="item"
                            required 
                            autoFocus/>
                    </td>

                    <td className='editCell'>
                        <input
                            type="number"
                            placeholder="Quantity"
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)} 
                            id="quantity" 
                            required/>
                    </td>

                    <td className='editCell'>
                        <input
                            type="date"
                            value={depositDate.slice(0, 10)}
                            placeholder="YYYY-MM-DD"
                            onChange={e => setDate(e.target.value)} 
                            id="depositDate" 
                            required/>
                    </td>

                    <td className='editCell'>
                        <input
                            type="text"
                            placeholder="Category"
                            value={category}
                            onChange={e => setCategory(e.target.value)} 
                            id="category" 
                            required/>
                    </td>

                    <td className='editCell'>
                    
                        <button
                            type="submit"
                            onClick={addProperty}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddStoragePageTable;