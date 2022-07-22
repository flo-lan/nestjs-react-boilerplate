import React, { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserService from '../service/UserService'
import { RootState } from '../../../dist/src/store/reducer/state'

const Home = (): ReactElement => {
  const dispatch = useDispatch()
  const userState = useSelector((state: RootState) => state.user)
  return (
    <>
      <button
        className="btn"
        type="button"
        onClick={() => {
          UserService.dispatchable.getUsers(dispatch)
        }}
      >
        Get User Request
      </button>
      <div>{JSON.stringify(userState.users)}</div>
    </>
  )
}

export default Home
