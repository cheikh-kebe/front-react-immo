import React, { useState } from 'react';
// Styles
import './sign_in.scss';

export const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const value = {
    email: email,
    password: password
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
        
        <button type="submit">Se Connecter</button>
      </form>
    </div>
  )
}