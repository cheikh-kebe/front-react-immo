import React from "react";
import { Link } from 'react-router-dom';
import './header.scss'
import { useDispatch, useSelector} from 'react-redux';
import { RegisterUserLoginStatus,RegisterUserLogoutStatus } from "../../Store";
import { useHistory} from "react-router-dom";
import APIManager from "../../services/RailsAPI/UsersFetch.jsx";
  

const Header = () => {
  const isLogged = useSelector(state => state.user.isLogged)
  const history = useHistory();
  const dispatch = useDispatch()
  const logout = async (e) => {
    e.preventDefault();
    const response = await APIManager.logout();
    console.log(response)
    response.status === 200? dispatch(RegisterUserLogoutStatus()):dispatch(RegisterUserLoginStatus());
    history.push('/')
   ;
   }
  return (
    <header className="container__header">
      <h1><Link to="/">ImmoCoin</Link></h1>
      <ul>
        
        <li><Link to="/page2">PAGE 2</Link></li>
        <li><Link to="/page3">PAGE 3</Link></li>
        {isLogged?
        <>
        <li><Link to="/nouvelle_annonce">Ajouter une annonce </Link></li>
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
