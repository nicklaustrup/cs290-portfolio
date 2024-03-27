import React from 'react';

import { TbTrash, TbEdit } from 'react-icons/tb';


function Property({ property, onEdit, onDelete }) {
    return (
        <tr>
            <td>{property.item}</td>
            <td>{property.quantity}</td>
            <td>{property.depositDate.slice(0, 10)}</td>
            <td>{property.category}</td>
            <td className='icon'><TbTrash color="white" onClick={() => onDelete(property._id)} /></td>
            <td className='icon'><TbEdit color="white" onClick={() => onEdit(property)} /></td>
            <td></td>
        </tr>
    );
}

export default Property;