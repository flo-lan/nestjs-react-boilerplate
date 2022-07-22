import { Dispatch } from 'react'
import UserApi from '../api/user.api'

const dispatchable = {
  getUsers: async (dispatch: Dispatch<any>): Promise<any> =>
    dispatch(UserApi.getUsers()),
}

export default {
  dispatchable,
}
