// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
// ./data/products.js
import TopicsPage from './pages/TopicsPage';
import HomePage from './pages/HomePage';
import StoragePage from './pages/StoragePage';
import AddStoragePageTable from './pages/AddStoragePageTable';
import EditStoragePageTable from './pages/EditStoragePageTable';
import GalleryPage from './pages/GalleryPage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';
import ContactSentPage from './pages/ContactSentPage';
// ./pages/GalleryPage.js (Extra Credit)
// ./pages/OrderPage.js (Extra Credit)
// ./pages/ContactPage.js (Extra Credit)

// Define the function that renders the content in Routes, using State.
function App() {

  // const [movie, setMovieToEdit] = useState([])
  const [property, setPropertyToEdit] = useState();
  const [contact, setContact] = useState();
  

  return (
    <>
      <BrowserRouter>

        <header>
        <img className="image" src="android-chrome-192x192.png" alt="Nick Laustrup" /><h1 className="text">Nick Laustrup</h1>
          <p>Portfolio website built using React, MongoDB, Express, and Node.</p>
        </header>

        <Navigation />

        <main>
          <section>

            <Routes>

              {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
              <Route path="/" element={<HomePage />} />
              <Route path="/topics" element={<TopicsPage />} />
              <Route path="/storage" element={<StoragePage setProperty={setPropertyToEdit}/>} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/contact" element={<ContactPage setContact={setContact} />} />
              <Route path="/contactsent" element={<ContactSentPage contact={contact} />} />

              {/* Routes for adding and editing storage items */}
              <Route path="/create" element={<AddStoragePageTable />} />
              <Route path="/update" element={<EditStoragePageTable propertyToEdit={property} />} />

            </Routes>

          </section>
        </main>

        <footer>
          <p>
            &copy; 2024 Nick Laustrup
          </p>
        </footer>

      </BrowserRouter>
    </>
  );
}

export default App;