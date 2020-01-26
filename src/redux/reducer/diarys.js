import { ADD_DIARY, SELECT_DIARY, DELETE_DIARY } from '../action/index'
import { dummy } from './firebaseConnnect'

const diary = (content) => {
  return {
    D_id: content.id,
    D_auther: content.auther,
    D_name: content.name,
    D_object: content.object
  }
}

const diarys = (state = dummy, action) => {
  switch (action.type) {
    case ADD_DIARY:
      return [
        ...state,
        diary(action.content)
      ]
    case SELECT_DIARY:
      return state.fillter(con => {
        return con.id === action.id
      })
    case DELETE_DIARY:
      return state.fillter(con => {
        return con.id !== action.id
      })
    default:
      return state
  }
}

export default diarys