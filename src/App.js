import React, {useState} from 'react';
import {BrowserRouter, Route}  from 'react-router-dom';
import Photos from "./components/Photos"
import './App.css';

function App() {

  return (
    <div className="container">
      <h1>NASA_GRAM!</h1>
      <p>This is my submission for the Front End Developer Internship with Shopify. It pulls info from the NASA APOD.</p>
      <p>I tried to have it load more than one picture, but I was unsuccessful. With more time I could have gotten that feature working. Thank you for your time and I hope I am considered for this role.</p>
      <BrowserRouter>
        <div>
          <Route component={Photos} path="/" />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
