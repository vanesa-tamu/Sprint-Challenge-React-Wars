import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${page}&format=json`)
      .then(data => {
        console.log(data.data.results) //shows an array of 10
      })
      .catch(err => console.error('error in GET', err))
  }, [])
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
