//react- router - redux 

import React, { useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';
//components
import FilterSystem from '../../Components/FilterSystem';
import HeroBanner from '../../Components/HeroBanner';
import PreviewAdd from '../../Components/PreviewAdd';
//styles
import './home.scss';
//api
import GetAds from '../../Services/RailsAPI/GetAds';
import { API_URL } from '../../Config/config';
//context
import { FilterContext } from '../../Context/FilterContext';

const Home = () => {

  const { data } = GetAds('https://api-immocoin.herokuapp.com/real_estate_ads/') //error, loading

  const [allEstateToDisplay, setAllEstateToDisplay] = useState([]);
  const [ads, setAds] = useState([]);
  
  useEffect(() => {
    setAllEstateToDisplay(data);
    setAds(data);
  }, [data]);
  
  useEffect(() => {
    setAds(allEstateToDisplay);
  }, [setAds, allEstateToDisplay]);
  
  const onAfterChange = useCallback(value => {
    setAds(allEstateToDisplay);
    console.log('onAfterChange: ', value);
    setAds(allEstateToDisplay.filter((estate) => estate.price >= value[0] && estate.price <= value[1]));
    console.log(ads);
  },[ads,allEstateToDisplay])
  
  return (
    <FilterContext.Provider value={{ allEstateToDisplay, onAfterChange, setAds}}>
      <div className="container__home">
        <HeroBanner />
        <FilterSystem />
        <ul className="container__all__adds--preview">
          {ads && ads.sort((a, b) => a.price - b.price).map((estate) => (
            <li key = {estate.id}>
              <Link to={`/annonces/${estate.id}`}>
                <PreviewAdd estate = {estate}/>
              </Link>
          </li>
          ))}
        </ul>
      </div>
    </FilterContext.Provider>
  );
};

export default Home;
