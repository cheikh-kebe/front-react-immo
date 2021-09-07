import React, { useState } from 'react';
// Styles
import './sign_in.scss';
import Cookies from 'js-cookie'
import APIManager from '../../../Services/RailsAPI/UsersFetch';
import { useHistory} from "react-router-dom";


export const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const value = {
    email: email,
    password: password
  };

  const login = async (e) => {
    e.preventDefault();
    const response = await APIManager.login(email, password);
    history.goBack()
 };
 const logout = async (e) => {
  e.preventDefault();
  const response = await APIManager.logout();
  history.goBack()
};

  return (
    <div className="form__container">
      <form /*</div>onSubmit={fetchRegister}*/>
        <label>
          Email :
          <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        
        />
        </label>
        <label>
          Mot de passe:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </label>
        
        <button type="submit" onClick={login}>Se Connecter</button>
        <button type="submit" onClick={logout}>Se déconnecter</button>
      </form>
    </div>
  )
}