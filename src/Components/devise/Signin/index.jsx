import React, { useState } from 'react';
// Styles
import './sign_in.scss';
import APIManager from '../../../Services/RailsAPI/UsersFetch';
import { useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { RegisterUserLoginStatus,RegisterUserLogoutStatus } from '../../../Store';


export const SignIn = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const login = async (e) => {
    e.preventDefault();
    const response = await APIManager.login(email, password);
    response.status === 200? dispatch(RegisterUserLoginStatus()):dispatch(RegisterUserLogoutStatus());
    history.goBack()
 };

  const logout = async (e) => {
   e.preventDefault();
   const response = await APIManager.logout();
   console.log(response)
   response.status === 200? dispatch(RegisterUserLogoutStatus()):dispatch(RegisterUserLoginStatus());
   history.push('/')
  ;
  }
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