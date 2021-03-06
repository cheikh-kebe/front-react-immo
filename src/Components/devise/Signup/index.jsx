import React, { useState} from 'react'
import APIManager from '../../../Services/RailsAPI/UsersFetch';
import './sign_up.scss';
import { useHistory} from "react-router-dom";
import { useDispatch} from 'react-redux';
import { RegisterUserLoginStatus,RegisterUserLogoutStatus } from '../../../Store';

export const SignUp = () => {
  const history = useHistory();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const SignUp = async (e) => {
    e.preventDefault();
    const response = await APIManager.register(email, password);
    console.log(response.data.user_id)
    response.status === 200? dispatch(RegisterUserLoginStatus(response.data.user_id)):dispatch(RegisterUserLogoutStatus());
    history.push("/")
    return response
 };
  return (
    <>
    <div className="main-content__container">
    <h2 className="title__call-to-action">Trouvez la maison de vos rêves et inscrivez-vous aujourd'hui !</h2>
    <div className="form__container">
      <div>
      <form /*</div>onSubmit={fetchRegister}*/>
        <label>
          Email
          <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </label>
        <label>
          Mot de passe
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </label>
        <button type="submit" onClick={SignUp}>S'inscrire</button>
      </form>
    </div>
    </div>
    </div>
    </>
  )
}
