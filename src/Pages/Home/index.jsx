import React from 'react';
import { Link } from 'react-router-dom';
import PreviewAdd from '../../Components/PreviewAdd';
import '../Add/add.scss';
import getAds from '../../services/GetAds';

const Home = () => {
  const {data} = getAds('http://localhost:3000/real_estate_ad/index') //error, loading
  console.log(data)
  return (
    <div className="container__home">
      <h1>HOME</h1>
      <h3>Voici la liste des annonces</h3>
      <ul className="container__all__adds--preview">
        {data && data.map((estate) => (
          <li key = {estate.id}>
          <Link to="/annonces/annonce1">
            <PreviewAdd estate = {estate}/>
          </Link>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Home