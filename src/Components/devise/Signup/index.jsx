import React, { useState } from 'react'
import Cookies from 'js-cookie'
import APIManager from '../../../Services/RailsAPI/UsersFetch';
import './sign_up.scss';
import { useHistory} from "react-router-dom";

export const SignUp = () => {
  const history = useHistory();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");

  const value = {
    email   : email,
    password: password
  };
  console.log(value)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await APIManager.register(email, password);
    let isLogged = Cookies.get("isLogged?") 
    history.goBack()
 };
  return (
    <>
    <h2>Trouvez la maison de vos rêves! Inscrivez-vous!</h2>
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
        
        <button type="submit" onClick={handleSubmit}>S'inscrire</button>
      </form>
    </div>
    </>
  )
}
