import React from 'react';
import { useParams } from 'react-router-dom';
import './add.scss' 
//api
import { API_URL } from '../../Config/config';
import GetAds from '../../Services/RailsAPI/GetAds';

const AdShow = () => {
  const { annonceSlug } = useParams();
  const {data} = GetAds(API_URL+'/real_estate_ads/'+ annonceSlug)
  return (
    <div className="container__add--show">
      {data && <div>
        <div><img src={data.image_path} alt= "this real estate listing" ></img></div>
        <div className= "content--text">
          <div className="summary">
            <h1 className="title">{data.title}</h1>
            <span className="city">{data.city}</span>
          </div>
          <span className="price">{data.price}€</span>
          <span className="description">{data.description}</span>
          <div className="contact">
            <label>prenez contact</label>
            <div className="email">{data.email}</div>
          </div>
          </div>
      </div>}
    </div>
  );
};

export default AdShow;
