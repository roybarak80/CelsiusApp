import { ActionTypes } from "./actions-types"

const initState = {
  
  playlists: [],
  categories: [],
  newReleases: [],
  indicators: {
    fetchingNewReleases: false,
    fetchingPlaylists: false,
    fetchingCategories: false,
    isAuthenticate:false,
  },
  token:''
}
export const discoverReducer = (state = initState, { type, payload }) => {
  switch (type) {

    //auth
    case ActionTypes.SET_TOKEN:
      return {
        ...state,
        token: payload
      };
    

    // new releases
    case ActionTypes.SET_NEW_RELEASES_PENDING:
      return {
        ...state,
        indicators: {
          ...state.indicators,
          fetchingNewReleases: true
        }
      };
    case ActionTypes.SET_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        newReleases: payload,
        indicators: {
          ...state.indicators,
          fetchingNewReleases: false
        }
      };
    case ActionTypes.SET_NEW_RELEASES_FAILURE:
      return {
        ...state,
        indicators: {
          ...state.indicators,
          fetchingNewReleases: false
        }
      };


    // playlists
    case ActionTypes.SET_PLAYLISTS_PENDING:
      return {
        ...state,
        indicators: {
          ...state.indicators,
          fetchingPlaylists: true
        }
      };
    case ActionTypes.SET_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: payload,
        indicators: {
          ...state.indicators,
          fetchingPlaylists: false
        }
      };
    case ActionTypes.SET_PLAYLISTS_FAILURE:
      return {
        ...state,
        indicators: {
          ...state.indicators,
          fetchingPlaylists: false
        }
      };

    // categories
    case ActionTypes.SET_CATEGORIES_PENDING:
      return {
        ...state,
        indicators: {
          ...state.indicators,
          fetchingCategories: true
        }
      };
    case ActionTypes.SET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        indicators: {
          ...state.indicators,
          fetchingCategories: false
        }
      };
    case ActionTypes.SET_CATEGORIES_FAILURE:
      return {
        ...state,
        indicators: {
          ...state.indicators,
          fetchingCategories: false
        }
      };
    default:
      return state;
  }
}