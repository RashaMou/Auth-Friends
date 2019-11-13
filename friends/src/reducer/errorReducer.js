import * as types from './../actions'

const initialState = {
  msg: {},
  status: null 
}

export default function(state = initialState, action) {
  switch(action.type) {
    case types.GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status
      }

    case types.CLEAR_ERRORS: // so we don't have old errors hanging around in our state
      return {
        msg: {},
        status: null
      }

    default: 
      return state
  }
}