const initialState = {
    posts: [],
  }
  
  export default function appReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_ALL_POST': {
        return {
          ...state,
          posts: [
            ...state.posts
          ]
        }
      }
      default:
        return state
    }
  }