import React, {useState} from 'react';
import {BrowserRouter, Route}  from 'react-router-dom';
import Photos from "./components/Photos"
import './App.css';

function App() {

  return (
    <div>
      <h1> Pick a Pic!</h1>
      <BrowserRouter>
        <div>
          <Route component={Photos} path="/" />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
