import React, { useEffect, useState } from 'react';
import APIAdsManager from '../../../Services/RailsAPI/AdsFetch';
import { useHistory} from "react-router-dom";

export const NewAdForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [adCreated, setAdCreated] = useState("23");
  
  const history = useHistory();
  const CreateAd = async (e) => {
    e.preventDefault();
    const response = await APIAdsManager.createRealEstateAd(title,description, price, city);
    history.push(`/annonces/annonce${response.data.id}`)

    return response
 };


  return (
    <div>
      <div className="form__container">
    
        <label>
          Titre :
          <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </label>
        <label>
          Description :
          <input
          type="text"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />
        </label>
        <label>
          Prix de vente :
          <input
          type="number"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />
        </label>
        <label>
          Ville :
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        </label>
        <button onClick={CreateAd} >Créer l'annonce</button>
        <button onClick={()=>console.log(adCreated)} >Créer l'annonce</button>

  
    </div>
    </div>
  );
}


