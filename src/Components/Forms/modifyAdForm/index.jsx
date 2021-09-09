import React, { useState, useEffect } from 'react';
import APIAdsManager from '../../../Services/RailsAPI/AdsFetch';
import { useHistory} from "react-router-dom";
import { useParams } from 'react-router-dom';

  

export const ModifyAdForm = () => {
  const { annonceSlug } = useParams();


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
   useEffect(() => {
     getData()
 });

 const getData = async() => {
  const {data} = await APIAdsManager.getAds(annonceSlug)
  console.log(data)
  setTitle(data.title)
  setDescription(data.description)
  setPrice(data.price)
  setCity(data.city)
  setId(data.id)
  setImage(data.image)
   }
 
  const history = useHistory();

  const UpdateAd = async (e) => {
    e.preventDefault();
    const response = await APIAdsManager.updateRealEstateAd(id,title,description, price, city, image);
    Promise.resolve(response)
    history.push(`/mes_annonces`)
 };


  return (
    <div>
      <div className="form__container">
      <form>
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
        <label>
          Image :
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        </label>
        <button onClick={UpdateAd}>Modifier l'annonce</button>
    </form>
    </div>
    </div>
  );
}


