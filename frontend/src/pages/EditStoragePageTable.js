import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { TbSquarePlus } from "react-icons/tb";


export const EditPropertyPageTable = ({ propertyToEdit }) => {
 
    const [item, setItem]            = useState(propertyToEdit.item);
    const [quantity, setQuantity]    = useState(propertyToEdit.quantity);
    const [depositDate, setDate]     = useState(propertyToEdit.depositDate);
    const [category, setCategory]    = useState(propertyToEdit.category);
    
    const redirect = useNavigate();

    const editProperty = async () => {
        const response = await fetch(`/properties/${propertyToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                item       : item, 
                quantity   : quantity, 
                depositDate: depositDate,
                category   : category  
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`${propertyToEdit.item} updated successfully!`);
        } else {
            const errMessage = await response.json();
            alert(`Problem updating item. Status: ${response.status}. Error message: ${errMessage.Error}`);
        }
        redirect("/storage");
    }

    return (
        <>
        <article>
            <h2>Edit an item</h2>
            <p>Update an item you've added to storage.</p>
            <table id="properties">
                <caption>What item are you updating?</caption>
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
                <td className="editCell">
                        <input
                            type="text"
                            placeholder="Item Name"
                            value={item}
                            onChange={e => setItem(e.target.value)} 
                            id="item" />
                    </td>

                    <td className="editCell">
                        <input
                            type="number"
                            placeholder="Number of Items"
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)} 
                            id="quantity" />
                    </td>

                    <td className="editCell">
                        <input
                            type="date"
                            value={depositDate.slice(0, 10)}
                            placeholder="YYYY-MM-DD"
                            onChange={e => setDate(e.target.value)} 
                            id="depositDate" />
                    </td>

                    <td className="editCell">
                        <input
                            type="text"
                            placeholder="Type of Item"
                            value={category}
                            onChange={e => setCategory(e.target.value)} 
                            id="category" />
                    </td>

                    <td className="editCell">
                        <button
                            type="submit"
                            onClick={editProperty}
                            id="submit"
                        >Save</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditPropertyPageTable;