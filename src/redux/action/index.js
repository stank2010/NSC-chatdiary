var nextBlog = 0
export const ADD_DIARY = 'ADD_DIARY'
export const SELECT_DIARY = 'SELECT_DIARY'
export const SAVE_DIARY = 'SAVE_DIARY'
export const DELETE_DIARY = 'DELETE_DIARY'
export const ADD_USER = 'ADD_USER'
export const AUTHEN_USER = 'AUTHER'
export const GET_USER = 'GET_USER'


export const addDiary = (content) => ({
  type: ADD_DIARY,
  content
})

export const selectDiary = (content) => ({
  type: SELECT_DIARY,
  content
})

export const saveDiary = (content) => ({
  type: SAVE_DIARY,
  content
})

export const deleteDiary = (content) => ({
  type: DELETE_DIARY,
  content
})

export const addUser = (content) => ({
  type: ADD_USER,
  content
})

export const authenUser = (content) => ({
  type: AUTHEN_USER,
  content
})

export const getUser = (content) => ({
  type: GET_USER,
  content
})

