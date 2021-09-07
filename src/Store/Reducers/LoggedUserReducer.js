import {  REGISTER_USER_LOGIN_STATUS,  REGISTER_USER_LOGOUT_STATUS } from "../Types/LoggedUserTypes";

const initialUserState = {
  isLogged: false
}

const LoggedUserReducer = (state = initialUserState, action) => {

  switch(action.type){
    case REGISTER_USER_LOGIN_STATUS:
      return {
        ...state,
        isLogged: true
      }
    case REGISTER_USER_LOGOUT_STATUS:
      return {
        ...state,
        isLogged: false
    }

    default:
        return state;
    }
  
}

export default LoggedUserReducer