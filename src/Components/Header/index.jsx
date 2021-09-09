import React from "react";
import { Link } from 'react-router-dom';
import './header.scss'
import { useDispatch, useSelector} from 'react-redux';
import {RegisterUserLogoutStatus } from "../../Store";
import { useHistory} from "react-router-dom";
import APIManager from "../../Services/RailsAPI/UsersFetch.jsx";
  

const Header = () => {
  const isLogged = useSelector(state => state.user.isLogged)
  const history = useHistory();
  const dispatch = useDispatch()
  const logout = async (e) => {
    e.preventDefault();
    dispatch(RegisterUserLogoutStatus())
    const response = await APIManager.logout();
    console.log(response)
    
    history.push('/')
   ;
   }
  return (
    <header className="container__header">
      <h1><Link to="/">ImmoCoin</Link></h1>
      <ul>
        {isLogged?
        <>
        
        <li><Link to="/mes_annonces">Mes annonces </Link></li>
        <button type="submit" onClick={logout}>Se déconnecter</button>
        </>
        :
        <>
        <li><Link to="/sign_up">SIGN-UP</Link></li>
        <li><Link to="/sign_in">SIGN-IN</Link></li>
        </>
        }
      </ul>
    </header>
  );
};

export default Header;
