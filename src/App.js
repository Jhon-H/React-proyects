import React from 'react'
import Cards from './components/Cards';
import Userdata from './components/Userdata';
import './App.css';


function App () {
  return (
    <div id="main">
      <Userdata />
      <Cards /> 
    </div>
  );
}

export default App;