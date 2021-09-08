import React from 'react';
import { Link } from 'react-router-dom';
import PreviewAdd from '../../Components/PreviewAdd';
import GetAds
 from '../../services/GetAds';
export const MyAds = () => {

  const {data} = GetAds('http://localhost:3000/real_estate_ads/my_ads')
  return (
    <div className="container__home">
      <h3>Mes Annonces</h3>
        <h3>Voici la liste des annonces</h3>
      <ul className="container__all__adds--preview">
        {data && data.map((estate) => (
          <li key = {estate.id}>
    
          <Link to={`/annonces/${estate.id}`}>
            <PreviewAdd estate = {estate}/>
          </Link>
        </li>
        ))}
      </ul>
    </div>
  )
}

