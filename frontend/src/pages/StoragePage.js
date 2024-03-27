import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import StorageList from '../components/StorageList';

function StoragePage({ setProperty }) {
    const backend = process.env.BACKEND;
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [properties, setProperties] = useState([]);

    // RETRIEVE the entire list of properties
    const loadProperties = async () => {
        console.log('Backend URL:', backend);
        const response = await fetch(`${backend}/properties`);
        const properties = await response.json();
        setProperties(properties);
    } 
    

    // UPDATE a single property
    const onEditProperty = async property => {
        setProperty(property);
        redirect("/update");
    }


    // DELETE a single property 
    const onDeleteProperty = async _id => {
        const response = await fetch(`${backend}/properties/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch(`${backend}/properties`);
            const properties = await getResponse.json();
            setProperties(properties);
        } else {
            console.error(`Could not delete property id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the properties
    useEffect(() => {
        loadProperties();
    }, []);

    // DISPLAY the properties
    return (
        <>
            <h2>Storage Locker</h2>
            <p>This page demonstrates building multi-layer React components and performing CRUD operations on MonogDB. The add and edit icons redirect to another page while edit directly removes the object from the DB.</p>
            <StorageList 
                properties={properties} 
                onEdit={onEditProperty} 
                onDelete={onDeleteProperty} 
            />
        </>
    );
}

export default StoragePage;