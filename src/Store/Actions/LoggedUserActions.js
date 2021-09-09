import { REGISTER_USER_LOGIN_STATUS, REGISTER_USER_LOGOUT_STATUS} from'../Types/LoggedUserTypes'

export const RegisterUserLoginStatus = (id) => {
  return{
    type:  REGISTER_USER_LOGIN_STATUS,
    id
  }
}

export const RegisterUserLogoutStatus = () => {
  return{
    type:  REGISTER_USER_LOGOUT_STATUS,
  }
}