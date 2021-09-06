import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="container__home">
      <h1>HOME</h1>
      <h3>Voici la liste des annonces</h3>
      <ul>
        <li><Link to="/annonces/annonce1">Annonce 1</Link></li>
        <li><Link to="/annonces/annonce2">Annonce 2</Link></li>
        <li><Link to="/annonces/annonce3">Annonce 3</Link></li>
        <li><Link to="/annonces/annonce4">Annonce 4</Link></li>
        <li><Link to="/annonces/annonce5">Annonce 5</Link></li>
        <li><Link to="/annonces/annonce6">Annonce 6</Link></li>
        <li><Link to="/annonces/annonce7">Annonce 7</Link></li>
        <li><Link to="/annonces/annonce8">Annonce 8</Link></li>
        <li><Link to="/annonces/annonce9">Annonce 9</Link></li>
      </ul>
    </div>
  );
};

export default Home