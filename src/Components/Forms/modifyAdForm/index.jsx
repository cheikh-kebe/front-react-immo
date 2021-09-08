import React, { useState, useEffect } from 'react';
import APIAdsManager from '../../../Services/RailsAPI/AdsFetch';
import { useHistory} from "react-router-dom";
import GetAds from '../../../Services/RailsAPI/GetAds';
import { useParams } from 'react-router-dom';

  

export const ModifyAdForm = () => {
  const { annonceSlug } = useParams();
  const URL = 'http://localhost:3000/real_estate_ads/'+ annonceSlug
  console.log(URL)
  const {data} = GetAds(URL)
  const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [city, setCity] = useState("");
  
    useEffect(() => {
    setTitle(data.title)
  
  }, [data]);
  
  
  
  const history = useHistory();
  const CreateAd = async (e) => {
    e.preventDefault();
    const response = await APIAdsManager.createRealEstateAd(title,description, price, city); //TODO:methode update à faire
    Promise.resolve(response)
    history.push(`/annonces/${response.data.id}`)
 };


//const onUpdateInput = (updatedNote) => {
// const updatedNotesArray = notes.map((note) => {
//   if (note.id === activeNote) {
//     return updatedNote;
//   }
//   return note;
// });
// setNotes(updatedNotesArray);
//;
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
        <button onClick={CreateAd} >Créer l'annonce</button>
    </form>
    </div>
    </div>
  );
}


