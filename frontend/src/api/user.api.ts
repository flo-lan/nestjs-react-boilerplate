import { RequestAction } from '@redux-requests/core'

import UserDTO from '../shared/types/DTO/UserDTO'
import UserActions from '../store/actions/userActions'
import { ApiError } from '../shared/types/ApiError'

const BASE_URL = 'users'

export const UserApi = {
  getUsers: (): RequestAction<UserDTO | ApiError> => ({
    type: UserActions.GET_USERS,
    request: {
      url: BASE_URL,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  }),
}

export default UserApi
