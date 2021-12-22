import React from 'react';
import logo from '. / logo.svg ';
import './App.css';

import { BusinessList } from './BusinessList.js ';
import { SearchBar } from './SearchBar.js';

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}


function App() {
    return ( 
        <div className = "App" >
        <h1 > ravenous </h1>
        <!-- Add SearchBar component here -->
        <!-- Add BusinessList component here --> 
        <
        </div>
    );
}

export default App;