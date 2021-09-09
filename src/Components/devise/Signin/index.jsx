import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./sign_in.scss";
import APIManager from "../../../Services/RailsAPI/UsersFetch";
import {
  RegisterUserLoginStatus,
  RegisterUserLogoutStatus,
} from "../../../Store";

export const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const response = await APIManager.login(email, password);
    console.log(response.data.user_id);
    response.status === 200
      ? dispatch(RegisterUserLoginStatus(response.data.user_id))
      : dispatch(RegisterUserLogoutStatus());
    history.goBack();
  };

  return (
    <div className="form__container">
      <form>
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
        <button type="submit" onClick={login}>
          Se Connecter
        </button>
      </form>
    </div>
  );
};
