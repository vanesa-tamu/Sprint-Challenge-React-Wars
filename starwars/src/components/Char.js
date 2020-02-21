import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Container, CardHeader, CardFooter, Col
  } from 'reactstrap';
import './StarWars.css';

function Char(props){
    return(
        <Col xs='6' md='6' xl='6'>
        <Card  className='card-container'>
          <CardHeader>{props.char.name}</CardHeader>
          <CardBody>
          <CardText>Birth Year: {props.char.birth_year}</CardText>
          <CardText>Height: {props.char.height}</CardText>
          <CardText>Eye Color: {props.char.eye_color}</CardText>
          <CardText>Weight: {props.char.mass}</CardText>
          </CardBody>
        </Card>
        </Col>
    )
}

export default Char