import React from 'react';
import Map from "./components/Map";
import './App.css';
import AddData from './components/AddData';

function App() {
  return (
    <div className="App">
      <h1>Map hackathon</h1>
       <Map />
       <AddData />
    </div>
  );
}

export default App;

//  const TOKEN = 'pk.eyJ1IjoibWFoYWRpLW5zdSIsImEiOiJjazI3Nmt1aWgwczNoM21reGgzZzhtNGJiIn0.vxdLJWEwFqL_w5nPmtIthg';
