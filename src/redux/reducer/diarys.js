import { ADD_DIARY, SELECT_DIARY, SAVE_DIARY, DELETE_DIARY } from '../action/index'
import { dummy } from './firebaseConnnect'

const diary = (content) => {
  return {
    D_id: content.id,
    D_auther: content.auther,
    D_name: content.name,
    D_object: content.object
  }
}

// function deleteIt (state, content){
//   const s = state.fillter(con => {return con.id !== })
// }

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
    // case SAVE_DIARY:
    //   return deleteIt(state, action.content)
    case DELETE_DIARY:
      return state.fillter(con => {
        return con.id !== action.id
      })
    default:
      return state
  }
}