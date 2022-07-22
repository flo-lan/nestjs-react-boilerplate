import { Reducer } from 'redux'
import Cookies from 'js-cookie'

import config from '../../config/config'
import UserActions from '../actions/userActions'
import UserDTO from '../../shared/types/DTO/UserDTO'

export interface UserState {
  loggedIn: boolean
  user?: UserDTO
  userLoaded: boolean
  userLoading: boolean
  users?: UserDTO[]
}

const initialState: UserState = {
  loggedIn: !!Cookies.get(config.auth.cookie),
  user: null,
  users: [],
  userLoaded: false,
  userLoading: false,
}

const userReducer: Reducer = (
  state: UserState = initialState,
  action: any
): UserState => {
  switch (action.type) {
    case `${UserActions.GET_USERS}_SUCCESS`: {
      console.info(action)
      return {
        ...state,
        users: action.response.data,
      }
    }

    case `${UserActions.GET_USER}`:
      return {
        ...state,
        user: null,
        userLoaded: false,
        userLoading: true,
      }
    case `${UserActions.GET_USER}_ERROR`:
      return {
        ...state,
        user: null,
        userLoaded: false,
        userLoading: false,
      }
    case `${UserActions.GET_USER}_SUCCESS`:
      return {
        ...state,
        user: action.response.data.user,
        userLoaded: true,
        userLoading: false,
      }

    case `${UserActions.REGISTER_USER}_SUCCESS`:
      return {
        ...state,
      }

    case `${UserActions.LOGIN}_SUCCESS`:
      return {
        ...state,
        loggedIn: true,
      }

    case UserActions.LOGOUT:
      return {
        ...state,
        loggedIn: false,
      }
    default:
      return state
  }
}

export default userReducer
