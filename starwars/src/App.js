import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, CardHeader
} from 'reactstrap';

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
        setData(data.data.results)
      })
      .catch(err => console.error('error in GET', err))
  }, [page])
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
        {data.map((char, index)=> {
          return (
            <Card key={index} >
              <CardHeader>{char.name}</CardHeader>
              <CardBody>
              <CardText>Birth Year: {char.birth_year}</CardText>
              <CardText>Height: {char.height}</CardText>
              <CardText>Eye Color: {char.eye_color}</CardText>
              </CardBody>
            </Card>
          )
        })}
      </Container>
    </div>
  );
}

export default App;

//name={char.name} height={char.height} birth={char.birth_year} eye={char.eye_color}
