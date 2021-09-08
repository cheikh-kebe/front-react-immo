import React, {useEffect, useState, useCallback} from 'react';
import { Link } from 'react-router-dom';
import PreviewAdd from '../../Components/PreviewAdd';
import GetAds from '../../Services/RailsAPI/GetAds';
import APIAdsManager from '../../Services/RailsAPI/AdsFetch';
import { useHistory } from 'react-router';

export const MyAds = () => {
//const history = useHistory()
const [ads, setAds] =  useState("");
  const {data} = GetAds('http://localhost:3000/real_estate_ads/my_ads')
  
  useEffect(() => {
    setAds(data)
  }, [data]);

  const DeleteAd = useCallback(id => {
    const response = APIAdsManager.deleteRealEstateAd(id)
    setAds(ads=> ads.filter(ad => ad.id !== id));
  },[ads]); 

  
  
  return (
    <div className="container__home">
      <h3>Mes Annonces</h3>
        <h3>Voici la liste des annonces</h3>
      <ul className="container__all__adds--preview">
        {ads && ads.map((estate) => (
          <li key = {estate.id}>
    
          <Link to={`/annonces/${estate.id}`}>
            <PreviewAdd estate = {estate}/>
          </Link>
          <button value={estate.id} onClick={()=>DeleteAd(estate.id)}> supprimer</button>
          <Link to={`/annonces/${estate.id}/modification`}>
            <button value={estate.id}> modifier</button>
          </Link>
        </li>
        ))}
      </ul>
    </div>
  )
}

