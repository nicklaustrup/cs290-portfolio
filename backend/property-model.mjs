// Models for the Property Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'What the Mongoose?! Could not connect to MongoDB.' });
    } else  {
        console.log('Eagle has landed - Successsfully connected to MongoDB.');
    }
});

// SCHEMA: Define the collection's schema.
const propertySchema = mongoose.Schema({
	item:        { type: String, required: true },
	quantity:    { type: Number, required: true },
    depositDate: { type: Date, required: true, default: Date.now},
	category:    { type: String, required: true }
});

// Compile the model from the schema 
// by defining the collection name "properties".
const properties = mongoose.model('Property', propertySchema);


// CREATE model *****************************************
const createProperty = async (item, quantity, depositDate, category) => {
    const property = new properties({ 
        item       : item, 
        quantity   : quantity, 
        depositDate: depositDate,
        category   : category     
    });
    console.log(`Saving property: ${property}`);
    return property.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveProperties = async () => {
    const query = properties.find();
    console.log(`Fetching all properties: ${query}`);
    return query.exec();
}

// RETRIEVE by ID
const retrievePropertyByID = async (_id) => {
    const query = properties.findById({_id: _id});
    console.log(`Fetching property: ${query}`);
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deletePropertyById = async (_id) => {
    const result = await properties.deleteOne({_id: _id});
    console.log(`Deleting property: ${_id}`);
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateProperty = async (_id, item, quantity, depositDate, category) => {
    const result = await properties.replaceOne({_id: _id }, {
        item       : item, 
        quantity   : quantity, 
        depositDate: depositDate,
        category   : category   
    });
    console.log(`Updating property: ${_id}`);
    return { 
        _id: _id, 
        item       : item, 
        quantity   : quantity, 
        depositDate: depositDate,
        category   : category   
    };
}

// EXPORT the variables for use in the controller file.
export { createProperty, retrieveProperties, retrievePropertyByID, updateProperty, deletePropertyById }