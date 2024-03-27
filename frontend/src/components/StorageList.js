import React from 'react';
import Property from './Property';
import { TbSquarePlus } from "react-icons/tb";
import { Link } from 'react-router-dom';


// Change the function names and parameters 
// to fit your portfolio topic and schema.

function StorageList({ properties, onDelete, onEdit }) {
    return (
        <table id="properties">
            <caption> Here is a central place for you to track things in your storage locker. You can add, edit, delete items by clicking the corresponding icons.
                Get started by clicking the <strong>Add</strong> icon in the table header.</caption>
            <thead>
                <tr className='tableHeader'>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Deposit Date</th>
                    <th>Category</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th><Link to="/create" title="Add Item" ><TbSquarePlus className='icon-tabler' /></Link></th>
                </tr>
            </thead>
            <tbody>
                {properties.map((property, i) =>
                    <Property
                        property={property}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />)}
            </tbody>
        </table>
    );
}

export default StorageList;
