import React from 'react';
import { useParams } from 'react-router-dom';
import GetAds from '../../Services/RailsAPI/GetAds';
import './add.scss' 

const AdShow = () => {
  const { annonceSlug } = useParams();
  const {data} = GetAds('http://localhost:3000/real_estate_ads/' + annonceSlug)
  return (
    <div className="container__add--show">
      {data && <div>
        <div><img src={data.image_path} alt="illustrating this real estate listing"></img></div>
        <h1>{data.title}</h1>
        <div className= "content--text">
          <p className="price">{data.price}€</p>
          <p>{data.description}</p>
          <p>{data.email}</p>
          <em>{data.city}</em>
          </div>
      </div>}
    </div>
  );
};

export default AdShow;
