import React from 'react';
import { Link } from 'react-router-dom';
import FilterSystem from '../../Components/FilterSystem';
import HeroBanner from '../../Components/HeroBanner';
import PreviewAdd from '../../Components/PreviewAdd';
import './home.scss';
import GetAds from '../../Services/RailsAPI/GetAds';

const Home = () => {
  const {data} = GetAds('http://localhost:3000/real_estate_ads') //error, loading
  return (
    <div className="container__home">
      <HeroBanner />
      <FilterSystem />
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
  );
};

export default Home