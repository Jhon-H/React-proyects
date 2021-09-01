import React from 'react';
import data from '../data/estudios.json';
import Card1 from './Card1';
import Card2 from './Card2';
import './Cards.css';

class Cards extends React.Component {

  render () {
    return (
      <div id="div-cards">
        <Card1 info={data.studies} branch="Estudios" />
        <Card1 info={data.experience} branch="Experiencia" />
        <Card2 info={data.certifications} branch="Certificaciones" />
        <Card2 info={data.skills} branch="Habilidades" />
      </div>
    );
  }
}

export default Cards;