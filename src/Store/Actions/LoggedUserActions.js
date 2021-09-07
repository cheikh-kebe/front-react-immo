import { REGISTER_USER_LOGIN_STATUS, REGISTER_USER_LOGOUT_STATUS} from'../Types/LoggedUserTypes'

export const RegisterUserLoginStatus = () => {
  return{
    type:  REGISTER_USER_LOGIN_STATUS,
  }
}

export const RegisterUserLogoutStatus = () => {
  return{
    type:  REGISTER_USER_LOGOUT_STATUS,
  }
}