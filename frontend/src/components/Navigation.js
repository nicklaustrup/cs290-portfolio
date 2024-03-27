import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './Nav.css';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;

      // Check if the user has scrolled down enough to trigger the shrinking effect
      setIsScrolled(scrollTop > 180);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run this effect only once on component mount

  return (
    <nav className={isScrolled ? 'global-scrolled' : 'global'}>
      {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
      <Link to="/">Home</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/storage">Storage</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/order">Order</Link>
      <Link to="/contact">Contact</Link>

      {/* <Link to="../staff.html">Staff</Link> */}
    </nav>
  );
}

export default Navigation;
