const initialState = {
  email: '',
  name: '',
  user_id: '',
  profile_img: ''
}

// Action Constants
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'

//Action builders
export function updateUserInfo(userObj) {
  return {
    type: UPDATE_USER_INFO,
    payload: userObj
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return { ...state, ...action.payload }
    default: return state
  }
}