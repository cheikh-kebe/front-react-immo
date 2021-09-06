import React from 'react';
import { Link } from 'react-router-dom';
import PreviewAdd from '../../Components/PreviewAdd';
import '../Add/add.scss';

const Home = () => {

  return (
    <div className="container__home">
      <h1>HOME</h1>
      <h3>Voici la liste des annonces</h3>
      <ul className="container__all__adds--preview">
        <li>
          <Link to="/annonces/annonce1">
            <PreviewAdd />
          </Link>
        </li>
        <li>
          <Link to="/annonces/annonce2">
            <PreviewAdd />
          </Link>
        </li>
        <li>
          <Link to="/annonces/annonce3">
            <PreviewAdd />
          </Link>
        </li>
        <li>
          <Link to="/annonces/annonce4">
            <PreviewAdd />
          </Link>
        </li>
        <li>
          <Link to="/annonces/annonce5">
            <PreviewAdd />
          </Link>
        </li>
        <li>
          <Link to="/annonces/annonce6">
            <PreviewAdd />
          </Link>
        </li>
        <li>
          <Link to="/annonces/annonce7">
            <PreviewAdd />
          </Link>
        </li>
        <li>
          <Link to="/annonces/annonce8">
            <PreviewAdd />
          </Link>
        </li>
        <li>
          <Link to="/annonces/annonce9">
            <PreviewAdd />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home