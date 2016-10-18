import * as types from '../constants/action-type'

export default function detailContent(state = {
    source: false
}, action) {
  switch (action.type) {
    case types.TEST:
        return Object.assign({}, state, {
            source: action.data
        })
        break
    default: 
      return state
  }
}