import React from 'react';
import { useParams } from 'react-router-dom';
import GetAds from '../../services/GetAds';

const Add = () => {
  const { annonceSlug } = useParams();
  console.log( {annonceSlug} )
  const {data} = GetAds('http://localhost:3000/real_estate_ads/' + annonceSlug)
  return (
    <div className="container__annonce">
      {data && <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <em>{data.city}</em>
      </div>}
    </div>
  );
};

export default Add;
