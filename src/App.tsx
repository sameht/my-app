import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PersonListingContainer } from './views/PersonListing.container/PersonListing.container';

function App() {
  return (
    <div className="App">
      <PersonListingContainer></PersonListingContainer>
    </div>
  );
}

export default App;
